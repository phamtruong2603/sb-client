import React from "react";
import { Route, Routes } from "react-router-dom";
import { authRoutes } from "./nav";
import { NavigatorParams } from "./type";
import ProtectedRoute from "./ProtectedRoute";

const AuthRoutes: React.FC = () => {
  return (
    <Routes>
      {authRoutes.map(({ path, component: Component, isProtected }: NavigatorParams, index) => (
        <Route
          key={index}
          path={path}
          element={<ProtectedRoute component={Component} isProtected={isProtected} />}
        />
      ))}
    </Routes>
  );
};

export default AuthRoutes;
