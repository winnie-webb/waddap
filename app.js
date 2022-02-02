const express = require("express");
const cors = require("cors");
const multer = require("multer");
const mysql2 = require("mysql2");
const app = express();

app.use(express.static(`${__dirname}/public`));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(5000);
