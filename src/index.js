import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import {createStore,combineReducers} from 'redux'
import SiderDemo from './layout/Layout'
import todoApp from '../src/redux/reducers/index'
import {
        addTodo,
        toggleTodo,
        setVisibilityFilter,
        VisibilityFilters
      } from '../src/redux/actions'







let store = createStore(todoApp)
const unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)

store.dispatch(addTodo('Learn about actions'))
store.dispatch(addTodo('Learn about reducers'))
store.dispatch(addTodo('Learn about store'))

store.dispatch(toggleTodo(0))
store.dispatch(toggleTodo(1))
store.dispatch(setVisibilityFilter('SHOW_COMPLETED'))



ReactDOM.render((
        <Provider store={store}> 
                <Router>
                        <Route path="/" component={SiderDemo} />
                </Router>
        </Provider>
), document.getElementById('root'))



