import { Layout, Menu, Icon } from 'antd'
import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch ,Link , Redirect } from 'react-router-dom'
import '../less/layout.css'
import Charts from '../component/Chart' 
import Menus from '../component/Menu'
import { getRoutes } from '../utils/utils';
import Home from '../component/Home';
import Stuff from '../component/Stuff';
import Contact from '../component/Contact';
import Test from '../component/Test';
import Buttons from '../component/Buttons';

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
    console.log("children:___",children)
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed} style={{ overflow:false, height: '100vh', left: 0}}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} onClick={this.handleClick}>
            <Menu.Item key="1">
              <Icon type="setting" />
              <span>buttons</span>
              <Link to="/buttons"/>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="video-camera" />
              <span>home</span>
              <Link to="/home"/>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="upload" />
              <span>stuff</span>
              <Link to="/stuff"/>
            </Menu.Item>
            <Menu.Item key="4">
              <Icon type="camera" />
              <span>contact</span>
              <Link to="/contact"/>
            </Menu.Item>
            <Menu.Item key="5">
              <Icon type="user" />
              <span>test</span>
              <Link to="/test"/>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout >
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon  className="trigger" type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} onClick={this.toggle} />
          </Header>
        
          <Content className="content" style={{border:'3px solid green',margin:'5px',background:'white'}}>
             <div style={{margin:'24px'} }>
                        <Route path="/home" component={Home} />
                        <Route path="/stuff" component={Stuff} />
                        <Route path="/contact" component={Contact} />
                        <Route path="/test" component={Test} />
                        <Route path="/buttons" component={Buttons} />
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