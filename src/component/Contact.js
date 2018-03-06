import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch ,Link } from 'react-router-dom'


class Contact extends Component{


    render(){

        return(
            <div>
                <h2>GOT QUESTIONS?</h2> 
                <p>The easiest thing to do is post on our <a href="http://forum.kirupa.com">forums</a>. </p>
                
                <Link to="/home" >跳转到主页HOME</Link>
            </div>
        )
    }
}

export default Contact