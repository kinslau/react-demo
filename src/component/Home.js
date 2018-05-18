import React, { Component } from 'react'
import { Radio } from 'antd'
import '../less/home.css'




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
        this.props.history.push(e.target.value)
    }

    componentWillMount() {
         this.props.history.push('/home/charts')
     }

    render() {

    

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

                <Radio.Group onChange={this.handleSizeChange} defaultValue='/home/charts'>
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