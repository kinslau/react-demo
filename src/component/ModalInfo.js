import React, { Component } from 'react'
import { Modal, Button } from 'antd'



function info(message) {
    const modal = Modal.info({
      title: '提示',
      content: (
        <div>
            message
        </div>
      ),
      onOk() {},
    });
    setTimeout(() => modal.destroy(), 1000);
  }
  
  function success(message) {
    const modal = Modal.success({
      title:'成功',
      content: message,
    })
    setTimeout(() => modal.destroy(), 1000)
  }
  
  function error(message) {
    const modal = Modal.error({
      title: '错误',
      content: message,
    })
    setTimeout(() => modal.destroy(), 1000);
  }
  
  function warning(message) {
    const modal = Modal.warning({
      title: '警告',
      content: message,
    })
    setTimeout(() => modal.destroy(), 1000);
  }

export  {info,success,error,warning}
