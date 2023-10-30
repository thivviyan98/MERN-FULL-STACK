//packagE
import path from "path";
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

//utiles
import connectDB from "./config/db.js";
dotenv.config();
const port = process.env.PORT;

connectDB();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("hello world and post man ");
});

app.listen(port, () => console.log(` server running on port : ${port}`));
