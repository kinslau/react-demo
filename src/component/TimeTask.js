import { Form, Icon, Input, Button, Checkbox, DatePicker, Select } from 'antd'
import React, { Component } from 'react'
import '../less/TimeTask.css'
import moment from 'moment';
import 'moment/locale/zh-cn';
import axios from 'axios'


moment.locale('zh-cn');
const FormItem = Form.Item;
const Option = Select.Option;

class NormalLoginForm extends React.Component {


  componentWillMount(){
    const arr = this.getClubs()
    console.log(arr)
    this.setState({'clubs':arr})
    console.log(this.state)
    
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
        const d = values.startTime._d
        
        const youWant = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();  
        values.startTime =  youWant
        axios.post('/sys/reCalculate', values)
          .then(res => {
            console.log(res)
          })
          .catch(err => {
            console.log(err)
          })
      }
    })
  }


  onChange = (e) => {
    e.preventDefault()
    console.log(e.values)
  }


  getClubs = () => {
    axios.get('/sys/clubs')
      .then(res => {
        console.log(res.data)
        return res.data
      })
      .catch(err => {
        console.log(err)
      })
  }



  render() {
    const { getFieldDecorator } = this.props.form
    const {clubs} = this.state
    // const options = clubs.map((e) => <Option value={e.id}>{e.clubName}</Option>)
    return (
      <Form onSubmit={this.handleSubmit} className="TimeTaskForm">

        <FormItem label="原任务执行的时间">

          {getFieldDecorator('startTime', { rules: [{ required: true, message: '输入日期' }] })(
            <DatePicker />
          )}

        </FormItem>
        <FormItem>
          {getFieldDecorator('clubId', {
            rules: [{ required: true, message: '请输入场馆ID' }]
          })(
          //   <Select placeholder="选择要执行的任务">
          //     {/* {
          //       options
          //     } */}
          //     <Option value="1">第三方支付账单</Option>
          //     <Option value="2" disabled>清除子卡使用次数</Option>
          //     <Option value="3" disabled>会员激活有效天数</Option>
          //     <Option value="4" disabled>重置线上售票次数</Option>
          // </Select>
          < Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="text" placeholder="请输入场馆" />
          )}
        </FormItem>

        <FormItem>
          {getFieldDecorator('taskId', {
            rules: [
              { required: true, message: '选择要执行的任务' }
            ]
          })(
            <Select placeholder="选择要执行的任务">
              <Option value="1">凌晨2点10分  第三方支付账单</Option>
              <Option value="2" >晚上11点半  清除子卡使用次数</Option>
              <Option value="3" >晚上11点50  自动启用卡</Option>
              <Option value="4" >凌晨1分  重置线上售票次数</Option>
              <Option value="5" >晚上11点半 子卡首次激活</Option>
              <Option value="6" >晚上11点55 场地使用率</Option>
              <Option value="7" >晚上11点44  检查子卡是否过期</Option>
              <Option value="8" >晚上11点45  删除健身进场人数</Option>
              <Option value="9" >凌晨10分  清除闸机进出记录</Option>
              <Option value="10" >晚上11点29  场馆经营项目详情分析统计</Option>
              <Option value="11" >晚上11点39  场馆经营分析统计</Option>
              <Option value="12" >晚上11点55  场地使用率</Option>
              <Option value="13" >晚上2点40  新增体验券</Option>
            </Select>
          )}
        </FormItem>


        <FormItem>
          <Button type="primary" htmlType="submit" className="login-form-button">
            提交
          </Button>
        </FormItem>

      </Form>
    )
  }
}

const TimeTask = Form.create()(NormalLoginForm)

export default TimeTask