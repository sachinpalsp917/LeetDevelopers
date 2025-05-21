import bcryptjs from "bcryptjs";
import { db } from "../libs/db.js";
import { UserRole } from "../generated/prisma/index.js";
import jwt from "jsonwebtoken";

const registerUser = async (req, res) => {
  const { email, password, name } = req.body;
  try {
    const existingUser = db.user.findUnique({
      where: { email },
    });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        error: "User already registered",
        existingUser,
      });
    }
    const hashedPassword = await bcryptjs.hash(password, 12);

    const newUser = await db.user.create({
      data: {
        email,
        password: hashedPassword,
        name,
        role: UserRole.USER,
      },
    });

    const token = jwt.sign({ id: newUser.id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res
      .cookie("jwt", token, {
        httpOnly: true,
        sameSite: "strict",
        secure: process.env.NODE_ENV !== "development",
        maxAge: 1000 * 60 * 60 * 24 * 7, //7 days
      })
      .status(201)
      .json({
        message: "User created successfully",
        user: {
          id: newUser.id,
          name: newUser.name,
          email: newUser.email,
          role: newUser.role,
          image: newUser.image,
        },
      });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Registration failed",
    });
  }
};
const loginUser = async (req, res) => {
  res.send("User logged in");
};
const logoutUser = async (req, res) => {
  res.send("User logged out");
};
const checkUser = async (req, res) => {
  res.send("User checked");
};

export { registerUser, loginUser, logoutUser, checkUser };
