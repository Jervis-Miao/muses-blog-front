import React, { Component } from 'react';
import { Breadcrumb, Card, Layout } from 'antd';
import "../route.css";

const { Content } = Layout;

export default class Resource extends Component {
  render() {
    return (
      <Layout className="layout">
        <Breadcrumb style={{ margin: '16px 0', textAlign: "left" }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>Resource</Breadcrumb.Item>
        </Breadcrumb>
        <Content>
          <Card className="content-card">
            资源共享
          </Card>
        </Content>
      </Layout>
    )
  }
}