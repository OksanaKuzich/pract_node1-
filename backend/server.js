const express = require("express");
require("colors");
const path = require("path");
const configPath = path.join(__dirname, "..", "config", ".env");
require("dotenv").config({ path: configPath });
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const { PORT = 5001 } = process.env;
const connectDB = require("../config/db");

// setRoutes
app.use("/api/v1", require("./routes/filmsRoutes"));

const errorHandler = require("./middlewares/errorHandler");
app.use(errorHandler);

connectDB();
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`.green.bold.italic);
});
