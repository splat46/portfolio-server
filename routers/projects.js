const { Router } = require("express");
const router = new Router();
const Projects = require("../models").project;

// Get Project list
router.get("/projects", async (req, res) => {
  try {
    const projects = await Projects.findAll();
    console.log("projects", projects);
    res.json(projects);
  } catch (error) {
    res.status(400).send({ message: "Error in getting projects" });
  }
});

module.exports = router;
