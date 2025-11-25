const express = require("express");
const app = express();
const jobRoutes = require("./routes/job.route");
const initDatabase = require("./database/init");

initDatabase(); 

app.use(express.json());
app.use("/api/jobs", jobRoutes);

const PORT = 3000;
app.listen(PORT, () => console.log("Server running on", PORT));
console.log(`Server running on http://localhost:${PORT}`);