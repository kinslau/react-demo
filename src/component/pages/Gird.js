import React, { Component } from 'react'
import { Row , Col } from 'antd'
import 'antd/dist/antd.less'

class Gird extends Component {


    render(){
        return(
            <div>
                <Row>
                    <Col span= {12}>col-12</Col>
                    <Col span= {12}>col-12</Col>
                </Row>
                <Row>
                    <Col span={20}>col-8</Col>
                    <Col span={2}>col-8</Col>
                    <Col span={2}>col-8</Col>
                    </Row>
                <Row>
                    <Col span={6}>col-6</Col>
                    <Col span={6}>col-6</Col>
                    <Col span={6}>col-6</Col>
                    <Col span={6}>col-6</Col>
                </Row>
            </div>
        )
    }
}

export default Gird