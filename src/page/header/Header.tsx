import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Dropdown, theme } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import ButtonV2 from "../../common/button-v2/ButtonV2";
import { AppDispatch } from "../../redux/store";
import { logoutDispatch } from "../../redux/user/userActions";
import "./header.css";

interface HeaderProps {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
}

const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
  const { collapsed, setCollapsed } = props;
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const dispatch: AppDispatch = useDispatch();

  const handleMenuClick = (e: { key: string }) => {
    if (e.key === "logout") {
      dispatch(logoutDispatch());
    }
    if (e.key === "profile") {
      console.log("Thông tin cá nhân");
    }
  };

  return (
    <header
      className="header-root"
      style={{
        background: colorBgContainer,
      }}
    >
      <div>
        <ButtonV2
          type="text"
          label={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={() => setCollapsed(!collapsed)}
        />
      </div>
      <Dropdown
        menu={{
          items: [
            { key: "profile", label: "Thông tin cá nhân" },
            { key: "logout", label: "Đăng xuất" },
          ],
          onClick: handleMenuClick,
        }}
        trigger={["click"]}
        placement="bottomRight"
      >
        <div className="header-user" style={{ cursor: "pointer" }}>
          <div className="header-user-avatar">U</div>
        </div>
      </Dropdown>
    </header>
  );
};

export default Header;
