import  { Layout, Menu, Icon } from 'antd'
import React, { Component } from 'react'
import { Route ,Link } from 'react-router-dom'
import '../less/layout.css'
import Charts from '../component/Chart' 
import Menus from '../component/Menu'
import {deleteAllCookies } from '../utils/utils'
import Home from '../component/Home'
import Stuff from '../component/Stuff'
import Contact from '../component/Contact'
import Buttons from '../component/Buttons'
import UseRate from '../component/pages/useRate'
import Calculator from '../component/BoilingVerdict'
import Timer from '../component/Timer'
import TimeTask from '../component/TimeTask'
import App2 from '../component/App2'
import axios from 'axios'

const { Header, Sider, Content ,Footer } = Layout


class SiderDemo extends Component {
  state = {
    collapsed: false,
  }


  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    })
  }

  exit = () => {

    deleteAllCookies()
    axios.post('clubmanager/sys/logout')
      .then(res =>{
        console.log(res)
      })
      .catch(err =>{
        console.log(err)
      })
    this.props.history.push('/login')
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

    return (
      <Layout className="main">
        <Sider className="slider" trigger={null} collapsible collapsed={this.state.collapsed} >
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['0']} onClick={this.handleClick} style={{height:'90vh'}}>
            <Menu.Item key="0">
              <Icon type="home" />
              <span>定时任务</span>
              <Link to="/time"/>
            </Menu.Item>
            <Menu.Item key="1">
              <Icon type="setting" />
              <span>设置</span>
              <Link to="/buttons"/>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="video-camera" />
              <span>管理</span>
              <Link to="/home"/>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="upload" />
              <span>AddToDo</span>
              <Link to="/redux"/>
            </Menu.Item>
            <Menu.Item key="4">
              <Icon type="camera" />
              <span>布局</span>
              <Link to="/contact"/>
            </Menu.Item>
            <Menu.Item key="5">
              <Icon type="user" />
              <span>场地利用率</span>
              <Link to="/useRate"/>
            </Menu.Item>
            <Menu.Item key="6">
              <Icon type="pie-chart" />
              <span>温度计</span>
              <Link to="/calculator"/>
            </Menu.Item>
            <Menu.Item key="7">
              <Icon type="wechat" />
              <span>权限系统</span>
              <Link to="/calculator"/>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout >
          <Header className='header' style={{ background: '#fff', padding: 0 }}>
            <Icon  className="trigger" type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} onClick={this.toggle} />
            <Icon  className="exit" type='poweroff' onClick={this.exit} />
          </Header>
        
          <Content className="content" style={{border:'1px solid gray',margin:'5px',background:'white'}}>
             <div style={{margin:'24px'} }>
                        <Route path="/home" component={Home} />
                        <Route path="/stuff" component={Stuff} />
                        <Route path="/contact" component={Contact} />
                        <Route path="/buttons" component={Buttons} />
                        <Route path='/useRate' component={UseRate}/>
                        <Route path='/calculator' component={Calculator}/>
                        <Route path='/home/charts' component={Charts} />
                        <Route path="/home/menus" component={Menus} />
                        <Route path="/home/timer" component={Timer} />
                        <Route path="/time" component={TimeTask} />
                        <Route path="/redux" component={App2} />
             </div>
            
          </Content>
          <Footer style={{ textAlign: 'center',background:'peru' }}>
                React / Antd / Redux  学习 - 2018
          </Footer>
        </Layout>
      </Layout>
    )
  }
}


export default SiderDemo