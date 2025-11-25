const express = require("express");
const router = express.Router();
const controller = require("../controllers/system.controller");

router.get("/jobs/all", controller.getAllJobs);
router.get("/jobs/jobdb", controller.getJobdb);
router.get("/jobs/jobthai", controller.getJobthai);
router.get("/jobs/:id", controller.getJobById);

module.exports = router;
