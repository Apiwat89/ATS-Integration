const systemService = require("../services/system.service");

module.exports = {
  getAllJobs: (req, res) => {
    const data = systemService.getAllJobs();
    res.json({ source: "all", count: data.length, data });
  },

  getJobdb: (req, res) => {
    const data = systemService.getJobsBySource("jobsdb");
    res.json({ source: "jobsdb", count: data.length, data });
  },

  getJobthai: (req, res) => {
    const data = systemService.getJobsBySource("jobthai");
    res.json({ source: "jobthai", count: data.length, data });
  },

  getJobById: (req, res) => {
    const job = systemService.getJobById(req.params.id);
    if (!job) return res.status(404).json({ error: "Job not found" });
    res.json({ data: job });
  }
};
