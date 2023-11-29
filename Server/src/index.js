const express = require("express");
const cors = require("cors");
const path = require("path");
const https = require("https");
const fs = require("fs");
const dotenv = require("dotenv");

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

app.get("/", (req, res) => {
  res.send("App is working fine");
});

app.get("/download/:fileName", (req, res) => {
  const fileName = req.params.fileName;
  const filePath = path.join(__dirname, "../public", fileName);

  res.download(filePath, (err) => {
    if (err) {
      console.error("Error downloading file:", err);
      res.status(500).send("Internal Server Error");
    }
  });
});

console.log(`running in ${process.env.NODE_ENV} mode`);
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
    console.log(`Server is running on port ${port} in production mode`);
  });
} else {
  // HTTP Configuration for Development
  app.listen(port, () => {
    console.log(`Server is running on port ${port} in development mode`);
  });
}
