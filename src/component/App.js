import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux'
import {Provider,connect } from 'react-redux'


class App extends Component{
    render(){
        const {text,onChangeText,onButtonClick} = this.props
        return(
            <div>
                <h1 onClick={onChangeText}>{text}</h1>
                <button onClick={onButtonClick}>click me {text}</button>
                <br></br>
                <br></br>
                <button onClick={onButtonClick}>不要点我</button>

            </div>
        )
    }
}


const onChangeTextAction = {
    type:'CHANGE_TEXT'
}

const buttonClickAction = {
    type:'BUTTON_CLICK'
}


const initialState = {
    text:'Hello',
    more:'TRUE'
}

const reducer = (state = initialState,action) => {
    switch(action.type){
        case 'CHANGE_TEXT':
            let a  = state.text==='Hello'?'world':'Hello'
            console.log(a)
            return{
                text:a
            }
        case 'BUTTON_CLICK':
            let b = 'Hello world'
            console.log(b)
            console.log(state)
            return{
                text:b,
                more:'FALSE'
            }
        default:
            return initialState
    }
}


let store = createStore(reducer)

function mapStateToProps(state){
    console.log(state)
    console.log('Redux->COMPONENT')
    return {text:state.text}
}


function mapDispatchToProps(dispatch){

    console.log(dispatch)
    console.log('ACTION->COMPONENT')
    return{
        onButtonClick:()=>dispatch(buttonClickAction),
        onChangeText:()=>dispatch(onChangeTextAction)

    }
}


App = connect(mapStateToProps,mapDispatchToProps)(App)


export default App