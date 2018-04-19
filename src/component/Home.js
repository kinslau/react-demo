import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Layout, Menu, Icon, Radio } from 'antd'
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom'
import Charts from './Chart'
import Menus from './Menu'
import '../less/home.css'
import Timer from './Timer';




function handChange(value) {
    console.log('Selected: ${value}')
}

class Home extends Component {


    constructor(props) {
        super(props)
        this.handleSizeChange = this.handleSizeChange.bind(this)
    }

    state = {
        size: 'default'
    }


    handleSizeChange(e) {
        console.log(e.target.value)
        // this.props.history.push('/home/charts')
        this.props.history.push(e.target.value)
    }



    render() {

        var path = {
            pathname: "/home/charts",
            state: {
                x: 800,
                y: 400
            }
        }
        var data = { x: 800, y: 400 }
        data = JSON.stringify(data)
        var path = `/home/charts/${data}`


        return (
            <div style={{ margin: '20px', position: 'relative', fontSize: 20 }}>
                <h2>HELLO -Home</h2>
                <p>
                    Cras facilisis urna ornare ex volutpat, et convallis erat elementum.
                    Ut aliquam, ipsum vitae gravida suscipit, metus dui bibendum est,
                    eget rhoncus nibh metus nec massa. Maecenas hendrerit laoreet augue nec molestie.
                    Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                </p>
                <p>Duis a turpis sed lacus dapibus elementum sed eu lectus.</p>

                <Radio.Group onChange={this.handleSizeChange}>
                    <Radio.Button value="/home/timer"> 计时器  </Radio.Button>
                    <Radio.Button value="/home/menus">菜单</Radio.Button>
                    <Radio.Button value="/home/charts">图表</Radio.Button>
                </Radio.Group>
                <hr />
            </div>
        )
    }
}

export default Home