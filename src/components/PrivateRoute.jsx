// src/components/PrivateRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  // 👇 Replace this with real auth check (e.g., token, context, Redux)
  const isAuthenticated = localStorage.getItem("auth") === "true";

  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;
