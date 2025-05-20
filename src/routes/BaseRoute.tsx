import { Layout, theme } from "antd";
import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import MenuAdmin from "../common/menu/MenuAdmin";
import Header from "../page/header/Header";
import { adminRoutes } from "./nav";
import ProtectedRoute from "./ProtectedRoute";
import { NavigatorParams } from "./type";

const BaseRoute: React.FC = () => {
  const { Sider, Content } = Layout;

  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed} width={250}>
        <MenuAdmin />
      </Sider>

      <Layout>
        <Header collapsed={collapsed} setCollapsed={setCollapsed} />

        <Content
          className="m-2 p-2"
          style={{
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Routes>
            {adminRoutes.map(
              (
                { path, component: Component, isProtected }: NavigatorParams,
                index
              ) => (
                <Route
                  key={index}
                  path={path}
                  element={
                    <ProtectedRoute
                      component={Component}
                      isProtected={isProtected}
                    />
                  }
                />
              )
            )}
          </Routes>
        </Content>
      </Layout>
    </Layout>
  );
};

export default BaseRoute;
