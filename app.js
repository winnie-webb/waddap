const express = require("express");
const cors = require("cors");
const multer = require("multer");
const app = express();
const connectDb = require("./models/ConnectDb");
connectDb();
app.use(express.static(`${__dirname}/public`));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(5000);
