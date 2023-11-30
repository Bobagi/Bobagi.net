const express = require("express");
const cors = require("cors");
const path = require("path");
const https = require("https");
const fs = require("fs");
const dotenv = require("dotenv");
const os = require("os");

// Specify the path to your .env file
dotenv.config({ path: path.join(__dirname, "../.env") });

const app = express();
const port = process.env.PORT || 4000;

// Enable reverse proxy support
app.set("trust proxy", true);

// Enable CORS
app.use(cors());

// Serve files from the 'public' folder
app.use(express.static(path.join(__dirname, "../public")));

// Handle requests at the root path ("/")
app.get("/", (req, res) => {
  res.send("App is working fine");
});

// Handle requests at the "/api" path
app.get("/api", (req, res) => {
  res.send("API is working fine");
});

// Handle requests at the "/api/download/:fileName" path
app.get("/api/download/:fileName", (req, res) => {
  const fileName = req.params.fileName;
  const filePath = path.join(__dirname, "../public", fileName);

  // Check if the file exists
  if (!fs.existsSync(filePath)) {
    return res.status(404).send("File not found");
  }

  // Set content disposition header for download
  res.setHeader("Content-Disposition", `attachment; filename=${fileName}`);

  // Stream the file to the response
  const fileStream = fs.createReadStream(filePath);
  fileStream.on("error", (err) => {
    console.error("Error reading file:", err);
    res.status(500).send("Internal Server Error");
  });

  fileStream.pipe(res);

  // Close the response when the download is complete
  fileStream.on("end", () => {
    res.end();
  });
});

console.log(`running in ${process.env.NODE_ENV} mode`);

// Get the hostname
const hostname = os.hostname();

// Print the hostname with the port
console.log(`Hostname: ${hostname}, Port: ${port}`);

// HTTPS Configuration for Production
if (process.env.NODE_ENV === "production") {
  const serverOptions = {
    key: fs.readFileSync(
      path.resolve(
        __dirname,
        "/../../../../../etc/ssl/private/ssl-cert-snakeoil.key"
      )
    ),
    cert: fs.readFileSync(
      path.resolve(
        __dirname,
        "/../../../../../etc/ssl/certs/ssl-cert-snakeoil.pem"
      )
    ),
  };

  const httpsServer = https.createServer(serverOptions, app);

  httpsServer.listen(port, () => {
    console.log(`Server is running on ${hostname}:${port} in production mode`);
  });
} else {
  // HTTP Configuration for Development
  app.listen(port, () => {
    console.log(`Server is running on ${hostname}:${port} in development mode`);
  });
}
