const mockService = require("../services/mock.service");
const { saveJobs } = require("../services/save.service");

module.exports = {
  getJobsdbMock: (req, res) => {
    const data = mockService.getJobsdbMock();
    res.json({ source: "jobsdb-mock", data });
  },

  getJobthaiMock: (req, res) => {
    const data = mockService.getJobthaiMock();
    res.json({ source: "jobthai-mock", data });
  },

  saveMockToDb: (req, res) => {
    try {
      const jobsdb = mockService.getJobsdbMock();
      const jobthai = mockService.getJobthaiMock();

      const r1 = saveJobs("jobsdb", jobsdb);
      const r2 = saveJobs("jobthai", jobthai);

      res.json({
        message: "Mock data saved to SQLite",
        jobsdb: r1,
        jobthai: r2
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to save mock" });
    }
  }
};
