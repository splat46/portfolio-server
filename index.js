const express = require("express");
const app = express();
const port = 4000;

const Projects = require("./models").project;

app.get("/", (req, res) => res.send("Hello"));

// Get Project list
app.get("/projects", async (req, res) => {
  try {
    const projects = await Projects.findAll();
    console.log("projects", projects);
    res.json(projects);
  } catch (error) {
    res.status(400).send({ message: "Error in getting projects" });
  }
});

app.listen(port, () => console.log(`App running on port ${port}!`));
