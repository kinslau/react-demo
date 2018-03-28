import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import '../less/flexbox.css'

class Contact extends Component {


    render() {

        return (
            <div>
                <div className="parent">
                    <ul>
                        <li>Branding</li> 
                        <li>Home</li> 
                        <li>Services</li> 
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <Link to="/home" >跳转到主页HOME</Link>
            </div>
        )
    }
}

export default Contact