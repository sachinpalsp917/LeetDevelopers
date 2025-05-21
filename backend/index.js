import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authRoutes from "./src/routes/auth.route.js";

dotenv.config();

const port = process.env.PORT || 4000;

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to Leetlab 🔥",
  });
});

app.use("/api/v1/users", authRoutes);
app.listen(port, () => {
  console.log(`Server running at port: `, port);
});
