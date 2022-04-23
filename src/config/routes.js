import {
  EMPLOYEE,
  COMPANY,
  UNKNOWN_PATH,
  COMPANY_CREATE,
  COMPANY_EDIT,
  COMPANY_DETAILS,
  EMPLOYEE_CREATE,
  EMPLOYEE_DETAILS,
  EMPLOYEE_EDIT,
} from './path';
import Employee from '../pages/employee';
import Company from '../pages/company';
import CompanyCRUD from '../pages/company/CRUD';
import EmployeeCRUD from '../pages/employee/CRUD';

const routes = [
  {
    id: 1,
    path: EMPLOYEE,
    page: <Employee />,
  },
  {
    id: 2,
    path: EMPLOYEE_CREATE,
    page: <EmployeeCRUD />,
  },
  {
    id: 3,
    path: EMPLOYEE_DETAILS,
    page: <EmployeeCRUD />,
  },
  {
    id: 4,
    path: EMPLOYEE_EDIT,
    page: <EmployeeCRUD />,
  },
  {
    id: 5,
    path: COMPANY,
    page: <Company />,
  },
  {
    id: 6,
    path: COMPANY_CREATE,
    page: <CompanyCRUD />,
  },
  {
    id: 7,
    path: COMPANY_EDIT,
    page: <CompanyCRUD />,
  },
  {
    id: 8,
    path: COMPANY_DETAILS,
    page: <CompanyCRUD />,
  },
  {
    id: 9,
    path: UNKNOWN_PATH,
    page: <Employee />,
  },
];

export default routes;
