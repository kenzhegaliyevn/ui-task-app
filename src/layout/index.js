import React from 'react';
import { Layout } from 'antd';
import HeaderNav from '../components/HeaderNav';
import ContentLayoutComponent from '../components/Content';

const LayoutContainer = ({ children }) => {
  return (
    <Layout>
      <HeaderNav />
      <ContentLayoutComponent children={children} />
    </Layout>
  );
};

export default LayoutContainer;
