const bcrypt = require("bcrypt");
const Router = require("express").Router;
const User = require("../models").user;

const router = new Router();

router.get("/", async (req, res, next) => {
  try {
    const allUsers = await User.findAll();
    res.json(allUsers);
  } catch (e) {
    next(e);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(400).send("missing parameters");
    } else {
      const newUser = await User.create({
        email,
        password: bcrypt.hashSync(password, 10),
      });
      res.json(newUser);
    }
  } catch (e) {
    next(e);
  }
});

module.exports = router;
