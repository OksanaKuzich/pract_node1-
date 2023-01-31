const express = require("express");
const filmsRouter = express.Router();
const filmsController = require("../controllers/FilmsController");
// http://localhost:5000/api/v1/films
// додати фільм
filmsRouter.post(
  "/films",
  (res, req, next) => {
    console.log("Joi validation");
    next();
  },
  filmsController.add
);

// отримати всі фільми
filmsRouter.get(
  "/films",
  (res, req, next) => {
    console.log("Joi validation");
    next();
  },
  filmsController.getAll
);

// отримати один фільм
filmsRouter.get(
  "/films/:id",
  (res, req, next) => {
    console.log("Joi validation");
    next();
  },
  filmsController.getOne
);

// обновити фільм
filmsRouter.put(
  "/films/:id",
  (res, req, next) => {
    console.log("Joi validation");
    next();
  },
  filmsController.updateFilm
);

// видалити фільм
filmsRouter.delete(
  "/films/:id",
  (res, req, next) => {
    console.log("Joi validation");
    next();
  },
  filmsController.removeFilm
);

module.exports = filmsRouter;
