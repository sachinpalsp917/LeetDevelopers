import express from "express";
import {
  checkUser,
  loginUser,
  logoutUser,
  registerUser,
} from "../controller/auth.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

const authRoutes = express.Router();

authRoutes.post("/register", registerUser);
authRoutes.post("/login", loginUser);
authRoutes.post("/logout", authMiddleware, logoutUser);
authRoutes.get("/check", authMiddleware, checkUser);

export default authRoutes;
