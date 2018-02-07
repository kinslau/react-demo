import React, { Component } from 'react'


class HelloMeassage extends Component{
    render(){
        return(
            <div>
                Hello {this.props.name} {this.props.sex}
            </div>
        )
    }
}

export default HelloMeassage