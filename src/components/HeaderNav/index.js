import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu } from 'antd';
import menuList from '../../config/menuList';

const HeaderNav = () => {
  const navigate = useNavigate();

  return (
    <Menu mode='horizontal' defaultSelectedKeys={['employee']}>
      {menuList.map((item) => (
        <Menu.Item
          key={item.key}
          icon={item.icon}
          onClick={() => {
            navigate(item.path);
          }}
        >
          {item.name}
        </Menu.Item>
      ))}
    </Menu>
  );
};

export default HeaderNav;
