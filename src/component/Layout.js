import { Layout, Menu, Icon } from 'antd'
import React, { Component } from 'react'
import '../less/layout.css'
import Charts from './Chart' 

const { Header, Sider, Content ,Footer } = Layout

class SiderDemo extends React.Component {
  state = {
    collapsed: false,
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    })
  }

  render() {
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed} style={{ overflow: 'auto', height: '100vh', left: 0}}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Icon type="user" />
              <span>设置</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="video-camera" />
              <span>权限</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="upload" />
              <span>报表</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon  className="trigger" type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} onClick={this.toggle} />
          </Header>
          <Content style={{ margin: '24px 16px 24px 16px',   padding: 10, minHeight: 280}}>

                <div style={{width:'80%',margin:'10px 10px 10px 10px',padding: 5}}>
                    <Charts/>
                </div>
                    
          </Content>
          <Footer style={{ textAlign: 'center',background:'green',fontSize:22 }}>
                React / Antd / Redux  学习 - 2018
          </Footer>
        </Layout>
      </Layout>
    )
  }
}


export default SiderDemo