import React, { Component } from 'react';
import { Breadcrumb, Card, Layout } from 'antd';
import './DefaultLayout.less';
import HeadNav from '../../common/Head/HeadNav';
import FooterNav from '../../common/Footer/FooterNav';

const { Header, Footer, Content, Sider } = Layout;

export default class DefaultLayout extends Component {
  render() {
    return (
      <Layout id="defaultLayout">
        <Header>
          <HeadNav/>
        </Header>
        <Layout style={{ padding: '0 200px 500px' }}>
          <Sider className="sider">
            <Card bordered={false} title="我是侧边栏1" className="sider-card">
              侧边栏1<br/>
              侧边栏1<br/>
              侧边栏1<br/>
              侧边栏1<br/>
              侧边栏1<br/>
              侧边栏1
            </Card>
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Content>
              <Breadcrumb style={{ margin: '16px 0', textAlign: "left" }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
              </Breadcrumb>
              <Card className="content-card">
                HelloWorld!<br/>
                HelloWorld!<br/>
                HelloWorld!<br/>
                HelloWorld!<br/>
                HelloWorld!<br/>
                HelloWorld!<br/>
                HelloWorld!<br/>
                HelloWorld!
              </Card>
            </Content>
          </Layout>
          <Sider className="sider">
            <Card bordered={false} title="我是侧边栏2" className="sider-card">
              侧边栏2<br/>
              侧边栏2<br/>
              侧边栏2<br/>
              侧边栏2<br/>
              侧边栏2<br/>
              侧边栏2
            </Card>
          </Sider>
        </Layout>
        <Footer>
          <FooterNav/>
        </Footer>
      </Layout>
    )
  }
}