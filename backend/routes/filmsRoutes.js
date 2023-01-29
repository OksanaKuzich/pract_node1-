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
filmsRouter.get("/films", filmsController.getAll);

// отримати один фільм
filmsRouter.get("/films/:id", filmsController.getOne);

// обновити фільм
filmsRouter.put("/films/:id", filmsController.updateFilm);

// видалити фільм
filmsRouter.delete("/films/:id", filmsController.removeFilm);

module.exports = filmsRouter;
