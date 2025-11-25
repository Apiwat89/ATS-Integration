const express = require("express");
const router = express.Router();
const controller = require("../controllers/job.controller");

router.get("/jobsdb/mock", controller.getJobsdbMock);
router.get("/jobthai/mock", controller.getJobthaiMock);

router.post("/save-mock", controller.saveMockToDb);

module.exports = router;
