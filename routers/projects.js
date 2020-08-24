const express = require("express");
const Project = require("../models").project;
const { toData } = require("../auth/jwt");

const router = express.Router();

router.get("/messy", async (req, res, next) => {
  const auth =
    req.headers.authorization && req.headers.authorization.split(" ");
  if (auth && auth[0] === "Bearer" && auth[1]) {
    try {
      const data = toData(auth[1]);
    } catch (e) {
      res.status(400).send("Invalid JWT token");
    }
    const project = await Project.findAll();
    res.json(project);
  } else {
    res.status(401).send({
      message: "Please supply some valid credentials",
    });
  }
});

router.get("/:projectId", async (req, res, next) => {
  try {
    const project = await Project.findByPk(req.params.projectId);
    res.json(project);
  } catch (e) {
    next(e);
  }
});

router.post("", async (req, res, next) => {
  try {
    const project = await Project.create(req.body);
    res.json(project);
  } catch (error) {
    next(error);
  }
});
module.exports = router;
