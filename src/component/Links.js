import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch ,Link } from 'react-router-dom'


class Links extends Component{


    render(){

        return(
            <div>
                <Link to={{pathname:'detail/${id}',state:'hello'}}>点击跳转</Link>
            </div>
        )
    }

}
