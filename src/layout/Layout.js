import { Layout, Menu, Icon } from 'antd'
import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch ,Link , Redirect } from 'react-router-dom'
import '../less/layout.css'
import Charts from '../component/Chart' 
import Menus from '../component/Menu'
import { getRoutes } from '../utils/utils';

const { Header, Sider, Content ,Footer } = Layout

const redirectData = []





class SiderDemo extends React.Component {
  state = {
    collapsed: false,
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    })
  }



  handleClick = (e) =>{
    console.log('click',e)
    this.setState({
        current: e.key
    })

}


  getContent(){
    if(this.state.current === 1){
        return <Charts/>
    }else{
      return <Menus/>
    }

  }


  render() {
    const {children} = this.props
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed} style={{ overflow: 'auto', height: '100vh', left: 0,}}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} onClick={this.handleClick}>
            <Menu.Item key="1">
              <Icon type="setting" />
              <span>设置</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="video-camera" />
              <span>权限</span>
              <Link to="/4">设置</Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="upload" />
              <span>报表</span>
            </Menu.Item>
            <Menu.Item key="4">
              <Icon type="camera" />
              <span>订单中心</span>
            </Menu.Item>
            <Menu.Item key="5">
              <Icon type="user" />
              <span>用户管理</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout >
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon  className="trigger" type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} onClick={this.toggle} />
          </Header>
        
          <Content style={{ margin: '24px 16px 24px 16px', width:'80%',  padding: 10, minHeight: 280}}>
             
                {this.props.children}
            
              
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