import React, { Component } from 'react'
import { connect } from 'react-redux'
import { toggleTodo } from '../redux/actions/index'
import Todo from '../component/Todo'



class TodoList extends Component {


    render() {
        console.log("self",this.props)
        const { todos, onTodoClick, onTodoClick2 } = this.props
        return (
            <ul>
                {todos.map(todo => (
                    <Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} />
                ))}
            </ul>
        )
    }
}


function getVisibleTodos(todos, filter) {
    switch (filter) {
        case 'SHOW_COMPLETED':
            return todos.filter(t => t.completed)
        case 'SHOW_ACTIVE':
            return todos.filter(t => !t.completed)
        case 'SHOW_ALL':
        default:
            return todos
    }
}


function mapStateToProps(state) {    //用于建立组件跟store与state的映射关系
    return {
        todos: getVisibleTodos(state.todos, state.visibilityFilter)
    }
}



function mapDispatchToProps(dispatch) {  //用于建立跟store.disptch的映射关系
    return {
        onTodoClick: id => {dispatch(toggleTodo(id))},
    }
}


const VisibleTodoList = connect(mapStateToProps,mapDispatchToProps)(TodoList)


export default VisibleTodoList
