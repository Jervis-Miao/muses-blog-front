import React, { Component } from 'react';
import { Breadcrumb, Card, Layout } from 'antd';

const { Content } = Layout;

export default class Resource extends Component {
  render() {
    return (
      <Layout style={{ padding: '0 24px 24px' }}>
        <Breadcrumb style={{ margin: '16px 0', textAlign: "left" }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>Resource</Breadcrumb.Item>
        </Breadcrumb>
        <Content>
          <Card>
            资源共享
          </Card>
        </Content>
      </Layout>
    )
  }
}