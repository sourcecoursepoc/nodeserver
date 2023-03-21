var schemasData = require("./schems.json");
var projectsData = require("./projects.json");
var pipelineData = require("./pipeline.json");

// Requiring module
const express = require("express");
const cors = require("cors");

// Creating express app object
var app = express();

// CORS is enabled for all origins
app.use(cors());

// Port Number
const port = 8000;

// Server setup
app.listen(port, () => `Server running on port ${port}`);

app.get("/", function (req, res) {
  console.log(req);
});

app.get("/schemas", function (req, res, next) {
  res.json(schemasData);
});

app.get("/projects", function (req, res, next) {
  res.json(projectsData);
});

app.get("/pipeline", function (req, res, next) {
  res.json(pipelineData);
});
