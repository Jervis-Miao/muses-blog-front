import React, { Component } from 'react';
import { Card, Layout } from 'antd';
import { Route } from 'react-router-dom';
import './DefaultLayout.less';
import HeadNav from '../../common/Head/HeadNav';
import FooterNav from '../../common/Footer/FooterNav';
import Home from '../../routes/Home/Home';
import About from '../../routes/About/About';
import Article from '../../routes/Article/Article';
import Resource from '../../routes/Resource/Resource';

const { Header, Sider, Content, Footer, } = Layout;

export default class DefaultLayout extends Component {
  render() {
    return (
      <Layout id="defaultLayout">
        <Header>
          <HeadNav/>
        </Header>
        <Layout style={{ padding: '0 200px' }}>
          <Sider className="sider">
            <Card bordered={false} title="我是侧边栏1" className="sider-card">
              我是侧边栏1<br/>
              我是侧边栏1
            </Card>
          </Sider>
          <Content>
            <Route path={this.props.match.url + '/'} component={Home} exact/>
            <Route path={this.props.match.url + '/about'} component={About}/>
            <Route path={this.props.match.url + '/article'} component={Article}/>
            <Route path={this.props.match.url + '/resource'} component={Resource}/>
          </Content>
          <Sider className="sider">
            <Card bordered={false} title="我是侧边栏2" className="sider-card">
              我是侧边栏2<br/>
              我是侧边栏2
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