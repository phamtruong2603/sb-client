import React, { useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { toastCustom } from "../../common/messages/toastCustom";

const HomePage: React.FC = () => {
  const { pathname, search } = useLocation();
  const isAuthenticated = localStorage.getItem("token") !== null;
  const queryParams = new URLSearchParams(search);
  const redirectPath = "/auth/login";

  const tokeGoogle = queryParams.get("token");

  useEffect(() => {
    if (tokeGoogle) {
      if (!isAuthenticated) {
        toastCustom({ message: "Đăng nhập thành công!", type: "success" });
      }
      localStorage.setItem("token", tokeGoogle);
    }
  }, []);

  if (pathname === "/" && !isAuthenticated) {
    return <Navigate to={redirectPath} replace />;
  }

  if (pathname === "/" && isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <div>
      <h1>Welcome</h1>
    </div>
  );
};

export default HomePage;
