import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Table, Space, Button } from 'antd';
import { db } from '../../services/firebase';
import { collection, deleteDoc, getDocs, doc } from 'firebase/firestore';

const Employee = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const { companyId } = useParams();
  const employeeCollectionRef = collection(db, 'employee');

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
              navigate(`/company/${companyId}/employee/details/${record.id}`);
            }}
          >
            Open
          </Button>
          <Button
            type='link'
            onClick={() => {
              navigate(`/company/${companyId}/employee/edit/${record.id}`);
            }}
          >
            Edit
          </Button>
          <Button
            type='link'
            onClick={async () => {
              try {
                const employeeDoc = doc(db, 'employee', record.id);
                await deleteDoc(employeeDoc);
                loadData();
              } catch (error) {
                alert('error');
              }
            }}
          >
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const data = await getDocs(employeeCollectionRef);
    setData(
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
          navigate(`/company/${companyId}/employee/create`);
        }}
      >
        Create Employee
      </Button>
      <Table columns={columns} dataSource={data} />
    </>
  );
};

export default Employee;
