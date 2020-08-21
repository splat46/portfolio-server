const Users = require("../models").user;

// Get users list
app.get("/users", async (req, res) => {
  try {
    const users = await Users.findAll();
    console.log("users:", users);
    res.json(users);
  } catch (error) {
    res.status(400).send({ message: "Error in getting users" });
  }
});
