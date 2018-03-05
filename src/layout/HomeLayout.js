import { Layout, Menu, Icon } from 'antd'
import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch ,Link , Redirect } from 'react-router-dom'
import  '../less/homelayout.css'


const SubMenu = Menu.SubMenu
const MenuItem = Menu.Item


class HomeLayout extends Component{

    render(){
        const {children} = this.props
        console.log("——————————————————————————--",children)


        return(
            <div>
                <header className="header">
                    <Link to="/">React</Link>
                </header>

                <main className="main">
                    <div className="menu">
                        <Menu mode="inline" theme="dark" style={{width: '240px'}}>
                            <SubMenu key="user" title={<span><Icon type="user"/><span>用户管理</span></span>}>
                                <MenuItem key="user-list">
                                    <Link to="/about">用户列表</Link>
                                </MenuItem>
                                <MenuItem key="user-add">
                                     <Link to="/4">添加用户</Link>
                                </MenuItem>
                            </SubMenu>

                            <SubMenu key="book" title={<span><Icon type="book"/><span>图书管理</span></span>}>
                                <MenuItem key="book-list">
                                    <Link to="/2">图书列表</Link>
                                </MenuItem>
                                <MenuItem key="book-add">
                                    <Link to="/3">添加图书</Link>
                                </MenuItem>
                            </SubMenu>
                        </Menu>
                    </div>
                    <div className="content2">
                        {this.props.children}
                    </div>
                </main>

            </div>
        )
    }
}


export default HomeLayout