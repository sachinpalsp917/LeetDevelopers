import React, { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import { useAuthStore } from "./store/useAuthStore.js";
import { Loader } from "lucide-react";
import Layout from "./Layout/Layout.jsx";
import AdminRoute from "./components/AdminRoute.jsx";
import AddProblem from "./pages/AddProblem.jsx";
import ProblemPage from "./pages/ProblemPage.jsx";

const App = () => {
  const { authUser, checkAuth, isCheckingAuth } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  if (isCheckingAuth && !authUser) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader className="size-10 animate-spin" />
      </div>
    );
  }

  return (
    <>
      <div className="flex flex-col justify-start items-center">
        <Toaster />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              path="/"
              element={authUser ? <HomePage /> : <Navigate to={"/login"} />}
            />
          </Route>
          <Route
            path="/login"
            element={!authUser ? <LoginPage /> : <Navigate to={"/"} />}
          />
          <Route
            path="/signup"
            element={!authUser ? <SignUpPage /> : <Navigate to={"/"} />}
          />
          <Route
            path="/problem/:id"
            element={authUser ? <ProblemPage /> : <Navigate to={"/login"} />}
          />
          <Route element={<AdminRoute />}>
            <Route
              path="/add-problem"
              element={authUser ? <AddProblem /> : <Navigate to={"/"} />}
            />
          </Route>
        </Routes>
      </div>
    </>
  );
};

export default App;
