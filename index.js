const tableData = require("./table.json");
const groupData = require("./groupData.json");
const container2 = require("./container2.json");
const item2 = require("./container2.json");
const projectsData = require("./projects.json");
const pipelineData = require("./pipeline.json");

// Requiring module
const express = require("express");
const cors = require("cors");

// Creating express app object
const app = express();

// CORS is enabled for all origins
app.use(cors());

// Port Number
const port = 8000;

// Server setup
app.listen(port, () => `Server running on port ${port}`);

// app.get("/", function (req, res) {
//   console.log(req);
// });

app.get("/tables", function (req, res, next) {
  res.send(tableData);
});

app.get("/groupData", function (req, res, next) {
  res.send(groupData);
});
app.get("/projects", function (req, res, next) {
  res.send(projectsData);
});

app.get("/pipeline", function (req, res, next) {
  res.send(pipelineData);
});
