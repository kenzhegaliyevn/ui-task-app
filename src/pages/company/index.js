import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Table, Space, Button } from 'antd';
import { COMPANY_CREATE } from '../../config/path';
import { db } from '../../services/firebase';
import { collection, getDocs } from 'firebase/firestore';

const Company = () => {
  const [companyList, setCompanyList] = useState([]);
  const navigate = useNavigate();
  const companyCollectionRef = collection(db, 'companies');
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
              navigate(`/company/details/${record.id}`);
            }}
          >
            Open
          </Button>
          <Button
            type='link'
            onClick={() => {
              navigate(`/company/edit/${record.id}`);
            }}
          >
            Edit
          </Button>
          <Button
            type='link'
            onClick={() => {
              navigate(`/company/${record.id}/employee`);
            }}
          >
            Employee List
          </Button>
        </Space>
      ),
    },
  ];

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const data = await getDocs(companyCollectionRef);
    setCompanyList(
      data.docs.map((item) => ({ ...item.data(), id: item.id, key: item.id }))
    );
  };
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
      <Table columns={columns} dataSource={companyList} />
    </>
  );
};

export default Company;
