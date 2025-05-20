import React, { useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps, MenuTheme } from 'antd';
import { Menu, Switch } from 'antd';
import './menu.css';
import { useNavigate } from 'react-router-dom';

type FlatMenuItem = {
  key: string;
  label: string;
  icon?: React.ReactNode;
  keyParent?: string;
  path?: string;
};

const flatMenuData: FlatMenuItem[] = [
  { key: 'sub1', label: 'Navigation One', icon: <MailOutlined /> },
  { key: '1', label: 'Option 1', keyParent: 'sub1', path: '/option1' },
  { key: '2', label: 'Option 2', keyParent: 'sub1', path: '/option2' },
  { key: 'sub2', label: 'Navigation Two', icon: <AppstoreOutlined /> },
  { key: '5', label: 'Option 5', keyParent: 'sub2', path: '/option5' },
  { key: '6', label: 'Option 6', keyParent: 'sub2', path: '/option6' },
  { key: 'sub3', label: 'Submenu', keyParent: 'sub2' },
  { key: '7', label: 'Option 7', keyParent: 'sub3', path: '/option7' },
  { key: '8', label: 'Option 8', keyParent: 'sub3', path: '/option8' },
  { key: 'sub4', label: 'Navigation Three', icon: <SettingOutlined /> },
  { key: '9', label: 'Option 9', keyParent: 'sub4', path: '/option9' },
  { key: '10', label: 'Option 10', keyParent: 'sub4', path: '/option10' },
  { key: '11', label: 'Option 11', keyParent: 'sub4', path: '/option11' },
  { key: '12', label: 'Option 12', keyParent: 'sub4', path: '/option12' },
  { key: '12', label: 'Option 12', keyParent: 'sub4' },
  { key: '12', label: 'Option 12', keyParent: 'sub4' },
  { key: '12', label: 'Option 12', keyParent: 'sub4' },
  { key: '12', label: 'Option 12', keyParent: 'sub4' },
  { key: '12', label: 'Option 12', keyParent: 'sub4' },
  { key: '12', label: 'Option 12', keyParent: 'sub4' },
  { key: '12', label: 'Option 12', keyParent: 'sub4' },
];

function buildMenuTree(
  data: FlatMenuItem[],
  parentKey?: string
): MenuProps['items'] {
  return data
    .filter(item => item.keyParent === parentKey)
    .map(item => {
      const children = buildMenuTree(data, item.key);
      return children && children.length > 0
        ? { key: item.key, label: item.label, icon: item.icon, children }
        : { key: item.key, label: item.label, icon: item.icon };
    });
}

const items = buildMenuTree(flatMenuData);

const MenuAdmin: React.FC = () => {
  const [theme, setTheme] = useState<MenuTheme>('dark');
  const [current, setCurrent] = useState('1');

  const navigate = useNavigate();

  const changeTheme = (value: boolean) => {
    setTheme(value ? 'dark' : 'light');
  };

  const onClick: MenuProps['onClick'] = (e) => {
    console.log(e)
    setCurrent(e.key);
    const found = flatMenuData.find(item => item.key === e.key);
    if (found && found.path) {
      navigate(found.path);
    }
  };

  return (
    <div className={`menu-admin-root ${theme === 'dark' ? 'menu-dark' : 'menu-light'}`}>
      <div className="menu-admin-logo">
        {/* <img src="/logo.png" alt="Logo" className="menu-admin-logo-img" /> */}
        <span className="menu-admin-logo-text">LOGO</span>
      </div>
      <Menu
        theme={theme}
        onClick={onClick}
        className="menu-admin-menu"
        defaultOpenKeys={['sub1']}
        selectedKeys={[current]}
        mode="inline"
        items={items}
      />
      <div className="menu-admin-switch">
        <Switch
          checked={theme === 'dark'}
          onChange={changeTheme}
          checkedChildren="Dark"
          unCheckedChildren="Light"
        />
      </div>
    </div>
  );
};

export default MenuAdmin;