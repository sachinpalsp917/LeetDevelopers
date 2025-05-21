import bcryptjs from "bcryptjs";

const registerUser = (req, res) => {
  res.send("User registered");
};
const loginUser = (req, res) => {
  res.send("User logged in");
};
const logoutUser = (req, res) => {
  res.send("User logged out");
};
const checkUser = (req, res) => {
  res.send("User checked");
};

export { registerUser, loginUser, logoutUser, checkUser };
