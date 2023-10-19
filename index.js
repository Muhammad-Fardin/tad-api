import mongoose from "mongoose";
import express from "express";
import * as dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/user.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use("/auth", authRoutes);

const runServer = async () => {
  await mongoose
    .connect(process.env.DB_URL)
    .then(() => {
      console.log("Database Engaged!");
    })
    .then(
      app.listen(process.env.PORT, () => {
        console.log(`live at http://localhost:${process.env.PORT}`);
      })
    );
};

runServer();
