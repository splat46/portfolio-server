const { Router } = require("express");
const router = new Router();
const Users = require("../models").user;

// Get users list
router.get("/users", async (req, res) => {
  try {
    const users = await Users.findAll();
    console.log("users:", users);
    res.json(users);
  } catch (error) {
    res.status(400).send({ message: "Error in getting users" });
  }
});

module.exports = router;
