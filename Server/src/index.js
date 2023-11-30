const express = require("express");
const https = require("https");
const fs = require("fs");
const cors = require("cors");
const path = require("path");
const dotenv = require("dotenv");

// Specify the path to your .env file
dotenv.config({ path: path.join(__dirname, "../.env") });

const app = express();
const PORT = 4000;

// Configurar o middleware CORS
app.use(cors());

// Configurar o proxy para lidar com solicitações da API
app.set("trust proxy", true);

// Default route
app.get("/", (req, res) => {
  res.json({ message: "App is working fine!" });
});

// Handle requests at the "/api/download/:fileName" path
app.get("/download/:fileName", (req, res) => {
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

let pathKey, pathCert;

// Configurar servidor HTTPS
if (process.env.NODE_ENV === "production") {
  pathKey = "/etc/letsencrypt/live/bobagi.net/privkey.pem";
  pathCert = "/etc/letsencrypt/live/bobagi.net/fullchain.pem";
} else {
  pathKey = "localhost.key";
  pathCert = "localhost.pem";
}

const options = {
  key: fs.readFileSync(path.resolve(__dirname, pathKey)),
  cert: fs.readFileSync(path.resolve(__dirname, pathCert)),
};

const server = https.createServer(options, app);

// Iniciar o servidor
server.listen(PORT, () => {
  console.log(`Servidor HTTPS está rodando em https://localhost:${PORT}`);
});
