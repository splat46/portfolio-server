const { Router } = require("express");
const { toJWT, toData } = require("../auth/jwt");

const router = new Router();

router.post("/login", async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400).send({
      message: "Please enter a valid email and password",
    });
  } else {
    res.send({
      jwt: toJWT({ userId: 1 }),
    });
  }
});

module.exports = router;
