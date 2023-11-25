const express = require("express");
const cors = require("cors");
const path = require("path");

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

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
