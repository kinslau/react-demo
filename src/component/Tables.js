import { Table } from 'antd';
import React, { Component } from 'react'


const columns = [{
  title: 'Name',
  dataIndex: 'name',
  width: 150,
}, {
  title: 'Age',
  dataIndex: 'age',
  width: 150,
}, {
  title: 'Address',
  dataIndex: 'address',
}];

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
      return(<Table columns={columns} dataSource={data} pagination={{ pageSize: 20 }}  />)
    }
}


export default Tables