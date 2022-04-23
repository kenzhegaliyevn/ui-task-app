import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Table, Space, Button } from 'antd';
import { EMPLOYEE_CREATE } from '../../config/path';

const Employee = () => {
  const navigate = useNavigate();
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Surname',
      dataIndex: 'surname',
      key: 'surname',
    },
    {
      title: 'Monthly salary',
      dataIndex: 'monthlySalary',
      key: 'monthlySalary',
    },
    {
      title: 'Early salary',
      dataIndex: 'earlySalary',
      key: 'earlySalary',
    },
    {
      title: 'Taxes paid by company',
      dataIndex: 'taxesPaidByCompany',
      key: 'taxesPaidByCompany',
    },
    {
      title: 'Taxes paid by employee',
      dataIndex: 'taxesPaidByEmployee',
      key: 'taxesPaidByEmployee',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Space size='middle'>
          <Button
            type='link'
            onClick={() => {
              navigate(`/company/employee/details/1`);
            }}
          >
            Open
          </Button>
          <Button
            type='link'
            onClick={() => {
              navigate(`/company/employee/edit/1`);
            }}
          >
            Edit
          </Button>
        </Space>
      ),
    },
  ];
  const data = [
    {
      key: '1',
      name: 'John Brown',
      address: 'New York No. 1 Lake Park',
      country: 'USA',
    },
    {
      key: '2',
      name: 'Jim Green',
      address: 'London No. 1 Lake Park',
      country: 'USA',
    },
    {
      key: '3',
      name: 'Joe Black',
      address: 'Sidney No. 1 Lake Park',
      country: 'USA',
    },
  ];
  return (
    <>
      <Button
        style={{
          marginBottom: 16,
        }}
        onClick={() => {
          navigate(EMPLOYEE_CREATE);
        }}
      >
        Create Employee
      </Button>
      <Table columns={columns} dataSource={data} />
    </>
  );
};

export default Employee;
