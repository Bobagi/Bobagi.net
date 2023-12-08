const express = require("express");
const router = express.Router();
const path = require("path");
const fs = require("fs");

router.get("/:fileName", (req, res) => {
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

module.exports = router;
