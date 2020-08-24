const express = require("express");
const userRouter = require("./routers/users");
const projectRouter = require("./routers/projects");
const categoryRouter = require("./routers/categories");
const authRouter = require("./routers/auth");
const authMiddleware = require("./auth/middleware");

const port = process.env.port || 4000;
const app = express();

// Middlewares
const jsonParser = express.json();
app.use(jsonParser);

// Routers
app.use("/projects", authMiddleware, projectRouter);
app.use("/users", userRouter);
app.use("/categories", categoryRouter);
app.use("/", authRouter);

// Start server
app.listen(port, () => console.log(`App running on port ${port}!`));
