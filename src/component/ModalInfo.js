import React, { Component } from 'react'
import { Modal, Button } from 'antd'



function info(message) {
    Modal.info({
      title: '提示',
      content: (
        <div>
            message
        </div>
      ),
      onOk() {},
    });
  }
  
  function success(message) {
    Modal.success({
      title:'成功',
      content: message,
    });
  }
  
  function error(message) {
    Modal.error({
      title: '错误',
      content: message,
    });
  }
  
  function warning(message) {
    Modal.warning({
      title: '警告',
      content: message,
    });
  }

export  {info,success,error,warning}
