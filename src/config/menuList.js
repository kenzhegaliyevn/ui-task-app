import { UserOutlined, TeamOutlined } from '@ant-design/icons';
import { COMPANY, EMPLOYEE } from './path';

const menuList = [
  {
    name: 'Employee',
    key: 'employee',
    icon: <UserOutlined />,
    path: EMPLOYEE,
  },
  {
    name: 'Company',
    key: 'company',
    icon: <TeamOutlined />,
    path: COMPANY,
  },
];

export default menuList;
