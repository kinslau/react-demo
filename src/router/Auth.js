import React, { PropTypes } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom'


const AuthExample = ()=>(
    <Router>
        <div>

        </div>
    </Router>
)


const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb){
        this.isAuthenticated = true
        setTimeout(cb,100)
    },
    signout(cb){
        this.isAuthenticated = false,
        setTimeout(cb,100)
    }
}


const AuthButton = withRouter(({history}) =>(
    fakeAuth.isAuthenticated?(
        <p>
            Welcome! <button onClick = {()=>{fakeAuth.signout(() => history.push('/'))}}>注销</button>
        </p>
    ):(
        <p>你没有登录</p>
    )
))

const PrivateRoute = ({component:Component, ...rest}) => (
    <Route {...rest} render ={props => 
        (fakeAuth.isAuthenticated?(<Component {...props}/>)
        :
        (<Redirect to={{pathname:'login',state:{from: props.location}}}/>)
    )} />
)