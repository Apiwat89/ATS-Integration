const express = require("express");
const app = express();

require("./utils/cron");

const jobRoutes = require("./routes/job.route");
const systemRoutes = require("./system-api/routes/system.route");

app.use(express.json());
app.use("/api/jobs", jobRoutes);
app.use("/system", systemRoutes);

PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
