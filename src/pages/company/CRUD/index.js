import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Form, Input, Button, Row, Col } from 'antd';

const CompanyCRUD = () => {
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
