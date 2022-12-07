import React, { Component } from 'react';
import { Menu } from 'antd';
import { GlobalOutlined } from '@ant-design/icons';
import './HeadNav.less';
import { Link } from 'react-router-dom';

export default class HeadNav extends Component {
  state = {
    current: 'home',
  }

  onSelectHandle = (item) => {
    this.setState({ current: item.key })
  }

  render() {
    return (
      <div id="HeadNav">
        <div className="nav-wrap">
          <div className="nav-logo-wrap">
            <GlobalOutlined className="nav-logo"/>
          </div>
          <div className="nav-list-wrap">
            <Menu selectedKeys={[this.state.current]} mode="horizontal" onSelect={this.onSelectHandle}>
              <Menu.Item key="home">
                <Link to="/home" className="link">首页</Link>
              </Menu.Item>
              <Menu.Item key="aboutme">
                <Link to="/home/about" className="link">关于我</Link>
              </Menu.Item>
              <Menu.Item key="article">
                <Link to="/home/article" className="link">文章分享</Link>
              </Menu.Item>
              <Menu.Item key="resource">
                <Link to="/home/resource" className="link">资源共享</Link>
              </Menu.Item>
              <Menu.SubMenu key="more" title="更多">
                <Menu.Item key="panel">
                  <Link to="/panel/" className="link" target="_blank">PANEL控制台</Link>
                  <Link to="/proxy/" className="link" target="_blank">LanProxy</Link>
                </Menu.Item>
              </Menu.SubMenu>
            </Menu>
          </div>
        </div>
      </div>
    )
  }
}
