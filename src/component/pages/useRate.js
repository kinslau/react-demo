import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import  { Row, Col, Card , Icon } from 'antd'

const { Meta } = Card





class UseRate extends Component{


    render(){
        return (
            <div > 
                <Row className='a1' gutter={20}>
                    <Col span={6}><div style={{background:'red',height:150,borderRadius:10}}>6666</div></Col>
                    <Col className='a2' span={6}><div style={{background:'red'}}>6666</div></Col>
                    <Col span={6}><div style={{background:'red'}}>6666</div></Col>
                    <Col span={6}>
                        <Icon type='setting'></Icon>
                    </Col>
                </Row>
          </div>)
    }
}





export default UseRate