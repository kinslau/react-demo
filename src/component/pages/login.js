import React, { Component } from 'react'
import axios from 'axios'
import '../../less/login.css'
import { Form, Icon, Input, Button } from 'antd'
import { loginOrExit } from '../../redux/actions/index.js'
import { connect } from 'react-redux'
import {toMd5} from '../../utils/utils'


const FormItem = Form.Item

class Login extends Component {

    constructor(props, context) {
        super(props, context)
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {isClickable:true}
    }


    handleSubmit(e) {
        e.preventDefault();
        this.setState({isClickable:false})
        console.log(this.state)

        this.props.form.validateFields((err, values) => {

            var config = { headers: { 'clubId': '-cgo5q39lnnhnhae5cavg78h8sgi77gq9' } }
            var params = 'username='+values.userName + '&password='+ toMd5(values.password) 

            axios.post('/clubmanager/sys/login', params, config)
                .then(res => {
                    console.log(res)
                    this.setState({isClickable:true})
                    const action = loginOrExit(true)    
                    // this.dispatch(action)
                    this.props.history.push('/home/charts')
                })
                .catch(err => {
          
                    this.setState({isClickable:true})
                })
        })
    }
    
    

render() {
    const { getFieldDecorator } = this.props.form
    const {dispatch} = this.props
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
                        <Button ghost htmlType="submit"  loading={!this.state.isClickable}  className="login-form-button" style={{ background: 'rgb(190, 200, 200)' }}>
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
export default connect()(Login)
