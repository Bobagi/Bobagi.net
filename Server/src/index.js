const express = require("express");
const cors = require("cors");
const path = require("path");
const https = require("https");
const fs = require("fs");

const app = express();
const port = process.env.PORT || 4000;

// Enable CORS
app.use(cors());

// Serve files from the 'public' folder
app.use(express.static(path.join(__dirname, "../public")));

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

// HTTPS Configuration
// Assuming your Node.js server code is in /var/www/html/Bobagi.net/Server/src
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
  console.log(`Server is running on port ${port}`);
});
