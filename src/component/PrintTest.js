import React, { Component } from 'react'

// import lodop from 'lodop'
class PrintTest extends Component {


    constructor(props) {
        super(props)
    }

    componentDidMount() {
    

        const script = document.createElement("script");
        script.src = "http://www.c-lodop.com/demolist/LodopFuncs.js";
        script.async = true;
        document.body.appendChild(script);
    }

    render() {
        try {

            var lodop = getLodop()
            console.log('lodop:', lodop)
            lodop.PRINT_INIT("打印任务名");               //首先一个初始化语句 
            lodop.ADD_PRINT_TEXT(0, 0, 100, 20, "文本内容一");//然后多个ADD语句及SET语句 
            lodop.PRINT();

        } catch (e) {

        }
        return <div ref={el => (this.instance = el)} />

    }

}



export default PrintTest