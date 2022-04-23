import { EMPLOYEE, COMPANY, UNKNOWN_PATH } from './path';
import Employee from '../pages/employee';
import Company from '../pages/company';

const routes = [
  {
    id: 1,
    path: EMPLOYEE,
    page: <Employee />,
  },
  {
    id: 2,
    path: COMPANY,
    page: <Company />,
  },
  {
    id: 3,
    path: UNKNOWN_PATH,
    page: <Employee />,
  },
];

export default routes;
