const cron = require("node-cron");
const mockService = require("../services/mock.service");
const { saveJobs } = require("../services/save.service");

cron.schedule("*/60 * * * *", async () => {
  console.log("[CRON] Running job: save mock into DB");

  try {
    const jobsdb = mockService.getJobsdbMock();
    const jobthai = mockService.getJobthaiMock();

    const r1 = await saveJobs("jobsdb", jobsdb);
    const r2 = await saveJobs("jobthai", jobthai);

    console.log("[CRON] Inserted → JobsDB:", r1.inserted, " JobThai:", r2.inserted);
  } catch (err) {
    console.error("[CRON] Error:", err);
  }
});
