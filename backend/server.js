const express = require("express");
const path = require("path");
const connectDB = require("../config/db");
const errorHandler = require("./middlewares/errorHandler");

require("colors");

const configPath = path.join(__dirname, "..", "config", ".env");
require("dotenv").config({ path: configPath });

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const { PORT = 5001 } = process.env;

// setRoutes
app.use("/api/v1", require("./routes/filmsRoutes"));

app.use(errorHandler);

connectDB();
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`.green.bold.italic);
});
