import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { Form, Input, Button, Row, Col } from 'antd';
import { db } from '../../../services/firebase';
import { collection, addDoc, doc, getDoc, updateDoc } from 'firebase/firestore';

const EmployeeCRUD = () => {
  const employeeCollectionRef = collection(db, 'employee');
  const [isDisabled, setIsDisabled] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const { pathname } = useLocation();
  const { companyId, id } = useParams();
  const navigate = useNavigate();
  const [form] = Form.useForm();

  useEffect(() => {
    setIsDisabled(pathname.includes('edit') || pathname.includes('create'));
    setIsEdit(pathname.includes('edit'));
    if (pathname.includes('edit') || pathname.includes('details')) {
      loadEmployeeDetails();
    }
  }, []);

  const loadEmployeeDetails = async () => {
    const data = await getDoc(doc(db, 'employee', id));
    form.setFieldsValue({
      ...data.data(),
    });
  };

  const onCreate = async (values) => {
    try {
      await addDoc(employeeCollectionRef, { ...values, companyId });
      navigate(`/company/employee/${companyId}`);
    } catch (error) {
      alert('Error');
    }
  };

  const onEdit = async (values) => {
    try {
      const data = doc(db, 'employee', id);
      await updateDoc(data, values);
      navigate(`/company/employee/${companyId}`);
    } catch (error) {
      alert('Error');
    }
  };

  const onFinish = (values) => {
    if (!isEdit) {
      onCreate(values);
    } else {
      onEdit(values);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      name='basic'
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      layout={'vertical'}
      form={form}
    >
      <Row gutter={24}>
        <Col span={6}>
          <Form.Item
            label='Name'
            name='name'
            rules={[
              {
                required: true,
                message: 'Please input name!',
              },
            ]}
          >
            <Input disabled={!isDisabled} />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item
            label='Surname'
            name='surname'
            rules={[
              {
                required: true,
                message: 'Please input surname!',
              },
            ]}
          >
            <Input disabled={!isDisabled} />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item
            label='Monthly salary'
            name='monthlySalary'
            rules={[
              {
                required: true,
                message: 'Please input monthly salary!',
              },
            ]}
          >
            <Input disabled={!isDisabled} />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item
            label='Early salary'
            name='earlySalary'
            rules={[
              {
                required: true,
                message: 'Please input early salary!',
              },
            ]}
          >
            <Input disabled={!isDisabled} />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={24}>
        <Col span={6}>
          <Form.Item
            label='Taxes paid by company'
            name='taxesPaidByCompany'
            rules={[
              {
                required: true,
                message: 'Please input taxes paid by company !',
              },
            ]}
          >
            <Input disabled={!isDisabled} />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item
            label='Taxes paid by employee'
            name='taxesPaidByEmployee'
            rules={[
              {
                required: true,
                message: 'Please input taxes paid by employee!',
              },
            ]}
          >
            <Input disabled={!isDisabled} />
          </Form.Item>
        </Col>
      </Row>
      <Form.Item>
        <Button type='primary' htmlType='submit'>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default EmployeeCRUD;
