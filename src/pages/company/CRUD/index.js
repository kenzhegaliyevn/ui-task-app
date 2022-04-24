import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { Form, Input, Button, Row, Col } from 'antd';
import { db } from '../../../services/firebase';
import { collection, addDoc, doc, getDoc, updateDoc } from 'firebase/firestore';
import { COMPANY } from '../../../config/path';

const CompanyCRUD = () => {
  const companyCollectionRef = collection(db, 'companies');
  const [isDisabled, setIsDisabled] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const { pathname } = useLocation();
  const { id } = useParams();
  const navigate = useNavigate();
  const [form] = Form.useForm();

  useEffect(() => {
    setIsDisabled(pathname.includes('edit') || pathname.includes('create'));
    setIsEdit(pathname.includes('edit'));
    if (pathname.includes('edit') || pathname.includes('details')) {
      loadCompanyDetails();
    }
  }, []);

  const loadCompanyDetails = async () => {
    const data = await getDoc(doc(db, 'companies', id));
    form.setFieldsValue({
      ...data.data(),
    });
  };

  const onCreate = async (values) => {
    try {
      await addDoc(companyCollectionRef, values);
      navigate(COMPANY);
    } catch (error) {
      alert('Error');
    }
  };

  const onEdit = async (values) => {
    try {
      const data = doc(db, 'companies', id);
      await updateDoc(data, values);
      navigate(COMPANY);
    } catch (error) {
      alert('Error');
    }
  };

  const onFinish = async (values) => {
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
      form={form}
      name='basic'
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      layout={'vertical'}
    >
      <Row gutter={24}>
        <Col span={6}>
          <Form.Item
            label='Name'
            name='name'
            rules={[
              {
                required: true,
                message: 'Please input company name!',
              },
            ]}
          >
            <Input disabled={!isDisabled} />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item
            label='Address'
            name='address'
            rules={[
              {
                required: true,
                message: 'Please input company address!',
              },
            ]}
          >
            <Input disabled={!isDisabled} />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item
            label='Country'
            name='country'
            rules={[
              {
                required: true,
                message: 'Please input company country!',
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

export default CompanyCRUD;
