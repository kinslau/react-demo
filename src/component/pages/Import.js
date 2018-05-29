import React, { Component } from 'react'
import { Upload, Button, Icon, message } from 'antd'
import axios from 'axios'

class Import extends Component {
    state = {
        fileList: [],
        uploading: false,
    }

    handleUpload = () => {
        const { fileList } = this.state
        const formData = new FormData()
        // fileList.forEach((file) => {
        //     formData.append('files[]', file)
        // })
        formData.append('fileName',fileList[0])

        this.setState({
            uploading: true,
        })
        let config = {
            headers: {'Content-Type': 'multipart/form-data'}
        }
     
    
        axios.post('/fileUpload',formData,config)
       

            .then(res=>{
                console.log(res)
                this.setState({
                    fileList: [],
                    uploading: false,
                })
            }).catch(err => {
                console.log(err)
                this.setState({
                    uploading: false,
                })
              })
            }
    

    render() {
        const { uploading } = this.state
        const props = {
            action: 'http://localhost:7780/fileUpload',
            onRemove: (file) => {
                this.setState(({ fileList }) => {
                    const index = fileList.indexOf(file);
                    const newFileList = fileList.slice();
                    newFileList.splice(index, 1);
                    return {
                        fileList: newFileList,
                    }
                })
            },
            beforeUpload: (file) => {
                this.setState(({ fileList }) => ({
                    fileList: [...fileList, file],
                }))
                return false;
            },
            fileList: this.state.fileList,
        }

        return (
            <div>
                <Upload {...props}>
                    <Button>
                        <Icon type="upload" /> Select File
                    </Button>
                </Upload>
                <Button
                    className="upload-demo-start"
                    type="primary"
                    onClick={this.handleUpload}
                    disabled={this.state.fileList.length === 0}
                    loading={uploading}
                >
                    {uploading ? 'Uploading' : 'Start Upload'}
                </Button>
            </div>
        );
    }
}


export default Import