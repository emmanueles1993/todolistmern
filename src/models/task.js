const mongoose = require("mongoose");
const { Schema } = mongoose;

const taskschema = new Schema({
  title: { type: String, required: true },
  decription: { type: String, required: true },
});

module.exports = mongoose.model("task", taskschema);
