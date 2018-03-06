import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Layout, Menu, Icon ,Radio } from 'antd'
import { BrowserRouter as Router, Route, Switch, Link , Redirect  } from 'react-router-dom'
import Charts from './Chart';
import Menus from './Menu';





function handChange(value){
    console.log('Selected: ${value}')
}

class Home extends Component{

    state = {
        size: 'default'
    }
    
    handleSizeChange = (e) => {
        console.log('-----',e.target.value)
        
        //this.setState({ size: e.target.value })
        // return (<Redirect to='/test'  />)
        return (<Redirect to='/home/menus'/>)
    }


    render(){
     
        return(
            <div style = {{margin:'20px',position:'relative',fontSize:20}}>
                <h2>HELLO -Home</h2> 
                <p>
                    Cras facilisis urna ornare ex volutpat, et convallis erat elementum. 
                    Ut aliquam, ipsum vitae gravida suscipit, metus dui bibendum est,
                    eget rhoncus nibh metus nec massa. Maecenas hendrerit laoreet augue nec molestie.
                    Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                </p> 
                <p>Duis a turpis sed lacus dapibus elementum sed eu lectus.</p>
                
                <Radio.Group onChange={this.handleSizeChange}>
                    <Radio.Button value="/home/Timer" > 计时器  </Radio.Button>
                    <Radio.Button value="/home/menus">菜单</Radio.Button>
                    <Radio.Button value="/home/charts">图表</Radio.Button>
                </Radio.Group>

                {/* <Link to='/home/charts' >图表</Link> */}
                <div style ={{margin:'20px'}}>
                        <Route path="/home/charts" component={Charts} />
                        <Route path="/home/menus" component={Menus} />
                      

                </div>
                
            </div>
        )
    }
}

export default Home