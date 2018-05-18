import React, { Component } from 'react'
import { getLodop } from '../../utils/LodopFuncs'

class PrintTest extends Component {




    render() {
        try {

            var lodop = getLodop()
           
            console.log('----初始化----')
            console.log('lodop:', lodop)
            var count = this.getPrinterCount(lodop)

            var name = this.getPrinterName(lodop, 1)
            console.log('name', name)
            this.PrintByPrinterIndex(lodop, 1)

            //首先一个初始化语句 
            
            lodop.PRINT_INIT("打印任务名");
            lodop.ADD_PRINT_TEXT(0, 0, 100, 20, "测试内容");//然后多个ADD语句及SET语句 

            LODOP.ADD_PRINT_BARCODE(28,34,307,47,"128A","123456789012");
            LODOP.ADD_PRINT_BARCODE(88,32,206,78,"128B","123456789012");
            LODOP.SET_PRINT_STYLEA(0,"FontSize",18);
            LODOP.ADD_PRINT_BARCODE(107,255,161,64,"128C","888888");
            LODOP.SET_PRINT_STYLEA(0,"Color","#FF0000");
            LODOP.ADD_PRINT_BARCODE(179,42,130,47,"128Auto","12345678901");
            LODOP.ADD_PRINT_BARCODE(252,42,153,54,"EAN8","12345678");
            LODOP.SET_PRINT_STYLEA(0,"Angle",180);
            LODOP.ADD_PRINT_BARCODE(173,244,235,172,"EAN13","1234567890123");
            LODOP.SET_PRINT_STYLEA(0,"Angle",35);
            LODOP.ADD_PRINT_BARCODE(351,34,360,36,"EAN128A","123456789012");
            LODOP.SET_PRINT_STYLEA(0,"ShowBarText",0);
            LODOP.ADD_PRINT_BARCODE(403,34,360,47,"EAN128B","123456789012");
            LODOP.SET_PRINT_STYLEA(0,"AlignJustify",2);
            LODOP.ADD_PRINT_BARCODE(462,34,360,47,"EAN128C","123456789012");
            LODOP.ADD_PRINT_BARCODE(513,34,360,47,"Code39","*123ABC4567890*");
            LODOP.SET_PRINT_STYLEA(0,"Color","#0000FF");
            LODOP.ADD_PRINT_BARCODE(570,34,360,47,"39Extended","*1234567890*");
            LODOP.ADD_PRINT_BARCODE(621,34,360,47,"2_5interleaved","123456789012");
            LODOP.ADD_PRINT_BARCODE(677,34,360,47,"2_5industrial","123456789012");
            LODOP.ADD_PRINT_BARCODE(729,34,360,47,"2_5matrix","123456789012");
            LODOP.SET_PRINT_STYLEA(0,"Color","#408080");
            LODOP.ADD_PRINT_BARCODE(787,34,360,47,"UPC_A","089600124569");
            LODOP.ADD_PRINT_BARCODE(844,34,135,64,"UPC_E0","08960007");
            LODOP.ADD_PRINT_BARCODE(65,595,45,95,"UPC_E1","1122333");
            LODOP.SET_PRINT_STYLEA(0,"Angle",90);
            LODOP.ADD_PRINT_BARCODE(87,676,57,122,"UPCsupp2","12345");
            LODOP.SET_PRINT_STYLEA(0,"Angle",90);
            LODOP.ADD_PRINT_BARCODE(359,435,78,181,"UPCsupp5","123456789012");
            LODOP.SET_PRINT_STYLEA(0,"Angle",90);
            LODOP.ADD_PRINT_BARCODE(309,579,44,238,"Code93","BJ100080");
            LODOP.SET_PRINT_STYLEA(0,"Angle",90);
            LODOP.ADD_PRINT_BARCODE(241,663,73,246,"93Extended","123456789012");
            LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
            LODOP.ADD_PRINT_BARCODE(583,419,58,251,"MSI","123456789012");
            LODOP.SET_PRINT_STYLEA(0,"Color","#FF00FF");
            LODOP.SET_PRINT_STYLEA(0,"ShowBarText",0);
            LODOP.SET_PRINT_STYLEA(0,"Angle",90);
            LODOP.ADD_PRINT_BARCODE(589,504,74,270,"PostNet","123456789012");
            LODOP.SET_PRINT_STYLEA(0,"Angle",90);
            LODOP.ADD_PRINT_BARCODE(565,626,115,253,"Codabar","123456789012");
            LODOP.SET_PRINT_STYLEA(0,"Angle",285);
            LODOP.ADD_PRINT_BARCODE(30,405,176,67,"PDF417","我是pdf417value");
            LODOP.ADD_PRINT_BARCODE(130,434,168,146,"QRCode","1234567890版本7的最大值是122个字符123123");
            LODOP.SET_PRINT_STYLEA(0,"GroundColor","#0080FF");



            lodop.PRINT();

        } catch (e) {

        }
        return <div ref={el => (this.instance = el)} />

    }








    //获得打印机个数
    getPrinterCount(LODOP) {
        console.log('获得打印机数量')
        return LODOP.GET_PRINTER_COUNT();
    }
    //打印机名称
    getPrinterName(LODOP, index) {
        console.log('index', index)
        return LODOP.GET_PRINTER_NAME(index);
    }
    getPrinterOther(iPrinterNO, strTypeKEY) {
        LODOP = getLodop();
        return LODOP.GET_PRINTER_NAME(iPrinterNO + ":" + strTypeKEY)
        //例如：LODOP.GET_PRINTER_NAME("0:DriverName");	
    }
    //
    PreviewByPrinterIndex(LODOP, intPrinterIndex) {

        if (LODOP.SET_PRINTER_INDEX(intPrinterIndex))
            LODOP.PREVIEW()
    }

    //直接打印
    PrintByPrinterIndex(LODOP, index) {

        //LODOP.SET_PRINT_MODE("TRYLINKPRINTER_NOALERT",true);//这个语句设置网络共享打印机连接不通时是否提示一下
        if (LODOP.SET_PRINTER_INDEX(index)){
            // LODOP.SET_PRINT_COPIES(intCopies)
            LODOP.PRINT()
        }
            
    }




    //指定份数
    // PrintMoreCopies(intCopies, LODOP) {
    //     console.log('设置打印份数')
    //     if (LODOP.SET_PRINT_COPIES(intCopies)) {
    //         console.log('设置：' + intCopies)

    //     } else {
    //         console.log('设置打印份数失败！')
    //     }
    // }

    

    





}



export default PrintTest