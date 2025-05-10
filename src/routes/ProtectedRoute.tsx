import React from "react";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  component: React.ComponentType;
  isProtected?: boolean;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  component: Component,
  isProtected = false,
}) => {
  const isAuthenticated = localStorage.getItem("token") !== null;
  const redirectPath = "/auth/login";

  if (!isAuthenticated && isProtected) {
    return <Navigate to={redirectPath} replace />;
  }

  return <Component />;
};

export default ProtectedRoute;
