const express = require("express");
const http = require("http");
const mongoose = require("mongoose");
const cors = require("cors");
const fs = require("fs");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const PORT = process.env.PORT || process.env.API_PORT;

const app = express();
const server = http.createServer(app);

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    server.listen(PORT, () => {
      console.log(`Server is listening on ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Failed to connect to the database.", err);
  });

// Middlewares
app.use(cookieParser());
app.use(cors({ origin: process.env.CLIENT_URI, credentials: true }));
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Dynamically load routes
const routeFiles = fs.readdirSync("./routes");
routeFiles.forEach((file) => {
  if (file.endsWith(".js")) {
    const route = require(`./routes/${file}`);
    app.use("/api", route);
  }
});
