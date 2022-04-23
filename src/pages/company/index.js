import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Table, Space, Button } from 'antd';
import {
  COMPANY_CREATE,
  COMPANY_DETAILS,
  COMPANY_EDIT,
} from '../../config/path';

const Company = () => {
  const navigate = useNavigate();
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Country',
      dataIndex: 'country',
      key: 'country',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Space size='middle'>
          <Button
            type='link'
            onClick={() => {
              navigate(`/company/details/1`);
            }}
          >
            Open
          </Button>
          <Button
            type='link'
            onClick={() => {
              navigate(`/company/edit/1`);
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
          navigate(COMPANY_CREATE);
        }}
      >
        Create Company
      </Button>
      <Table columns={columns} dataSource={data} />
    </>
  );
};

export default Company;
