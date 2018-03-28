import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch ,Link , Redirect,withRouter  } from 'react-router-dom'
import { connect } from 'react-redux'
import axios from 'axios'
import '../../less/login.css'
import { Form, Icon, Input, Button } from 'antd'


const FormItem = Form.Item


function mapStateToProps(state) {
    console.log(state); // state
    console.log(arguments[1]); // undefined
}


connect()
class Login extends Component {

    constructor(props,context){
        super(props,context)
        this.handleSubmit = this.handleSubmit.bind(this);
    }
 

    handleSubmit(e){
        e.preventDefault();
        // this.props.form.validateFields((err, values) => {
        //     if (!err) {
        //         console.log('Received values of form: ', values);
        //         axios.post('http://nnyyg.sportgoing.com/clubmanager/sys/login', {
        //             username: 'admin',
        //             password: 'yundongshi'
        //         })
        //             .then(res => {
        //                 console.log(res)
        //             })
        //             .catch(err => {
        //                 console.log(err)
        //             })
        //     }
        // }
        // )
    
        
        console.log('---',this.props.store)
        console.log('---',this.context.store)
        this.props.history.push('/home/charts')

    }




  

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className='main'>
                <div className='board'>

                    <h1 className="login_title">登录您的账户</h1>
                    <Form onSubmit={this.handleSubmit} className="login-form" >
                        <FormItem className='username_bable'>
                            {getFieldDecorator('userName', {
                                rules: [{ required: true, message: 'Please input your username!' }],
                            })(
                                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="请输入账号" />
                            )}
                        </FormItem>
                        <FormItem className='password_bable'>
                            {getFieldDecorator('password', {
                                rules: [{ required: true, message: 'Please input your Password!' }],
                            })(
                                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="请输入密码" />
                            )}
                        </FormItem>
                        <FormItem className='login_button'>
                            <Button ghost htmlType="submit" className="login-form-button" style={{ background: 'rgb(190, 200, 200)' }}>
                                登录/注册
                            </Button>
                        </FormItem>
                    </Form>
                </div>
            </div>
        )
    }
}


Login = Form.create()(Login)

export default Login