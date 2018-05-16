import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../redux/actions'



class AddTodo extends Component {

    constructor(props){
        super(props)
    }



    render() {
        const {dispatch} = this.props
        console.log("store",this.store)
        let input
    
        return (
            <div>
                <form onSubmit={e => {
                    e.preventDefault()
                    if (!input.value.trim()) {
                        return
                    }
                    const action = addTodo(input.value)
                    console.log("action:addTodo", action)
                    dispatch(action)   //派发Action
                    input.value = ''
                }}
                >

                    <input ref={node => { input = node }} />
                    <button type="submit"> Add Todo </button>
                </form>
            </div>
        )
    }
}


export default connect()(AddTodo)
