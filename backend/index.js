import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authRoutes from "./src/routes/auth.route.js";
import problemRoutes from "./src/routes/problem.route.js";
import executionRoute from "./src/routes/executeCode.route.js";
import submissionRoutes from "./src/routes/submission.route.js";

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
app.use("/api/v1/problems", problemRoutes);
app.use("/api/v1/execute-code", executionRoute);
app.use("/api/v1/submission", submissionRoutes);

app.listen(port, () => {
  console.log(`Server running at port: `, port);
});
