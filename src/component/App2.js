import React, { Component } from 'react'
import Footer from './Footer'
import AddTodo from '../layout/AddTodo'
import VisibleTodoList from '../layout/VisibleTodoList'



class App2 extends Component {
    render() {
        return (
            <div>
                <AddTodo />
                <VisibleTodoList />
                <Footer />
            </div>
        )
    }
}

export default App2