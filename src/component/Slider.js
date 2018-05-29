import React, { Component } from 'react'
// import '../less/swipe.css'


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
        return (
            <div style={{width:'1200px',height:'280px'}}>
                <ul > 
                    <li>
                        <div style={{background:'red',width:'400px',height:'280px'}}>
                            PAGE_1
                        </div>
                    </li>
                    <li>
                        <div style={{background:'gray',width:'400px',height:'280px'}}>
                            PAGE_2
                        </div>
                    </li>
                    <li>
                        <div style={{background:'pink',width:'400px',height:'280px'}}>
                            PAGE_3
                        </div>
                    </li>
                </ul>

            </div>
        )


    }
}


export default Slider