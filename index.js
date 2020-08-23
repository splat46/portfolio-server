const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Hello"));

const jsonParser = express.json();

app.use(jsonParser);
const projectRouter = require("./routers/projects");
const userRouter = require("./routers/users");
const categoryRouter = require("./routers/categories");
const authRouter = require("./routers/auth");

app.use("/projects", projectRouter);
app.use("/users", userRouter);
app.use("/categories", categoryRouter);
app.use("/auth", authRouter);

const port = process.env.port || 4000;

app.listen(port, () => console.log(`App running on port ${port}!`));
