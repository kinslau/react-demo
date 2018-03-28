import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
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
import Login from './component/pages/login';







let store = createStore(todoApp)
const unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)

store.dispatch(addTodo('Learn about actions'))
store.dispatch(addTodo('Learn about reducers'))
store.dispatch(addTodo('Learn about store'))
unsubscribe()
store.dispatch(toggleTodo(0))
store.dispatch(toggleTodo(1))
store.dispatch(setVisibilityFilter('SHOW_COMPLETED'))



ReactDOM.render((
        <Provider store={store}> 
                <Router>
                        <Switch>
                                <Route path="/login"  component={Login} />  
                                <Route path="/"  component={SiderDemo} />  
                        </Switch>                    
                </Router>
        </Provider>
), document.getElementById('root'))



