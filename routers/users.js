const { Router } = require("express");
const router = new Router();
const Users = require("../models").user;

// Get users list
router.get("/", async (req, res) => {
  try {
    const users = await Users.findAll();
    console.log("users:", users);
    res.json(users);
  } catch (error) {
    res.status(400).send({ message: "Error in getting users" });
  }
});

router.post("/", async (req, res, next) => {
  try {
    const { email, password, fullName } = req.body;
    if (!email || !password || !fullName) {
      res.status(400).send("missing parameters");
    } else {
      const hashedPassword = bcrypt.hashSync(password, 10);
      const newUser = await User.create({
        email,
        password: hashedPassword,
        fullName,
      });
      res.json(newUser);
    }
  } catch (e) {
    next(e);
  }
});

module.exports = router;
