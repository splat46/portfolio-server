const express = require("express");
const app = express();
const PORT = 4000;

console.log("port running on", PORT);
app.use(express.json());
