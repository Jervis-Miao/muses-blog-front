import React, { Component } from 'react';
import { Breadcrumb, Card, Layout } from 'antd';

const { Content } = Layout;

export default class About extends Component {
  render() {
    return (
      <Layout className="layout">
        <Breadcrumb style={{ margin: '16px 0', textAlign: "left" }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>About</Breadcrumb.Item>
        </Breadcrumb>
        <Content>
          <Card className="content-card">
            关于我
          </Card>
        </Content>
      </Layout>
    )
  }
}