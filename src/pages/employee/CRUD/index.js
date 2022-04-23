import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Form, Input, Button, Row, Col } from 'antd';

const EmployeeCRUD = () => {
  const [isDisabled, setIsDisabled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setIsDisabled(pathname.includes('edit') || pathname.includes('create'));
  }, []);

  const onFinish = (values) => {
    console.log('Success:', values);
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
            label='Monthly salary '
            name='monthlySalary '
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
            label='Early salary '
            name='early salary '
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
            label='Taxes paid by company '
            name='taxesPaidByCompany '
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
