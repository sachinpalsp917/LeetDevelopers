import express from "express";
import {
  checkUser,
  loginUser,
  logoutUser,
  registerUser,
} from "../controller/auth.controller.js";

const authRoutes = express.Router();

authRoutes.post("/register", registerUser);
authRoutes.post("/login", loginUser);
authRoutes.post("/logout", logoutUser);
authRoutes.post("/check", checkUser);

export default authRoutes;
