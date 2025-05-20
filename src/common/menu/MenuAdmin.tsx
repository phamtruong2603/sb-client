import React, { useState } from "react";
import * as Icons from "@ant-design/icons";
import type { MenuProps, MenuTheme } from "antd";
import { Menu, Switch } from "antd";
import "./menu.css";
import { useNavigate } from "react-router-dom";

type FlatMenuItem = {
  key: string;
  label: string;
  icon?: React.ReactNode;
  keyParent?: string | null;
  path?: string;
};

function getIconByName(name?: string) {
  if (!name) return null;
  const IconComponent = (Icons as any)[name];
  return IconComponent ? <IconComponent /> : null;
}

const flatMenuData: FlatMenuItem[] = [
  {
    key: "1",
    label: "Cấu hình hệ thống",
    icon: getIconByName("SettingOutlined"),
  },
  {
    key: "sub1",
    label: "Url",
    icon: null,
    path: "/path-configuration",
    keyParent: "1",
  },
];

function buildMenuTree(
  data: FlatMenuItem[],
  parentKey?: string
): MenuProps["items"] {
  return data
    .filter((item) => item.keyParent === parentKey)
    .map((item) => {
      const children = buildMenuTree(data, item.key);
      return children && children.length > 0
        ? { key: item.key, label: item.label, icon: item.icon, children }
        : { key: item.key, label: item.label, icon: item.icon };
    });
}

const items = buildMenuTree(flatMenuData);

const MenuAdmin: React.FC = () => {
  const [theme, setTheme] = useState<MenuTheme>("dark");
  const [current, setCurrent] = useState("");

  const navigate = useNavigate();

  const changeTheme = (value: boolean) => {
    setTheme(value ? "dark" : "light");
  };

  const onClick: MenuProps["onClick"] = (e) => {
    console.log(e);
    setCurrent(e.key);
    const found = flatMenuData.find((item) => item.key === e.key);
    if (found && found.path) {
      navigate(found.path);
    }
  };

  return (
    <div
      className={`menu-admin-root ${
        theme === "dark" ? "menu-dark" : "menu-light"
      }`}
    >
      <div className="menu-admin-logo">
        {/* <img src="/logo.png" alt="Logo" className="menu-admin-logo-img" /> */}
        <span className="menu-admin-logo-text">LOGO</span>
      </div>
      <Menu
        theme={theme}
        onClick={onClick}
        className="menu-admin-menu"
        defaultOpenKeys={['1']}
        selectedKeys={[current]}
        mode="inline"
        items={items}
      />
      <div className="menu-admin-switch">
        <Switch
          checked={theme === "dark"}
          onChange={changeTheme}
          checkedChildren="Dark"
          unCheckedChildren="Light"
        />
      </div>
    </div>
  );
};

export default MenuAdmin;
