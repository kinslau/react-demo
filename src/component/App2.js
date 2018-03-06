import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Home from './Home';
import { BrowserRouter as Router, Route, Switch ,Link } from 'react-router-dom'

class App2 extends Component {

    render() {
        return (
            <div>
                <h1>Simple SPA</h1>
                <ul className="header"> 
                    <li><Link to="/home" activeClassName="active">Home</Link></li> 
                    <li><Link to="/stuff" activeClassName="active">Stuff</Link></li> 
                    <li><Link to="/contact" activeClassName="active">Contact</Link></li> 
                </ul> 
                <div className="content">
                    {/* <Home/> */}
                    {this.props.children}
                </div>
            </div>
        )
    }
}


export default App2