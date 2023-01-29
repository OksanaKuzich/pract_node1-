const { model, Schema } = require("mongoose");

const schemaFilms = Schema({
  title: {
    type: String,
    require: [true, "db: film title is require"],
  },
  director: {
    type: String,
    default: "Martin Scorcese",
  },
  rating: {
    type: Number,
    default: 0.0,
  },
  year: {
    type: Number,
    require: [true, "db: film year is require"],
  },
});

module.exports = model("films", schemaFilms);
