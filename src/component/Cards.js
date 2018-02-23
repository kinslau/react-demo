import React, { Component } from 'react'
import { Card , Carousel } from 'antd'
import 'antd/dist/antd.less'


class Cards extends Component{


    render(){
        return(
            <div>
                <Card title = "标题" >
                    <p>内容</p>
                    <p>内容</p>
                    <p>内容</p>
                </Card>
            </div>
        )
    }
}

export default Cards