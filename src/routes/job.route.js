const express = require("express");
const router = express.Router();
const path = require("path");
const fs = require("fs");

// MOCK API (ข้อมูลจำลอง)
router.get("/mock", (req, res) => {
  const jsonPath = path.join(__dirname, "../mock/jobsdb.json");
  const data = JSON.parse(fs.readFileSync(jsonPath));
  res.json({
    source: "JobsDB Mock API",
    total: data.length,
    data: data
  });
});

module.exports = router;
