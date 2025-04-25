import React from "react";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  component: any;
  isProtected?: boolean;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = (props) => {
  const { component: Component, isProtected } = props;

  // if (!isProtected) {
  //   return <Component />;
  // }

  // const isAuthenticated = false;
  // const redirectPath = "/auth/login";

  // if (!isAuthenticated) {
  //   return <Navigate to={redirectPath} replace />;
  // }

  return <Component />;
};

export default ProtectedRoute;
