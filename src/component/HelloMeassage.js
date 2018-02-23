import React, { Component } from 'react'


class HelloMeassage extends Component{
    render(){
        return(
            <div>
                Hello {text()} {this.props.sex}
            </div>
        )
    }
}


function text(){
    return "刘辉" 
}

export default HelloMeassage