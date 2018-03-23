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
                        <li>i am list 1</li>
           
                    </ul>
                </div>
                <Link to="/home" >跳转到主页HOME</Link>
            </div>
        )
    }
}

export default Contact