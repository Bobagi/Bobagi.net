const express = require("express");
const https = require("https");
const fs = require("fs");
const cors = require("cors");
const path = require("path");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");

// Specify the path to your .env file
dotenv.config({ path: path.join(__dirname, "../.env") });

const app = express();
const PORT = 4000;

// Configurar o middleware CORS
app.use(cors());

// Middleware to parse JSON request bodies
app.use(bodyParser.json());

// Configurar o proxy para lidar com solicitações da API
app.set("trust proxy", true);

// Import your route files
const defaultRoutes = require("../routes/defaultRoutes");
const downloadRoutes = require("../routes/download");
const auth = require("../routes/auth");

// Use the routes in your app
app.use("/", defaultRoutes);
app.use("/download", downloadRoutes);
app.use("/auth", auth);

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
