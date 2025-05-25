import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";

const App = () => {
  const [authUser, setAuthUser] = useState(null);
  return (
    <>
      <div className="flex flex-col justify-start items-center">
        <Routes>
          <Route
            path="/"
            element={authUser ? <HomePage /> : <Navigate to={"/login"} />}
          />
          <Route
            path="/login"
            element={!authUser ? <LoginPage /> : <Navigate to={"/"} />}
          />
          <Route
            path="/signup"
            element={!authUser ? <SignUpPage /> : <Navigate to={"/"} />}
          />
        </Routes>
      </div>
    </>
  );
};

export default App;
