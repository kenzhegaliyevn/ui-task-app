import {
  EMPLOYEE,
  COMPANY,
  UNKNOWN_PATH,
  COMPANY_CREATE,
  COMPANY_EDIT,
  COMPANY_DETAILS,
} from './path';
import Employee from '../pages/employee';
import Company from '../pages/company';
import CompanyCRUD from '../pages/company/CRUD';

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
    path: COMPANY_CREATE,
    page: <CompanyCRUD />,
  },
  {
    id: 4,
    path: COMPANY_EDIT,
    page: <CompanyCRUD />,
  },
  {
    id: 5,
    path: COMPANY_DETAILS,
    page: <CompanyCRUD />,
  },
  {
    id: 6,
    path: UNKNOWN_PATH,
    page: <Employee />,
  },
];

export default routes;
