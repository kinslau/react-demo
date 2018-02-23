import { Table } from 'antd';
import React, { Component } from 'react'
import 'antd/dist/antd.css'


const columns = [{
  title: 'Name',
  dataIndex: 'name'

}, {
  title: 'Age',
  dataIndex: 'age'

}, {
  title: 'Address',
  dataIndex: 'address'

}]

const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  });
}

class Tables extends Component{
    
    render(){
      return(<Table columns={columns} bordered dataSource={data} pagination={{ pageSize: 20 }} scroll = {{y:1500}} />)
    }
}


export default Tables