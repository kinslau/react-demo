import React,{ Component } from 'react'
import {Menu ,Icon} from 'antd'
import 'antd/dist/antd.css'
import { connect } from 'react-redux'

const SubMenu = Menu.SubMenu
const MenuItemGroup = Menu.ItemGroup

class Menus extends Component{

    state = {
        current: 'mail'
    }

    handleClick = (e) =>{
        console.log('click',e)
        this.setState({
            current: e.key
        })
    }

    render(){
        return(
 
            <Menu onClick = {this.handleClick} selectedKeys = {[this.state.current]} mode = 'inline'>
                <Menu.Item key="mail">
                    <Icon type="mail" />01
                </Menu.Item>

                <Menu.Item key="app" disabled = {false}>
                    <Icon type="appstore" />02
                </Menu.Item>

                <SubMenu title={<span><Icon type="setting" />Navigation Three - Submenu</span>}>
                    <MenuItemGroup title="第一分栏">
                        <Menu.Item key="setting:1" disabled>Option 1</Menu.Item>
                        <Menu.Item key="setting:2">Option 2</Menu.Item>
                        <Menu.Item key="setting:3">Option 2</Menu.Item>
                    </MenuItemGroup>
                    <MenuItemGroup title="第二分栏">
                        <Menu.Item key="setting:3">Option 3</Menu.Item>
                        <Menu.Item key="setting:4">Option 4</Menu.Item>
                    </MenuItemGroup>
                </SubMenu>
                <Menu.Item key="alipay">  
                     <a href="https://ant.design" target="_blank" rel="noopener noreferrer">链接</a>
                </Menu.Item>
                <Menu.Item key="app2" disabled = {false}>
                    <Icon type="appstore" />02
                </Menu.Item>
            </Menu>
            
        )
    }
}

// Menus = connect(mapStateToProps)(Menus)
export default Menus