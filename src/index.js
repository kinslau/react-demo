import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import SiderDemo from './layout/Layout'
import todoApp from '../src/redux/reducers/index'
import Login from './component/pages/login'
import './utils/config'


let store = createStore(todoApp) //reducer

ReactDOM.render((
        <Provider store={store}>
                <Router>
                        <Switch>
                                <Route path="/login" component={Login} />
                                <Route path="/" component={SiderDemo} />
                        </Switch>
                </Router>
        </Provider>
), document.getElementById('root'))



