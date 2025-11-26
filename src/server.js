const express = require("express");
const app = express();

require("./utils/cron");

const jobRoutes = require("./routes/job.route");
const SAPRoutes = require("./SAP-api/routes/SAP.route");

app.use(express.json());
app.use("/api/jobs", jobRoutes);
app.use("/SAP", SAPRoutes);

PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
