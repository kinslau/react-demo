import React,{ Component } from 'react'
import  {Radio, Button,Icon } from 'antd'
import 'antd/dist/antd.less'


class Buttons extends Component{

    state = {
        size: 'small'
    }


    handleSizeChange = (e) =>{
    
        this.setState({
            size: e.target.value
        })
    }

    render(){
        const size = this.state.size
        return(
            <div>
                <Radio.Group  value={size} onChange={this.handleSizeChange}>
                    <Radio.Button value="large">Large</Radio.Button>
                    <Radio.Button value="default">Default</Radio.Button>
                    <Radio.Button value="small">Small</Radio.Button>
                </Radio.Group>

                <br/>
                <br/>
                <Button type="primary" size={size}>Primary</Button>
                <br/>
                <br/>
                <Button size={size}>Normal</Button>
                <br/>
                <br/>
                <Button type="dashed" size={size}>Dashed</Button>
                <br/>
                <br/>
                <Button type="danger" size={size}>Danger</Button>
                <br />
                <br />
                <Button.Group size={size}>
                    <Button type="primary">
                        <Icon type="left" />Backward
                    </Button>
                    <Button type="primary">
                        Forward<Icon type="right" />
                    </Button>
                </Button.Group>
            </div>
        )
    }


}

export default Buttons