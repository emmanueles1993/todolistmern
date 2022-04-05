const mongoose = require("mongoose");
const URI = "mongodb+srv://emmanuel:1143141274@prueba.zjezx.mongodb.net/test";

mongoose
  .connect(URI)
  .then((db) => console.log("Db is connected"))
  .catch((error) => console.error(error));

module.exports = mongoose;
