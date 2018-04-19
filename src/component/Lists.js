import React,{ Component } from 'react'


class Lists extends Component{
    constructor(props){
        super(props)
    }

    render(){
        const numbers = this.props.numbers
        const listItems = numbers.map((e)=><li key={e.toString()}>{e}</li>)
        return(
            <ul>{listItems}</ul>
        )
    }
}



export default Lists