import React, { Component } from 'react'


class Slider extends Component {


    constructor(props){
        super(props)
        this.state = {
            nowIndex: 0
        }
    }


    turn(index){
        var newIndex = this.state.nowIndex + index 
        if(newIndex < 0) {
            newIndex = newIndex + 3 
          }
          if(newIndex >= 2) {
            newIndex = newIndex - 3
          }
          console.log(newIndex)
          this.setState({nowLocal: newIndex})
    }


    startPlay(){

        this.autoPlayFlag = setInterval(()=>{
            this.turn(1)
        },1000)
    }

    pausePlay(){
        clearInterval(this.autoPlayFlag)
    }

    componentDidMount(){
        this.startPlay()
    }

    render() {

        const src = 'https://www.ikea.cn/ms/zh_CN/img/2017_img/homepage/hpin_what/PC_Living_Room_Banner_CN.jpg'



        return (
            <div>
                <ul style={{left:-100*this.state.nowIndex+'%',transitionDuration:1+'s',width:2*100+'%'}}> 
                    <li>
                        <img src={src} />
                    </li>
                    <li>
                        <img src={src} />
                    </li>
                    <li>
                        <img src={src} />
                    </li>
                </ul>

            </div>
        )


    }
}


export default Slider