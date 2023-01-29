const filmsModel = require("../model/filmModel");

class FilmsController {
  add = async (req, res) => {
    const { title, year } = req.body;

    if (!title || !year) {
      res.status(400);
      throw new Error("Please provide all required fields");
    }

    const film = await filmsModel.create({ ...req.body });

    if (!film) {
      res.status(400);
      throw new Error("Unable to save to database");
    }

    return res.status(201).json({
      code: 201,
      message: "success",
      data: film,
    });
  };

  getAll = (req, res) => {
    res.send("getAll");
  };

  getOne = (req, res) => {
    res.send("getOne");
  };

  updateFilm = (req, res) => {
    res.send("updateFilm");
  };

  removeFilm = (req, res) => {
    res.send("removeFilm");
  };
}

module.exports = new FilmsController();
