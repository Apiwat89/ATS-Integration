const express = require("express");
const app = express();
const jobsdbRoute = require("./jobs-integration/routes/jobsdb.route");

// ใช้งาน mock API
app.use("/api/jobsdb", jobsdbRoute);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
