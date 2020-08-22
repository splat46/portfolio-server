const { Router } = require("express");
const router = new Router();
const Projects = require("../models").project;

// Get Project list
router.get("/", async (req, res) => {
  try {
    const projects = await Projects.findAll();
    console.log("projects", projects);
    res.json(projects);
  } catch (error) {
    res.status(400).send({ message: "Error in getting projects" });
  }
});

router.get("/", (req, res, next) => {
  const limit = Math.min(req.query.limit || 25, 500);
  const offset = req.query.offset || 0;

  Projects.findAndCountAll({ limit, offset })
    .then((result) => res.send({ project: result.rows, total: result.count }))
    .catch((error) => next(error));
});

module.exports = router;
