const express = require("express");
const router = express.Router();

const task = require("../models/task");

router.get("/", async (req, res) => {
  const tasks = await task.find();
  res.json(tasks);
});

router.post("/", async (req, res) => {
  
});

module.exports = router;
