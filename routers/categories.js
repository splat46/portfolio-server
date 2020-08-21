const { Router } = require("express");
const router = new Router();
const Categories = require("../models").category;

// Get category list
router.get("/categories", async (req, res) => {
  try {
    const category = await Categories.findAll();
    console.log("categories:", category);
    res.json(category);
  } catch (error) {
    res.status(400).send({ message: "Error in getting categories" });
  }
});

module.exports = router;
