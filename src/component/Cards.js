import React, { Component } from 'react'
import { Card , Carousel } from 'antd'
import 'antd/dist/antd.less'
// import '../less/style.less'
import style from '../less/style.css'






class Cards extends Component{
    constructor(props){
        super(props)
    }


    
    render(){
        const styleObj = {
            color:"red",
            fontSize:100,
            fontWeight:"normal"
        }

        return(
            <div>
                <Card title = "标题" >
                    <h1  >内容</h1>
                    <p className='a'>内容</p>
                    <p>内容</p>
                </Card>
            </div>
        )
    }
}

export default Cards