const task = require("../models/task");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  const tasks = await task.find();
  res.json(tasks);
});

router.get('/:id', async (req, res) => {
 const task1 = await task.findById(req.params.id);
  res.json(task1);
});

router.post("/", async (req, res) => {
  const { title, description } = req.body;
  const newTask = new task({ title, description });
  await newTask.save();
  res.json({ status: "Task Saved" });
});

router.put('/:id', async (req, res) => {
const { title, description } = req.body;
const newTask = {title, description};
await task.findByIdAndUpdate(req.params.id, newTask);
res.json({status: 'Task updated'});
});

router.delete('/:id' , async (req, res) => {
  await task.findByIdAndRemove(req.params.id);
  res.json({status: 'Task Deleted'});
});
module.exports = router;
