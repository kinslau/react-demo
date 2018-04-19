
var LODOP;//打印机
$(function () {
    //初始化
    $("body").append('<object  id="LODOP_OB" classid="clsid:2105C259-1E0C-4534-8141-A753534CB4CA" width=0 height=0> <embed id="LODOP_EM" type="application/x-print-lodop" width=0 height=0></embed></object>');
    
    LODOP = getLodop();
});

//检测是否安装了打印插件
function CheckLodop()
{
    var oOBJECT = document.getElementById('LODOP_OB'), oEMBED = document.getElementById('LODOP_EM');
    var LODOP = oEMBED;
    try {
        var isIE = (navigator.userAgent.indexOf('MSIE') >= 0) || (navigator.userAgent.indexOf('Trident') >= 0);
        var is64IE = isIE && (navigator.userAgent.indexOf('x64') >= 0);
        if (isIE) LODOP = oOBJECT;
        if ((LODOP == null) || (typeof (LODOP.VERSION) == "undefined")) {
            return false;
        } else
            if (LODOP.VERSION < "6.1.6.1") {
                return false;
            }
        return true;
    } catch (err) {
        return false;
    }
}

function getLodop() {
    var oOBJECT = document.getElementById('LODOP_OB'), oEMBED = document.getElementById('LODOP_EM');
    /**************************
      本函数根据浏览器类型决定采用哪个对象作为控件实例：
      IE系列、IE内核系列的浏览器采用oOBJECT，
      其它浏览器(Firefox系列、Chrome系列、Opera系列、Safari系列等)采用oEMBED,
      对于64位浏览器指向64位的安装程序install_lodop64.exe。
    **************************/
    var strHtmInstall = "打印控件未安装!点击这里<a href='/patch/install_lodop32.exe' target='_self'>执行安装</a>,安装后请刷新页面或重新进入。";
    var strHtmUpdate = "打印控件需要升级!点击这里<a href='/patch/install_lodop32.exe' target='_self'>执行升级</a>,升级后请重新进入。";
    var strHtm64_Install = "打印控件未安装!点击这里<a href='/patch/install_lodop64.exe' target='_self'>执行安装</a>,安装后请刷新页面或重新进入。";
    var strHtm64_Update = "打印控件需要升级!点击这里<a href='/patch/install_lodop64.exe' target='_self'>执行升级</a>,升级后请重新进入。";
    var strHtmFireFox = "注意：如曾安装过Lodop旧版附件npActiveXPLugin,请在【工具】->【附加组件】->【扩展】中先卸它。";
    var LODOP = oEMBED;
    try {
        var isIE = (navigator.userAgent.indexOf('MSIE') >= 0) || (navigator.userAgent.indexOf('Trident') >= 0);
        var is64IE = isIE && (navigator.userAgent.indexOf('x64') >= 0);
        var errhtml = '';
        if (isIE) LODOP = oOBJECT;
        if ((LODOP == null) || (typeof (LODOP.VERSION) == "undefined")) {
            if (navigator.userAgent.indexOf('Firefox') >= 0)
            {
                errhtml = strHtmFireFox
            }
            if (is64IE) {
                errhtml = strHtm64_Install;
            }
            else if (isIE) {
                errhtml = strHtmInstall;
            }
            else
            {
                errhtml = strHtmInstall;
            }
            ShowPrintErr(errhtml);
            return LODOP;
        } else {
            if (LODOP.VERSION < "6.1.6.1") {
                if (is64IE) {
                    errhtml = strHtm64_Update;
                }
                else if (isIE) {
                    errhtml = strHtmUpdate;
                }
                else {
                    errhtml = strHtmUpdate;
                }
                ShowPrintErr(errhtml);
                return LODOP;
            }
        }
        //=====如下空白位置适合调用统一功能:=====         


        //=======================================
        return LODOP;
    } catch (err) {
        if (is64IE)
        {
            errhtml = "Error:" + strHtm64_Install;
        }
        else
        {
            errhtml = "Error:" + strHtmInstall;
        }
        ShowPrintErr(errhtml);
        return LODOP;
    }
    return LODOP;
}

function ShowPrintErr(h)
{
    if (h)
    {
        h = "<p>" + h;
        h += " <span id='az_close' style='cursor:pointer;display:inline-block;position:absolute;right:0;' title='点击关闭'>X</span></p>";
        $(".az_remind").html(h).fadeIn(2000);
        $("#az_close").click(function () {
            $(".az_remind").fadeOut(2000);
        });
        setTimeout(function () { $(".az_remind").fadeOut(2000); }, 5000);
    }
}

(function ($) {
    function PrintBase(printObj) {
        this.nf = { FontName: '宋体', FontSize: 9 };
        this.hf = { FontName: '宋体', FontSize: 20 };
        this.printObj = printObj;
        this.printBegin = function () {
            LODOP.PRINT_INIT("票据" + Math.random());
            LODOP.SET_PRINTER_INDEXA(printObj.PrintSet.printerName);
            LODOP.SET_PRINT_MODE("POS_BASEON_PAPER", true);
        };
        this.DX = function (num) {
            var strOutput = "";
            var strUnit = '仟佰拾亿仟佰拾万仟佰拾元角分';
            num += "00";
            var intPos = num.indexOf('.');
            if (intPos >= 0)
                num = num.substring(0, intPos) + num.substr(intPos + 1, 2);
            strUnit = strUnit.substr(strUnit.length - num.length);
            for (var i = 0; i < num.length; i++)
                strOutput += '零壹贰叁肆伍陆柒捌玖'.substr(num.substr(i, 1), 1) + strUnit.substr(i, 1);
            return strOutput.replace(/零角零分$/, '整').replace(/零[仟佰拾]/g, '零').replace(/零{2,}/g, '零').replace(/零([亿|万])/g, '$1').replace(/零+元/, '元').replace(/亿零{0,3}万/, '亿').replace(/^元/, "零元");
        };
        this.printEnd = function () {
            LODOP.PRINT();
        };
        this.printFee = function () { };
        this.printFeeRefund = function () { };
        this.measureString = function (s, f) {
            //计算文字宽度
            return { width: s.length * f.FontSize, height: f.FontSize };
        }
        this.printLine = function (x1, y1, x2) {
            LODOP.ADD_PRINT_Line(y1, x1,y1, x2, 0, 1);
        };
        this.printString = function (s, f, x, y) {
            LODOP.ADD_PRINT_TEXT(y, x, 1000, 25, s);
            LODOP.SET_PRINT_STYLEA(0, "FontName", f.FontName);
            LODOP.SET_PRINT_STYLEA(0, "FontSize", f.FontSize);
        };
    }
    function PrinterPinA(printObj, printCopys, printCopysYAdd,y5,y6,y7,y8,y9) {
        PrintBase.call(this, printObj);
        this.maxCount = 12;
        this.currentPage = 1;
        this.xTitle = 370;
        this.yy = 25;
        this.x1 = 70;
        this.x2 = 200;
        this.x3 = 330;
        this.x4 = 460;
        this.x5 = 630;
        this.x6 = 727;
        this.y1 = 65;
        this.y2 = 80;
        this.y3 = 90;
        this.y4 = 115;
        this.y5 = y5;
        this.y6 = y6;
        this.y7 = y7;
        this.y8 = y8;
        this.y9 = y9;
        this.printCopys = printCopys;
        this.printCopysYAdd = printCopysYAdd;
        this.totalPages = Math.ceil(printObj.listFee.length / this.maxCount);
        this.printNormal = function (yAdd) {
            if (yAdd > 0) {
                this.printLine(0, yAdd, 900);
            }
            var title = this.printObj.schName + this.printObj.title;

            //计算文字宽度
            var xTemp = (844 - this.measureString(title, this.hf).width) / 2;
            this.printString(title, this.hf, xTemp, this.yy + yAdd);
            this.printString("班级：" + this.printObj.clsName, this.nf, this.x1, this.y1 + yAdd);
            this.printString("姓名：" + this.printObj.userName, this.nf, this.x2, this.y1 + yAdd);
            this.printString("日期：" + this.printObj.payTime, this.nf, this.x4, this.y1 + yAdd);
            this.printString("单号：" + this.printObj.serialNum, this.nf, this.x5, this.y1 + yAdd);
            this.printLine(this.x1, this.y2 + yAdd, this.x6);
            this.printLine(this.x1, this.y6 + yAdd, this.x6);
            this.printString("合计：", this.nf, this.x1, this.y5 + yAdd);
            var printphoneX = this.x1;
            var printaddressY = this.y7;
            if (printObj.schName) {
                printphoneX = this.x2;
                printaddressY = this.y8;
                this.printString(printObj.schName, this.nf, this.x1, this.y7 + yAdd);
            }
            if (printObj.tel) {
                printaddressY = this.y8;
                this.printString("电话：" + printObj.tel, this.nf, printphoneX, this.y7 + yAdd);
            }
            if (printObj.printSeal) {
                printaddressY = this.y8;
                this.printString("盖章", this.nf, this.x5, this.y7 + yAdd);
            }
            if (printObj.schAddress) {
                this.printString("地址：" + printObj.schAddress, this.nf, this.x1, printaddressY + yAdd);
            }
            var fstr = "退款人";
            if (printObj.feeType==1) {
                fstr = "收款人";
            }
            fstr += "：" + printObj.payee;
            this.printString(fstr, this.nf, this.x5, printaddressY + yAdd);
        };
        this.printFee = function () {//打印收费
            this.printBegin();
            for (var i = 0; i < this.printCopys; i++) {
                var yAdd = i * this.printCopysYAdd;
                this.printNormal(yAdd);
                var total = 0, real = 0, qian = 0, discount = 0;
                var y = this.y4 + yAdd;
                this.printString("项目", this.nf, this.x1, this.y3 + yAdd);
                this.printString("应收金额(元)", this.nf, this.x2, this.y3 + yAdd);
                this.printString("实收金额(元)", this.nf, this.x3, this.y3 + yAdd);
                this.printString("备注", this.nf, this.x4, this.y3 + yAdd);

                //遍历打印
                for (var j = (this.currentPage - 1) * this.maxCount; j < printObj.listFee.length && j < this.currentPage * this.maxCount; j++) {
                    var temp = printObj.listFee[j];
                    this.printString(temp.feeName, this.nf, this.x1, y);
                    this.printString(temp.totalMoney.toFixed(2), this.nf, this.x2, y);
                    this.printString(temp.realMoney.toFixed(2), this.nf, this.x3, y);
                    this.printString(temp.payMsg, this.nf, this.x4, y);

                    total += temp.totalMoney;
                    real += temp.realMoney;
                    qian += temp.qianOldMoney;
                    discount += temp.discountMoney;
                    y += this.yy;
                }

                this.printString("应收：" + total.toFixed(2) + "元", this.nf, this.x2, this.y5 + yAdd);
                this.printString("实收：" + real.toFixed(2) + "元", this.nf, this.x3, this.y5 + yAdd);
                this.printString("大写：" + this.DX(real), this.nf, this.x4, this.y5 + yAdd);
                if (qian) {
                    this.printString("欠费：" + qian.toFixed(2) + "元", this.nf, this.x3, this.y9 + yAdd);
                }
                if (discount) {
                    this.printString("减免：" + discount.toFixed(2) + "元", this.nf, this.x4, this.y9 + yAdd);
                }
            }
            this.printEnd();
            if (this.currentPage * this.maxCount < printObj.listFee.length) {
                this.currentPage++;
                this.printFee();
            }
        };
        this.printFeeRefund = function () {//打印退费
            this.printBegin();
            for (var i = 0; i < this.printCopys; i++) {
                var yAdd = i * this.printCopysYAdd;
                this.printNormal(yAdd);
                var real = 0;
                var y = this.y4 + yAdd;
                this.printString("退费项目", this.nf, this.x1, this.y3 + yAdd);
                this.printString("退费金额(元)", this.nf, this.x3, this.y3 + yAdd);
                this.printString("备注", this.nf, this.x4, this.y3 + yAdd);

                //遍历打印
                for (var j = (this.currentPage - 1) * this.maxCount; j < printObj.listFee.length && j < this.currentPage * this.maxCount; j++) {
                    var temp = printObj.listFee[j];
                    this.printString(temp.feeName, this.nf, this.x1, y);
                    this.printString(temp.realMoney.toFixed(2), this.nf, this.x3, y);
                    this.printString(temp.payMsg, this.nf, this.x4, y);

                    real += temp.realMoney;
                    y += this.yy;
                }

                this.printString("退费：" + real.toFixed(2) + "元", this.nf, this.x3, this.y5 + yAdd);
                this.printString("大写：" + this.DX(real), this.nf, this.x4, this.y5 + yAdd);
            }
            this.printEnd();
            if (this.currentPage * this.maxCount < printObj.listFee.length) {
                this.currentPage++;
                this.printFee();
            }
        }
    }

    function PrinterPin140(printObj) {//a4 2等分
        PrinterPinA.call(this, printObj, 1, -1, 415, 455, 465, 490, 440);
    }

    function PrinterPinA4(printObj)//a4 双份
    {
        PrinterPinA.call(this, printObj, 2, 540, 415, 455, 465, 490, 440);
    }
    function PrinterPin93(printObj) {
        PrinterPinA.call(this, printObj, 1, -1, 265, 305, 310, 335, 290);
    }
    function PrinterTicket(printObj,x1,x2,x3,x4,totalWidth,hfSize,hf2Size,addrSize)
    {
        PrintBase.call(this, printObj);
        this.y = 5;
        this.x1 = x1;
        this.x2 = x2;
        this.x3 = x3;
        this.x4 = x4;
        this.yy = 15;
        this.yh = 20;
        this.yx = 10;
        this.totalWidth = totalWidth;
        this.addrSize = addrSize;
        this.hf = { FontName: '宋体', FontSize: hfSize };
        this.hf2 = { FontName: '宋体', FontSize: hf2Size };
        this.printFoot = function (total, qian, real, discount) {
            this.printLine(this.x1, this.y, this.totalWidth - this.x1);
            this.y += this.yx;
            this.printString("合计：" + printObj.listFee.length + "项", this.nf, this.x1, this.y);
            this.y += this.yy;
            if (printObj.feeType) {
                this.printString("应收：" + total.toFixed(2) + "元", this.nf, this.x1, this.y);
                this.y += this.yy;
                if (qian) {
                    this.printString("欠费：" + qian.toFixed(2) + "元", this.nf, this.x1, this.y);
                    this.y += this.yy;
                }
                if (discount) {
                    this.printString("减免：" + discount.toFixed(2) + "元", this.nf, this.x1, this.y);
                    this.y += this.yy;
                }
                this.printString("实收：" + real.toFixed(2) + "元", this.nf, this.x1, this.y);
                this.y += this.yy;
            } else {
                this.printString("退费：" + real.toFixed(2) + "元", this.nf, this.x1, this.y);
                this.y += this.yy;
            }
            this.printString("大写：" + this.DX(real), this.nf, this.x1, this.y);
            this.y += this.yy;
            var fstr = "退款人";
            if (printObj.feeType==1) {
                fstr = "收款人";
            }
            fstr += "：" + printObj.payee;
            this.printString(fstr, this.nf, this.x1, this.y);
            this.y += this.yy;
            if (printObj.tel || printObj.schAddress) {
                this.printLine(this.x1, this.y, (this.totalWidth - this.x1));
                this.y += this.yx;
            }
            if (printObj.tel) {
                this.printString("电话：" + printObj.tel, this.nf, this.x1, this.y);
                this.y += this.yy;
            }
            if (printObj.schAddress) {
                var add1 = printObj.schAddress;
                var add2 = '';
                //判断要打印的行数
                var rows = Math.ceil(add1.length / this.addrSize);
                for (var i = 0; i < rows; i++) {
                    var end=(i+1)*this.addrSize;
                    if(end>add1.length)end=add1.length;
                    var temp = add1.substring(i * this.addrSize, end);
                    if (i == 0) {
                        this.printString("地址：" + temp, this.nf, this.x1, this.y);
                    } else {
                        this.printString(temp, this.nf, this.x1 * 8, this.y);
                    }
                    this.y += this.yy;
                }
            }
        };
        this.printHead = function () {
            if (printObj.schName) {
                var fs = this.measureString(printObj.schName, this.hf);
                var xtemp1 = (this.totalWidth - fs.width) / 2;
                this.printString(printObj.schName, this.hf, xtemp1, this.y);
                this.y += this.yh;
            }
            var f2 = this.measureString(printObj.title, this.hf2);
            var xtemp2 = (this.totalWidth - f2.width) / 2;
            this.printString(printObj.title, this.hf2, xtemp2, this.y);
            this.y += this.yh;
            this.printString("日期：" + printObj.payTime, this.nf, this.x1, this.y);
            this.printString("单号：" + printObj.serialNum, this.nf, this.x2, this.y);
            this.y += this.yy;
            this.printString("姓名：" + printObj.userName, this.nf, this.x1, this.y);
            this.printString("班级：" + printObj.clsName, this.nf, this.x2, this.y);
            this.y += this.yy;
            this.printLine(this.x1, this.y, this.totalWidth - this.x1);
            this.y += this.yx;
        };
        this.printFee = function () {//打印收费
            this.printBegin();
            this.printHead();
            var total = 0, real = 0, qian = 0, discount = 0;
            this.printString("项目", this.nf, this.x1, this.y);
            this.printString("应收(元)", this.nf, this.x3, this.y);
            this.printString("实收(元)", this.nf, this.x4, this.y);
            this.y += this.yy;

            //遍历打印
            for (var j = 0; j < printObj.listFee.length; j++) {
                var temp = printObj.listFee[j];
                var name = temp.feeName;
                if(temp.payMsg)
                {
                    name+='（' + temp.payMsg + '）';
                }
                this.printString(name,this.nf, this.x1, this.y);
                this.y+=this.yy;
                this.printString(temp.totalMoney.toFixed(2), this.nf, this.x3, this.y);
                this.printString(temp.realMoney.toFixed(2), this.nf, this.x4, this.y);
                total += temp.totalMoney;
                real += temp.realMoney;
                qian += temp.qianOldMoney;
                discount += temp.discountMoney;
                this.y += this.yy;
            }

            this.printFoot(total, qian, real, discount);
            this.printEnd();
        };
        this.printFeeRefund = function () {//打印退费
            this.printBegin();
            this.printHead();
            var real = 0;
            this.printString("项目", this.nf, this.x1, this.y);
            this.printString("退费(元)", this.nf, this.x4, this.y);
            this.y += this.yy;

            //遍历打印
            for (var j = 0; j < printObj.listFee.length ; j++) {
                var temp = printObj.listFee[j];
                var name = temp.feeName;
                if (temp.payMsg) {
                    name += '（' + temp.payMsg + '）';
                }
                this.printString(name, this.nf, this.x1, this.y);
                this.y += this.yy;
                this.printString(temp.realMoney.toFixed(2), this.nf, this.x4, this.y);
                real += temp.realMoney;
                this.y += this.yy;
            }
            this.printFoot(0, 0, real, 0);
            this.printEnd();
        };
    }
    function PrinterTicket80(printObj) {
        PrinterTicket.call(this, printObj, 5, 180, 120, 200, 280, 12, 10,20);
    }
    function PrinterTicket76(printObj) {
        PrinterTicket.call(this, printObj, 5, 155, 105, 185, 266, 12, 10,18);
    }
    function PrinterTicket50(printObj) {
        PrinterTicket.call(this, printObj, 5, 180, 60, 120, 192, 10, 8,11);
        this.printHead = function () {
            if (printObj.schName) {
                var fs = this.measureString(printObj.schName, this.hf);
                var xtemp1 = (this.totalWidth - fs.width) / 2;
                this.printString(printObj.schName, this.hf, xtemp1, this.y);
                this.y += this.yh;
            }
            var f2 = this.measureString(printObj.title, this.hf2);
            var xtemp2 = (this.totalWidth - f2.width) / 2;
            this.printString(printObj.title, this.hf2, xtemp2, this.y);
            this.y += this.yh;
            this.printString("日期：" + printObj.payTime, this.nf, this.x1, this.y);
            this.y += this.yy;
            this.printString("单号：" + printObj.serialNum, this.nf, this.x1, this.y);
            this.y += this.yy;
            this.printString("班级：" + printObj.clsName, this.nf, this.x1, this.y);
            this.y += this.yy;
            this.printString("姓名：" + printObj.userName, this.nf, this.x1, this.y);
            this.y += this.yy;
            this.printLine(this.x1, this.y, this.totalWidth - this.x1);
            this.y += this.yx;
        };
    }
    $.extend({
        Print: function (printObj) {
            if (printObj.PrintSet.printerName) {
                var pt;
                switch (printObj.PrintSet.printerType) {
                    case 1:
                        pt = new PrinterPin140(printObj);
                        break;
                    case 2:
                        pt = new PrinterPin93(printObj);
                        break;
                    case 3:
                        pt = new PrinterTicket80(printObj);
                        break;
                    case 4:
                        pt = new PrinterTicket76(printObj);
                        break;
                    case 5:
                        pt = new PrinterTicket50(printObj);
                        break;
                    case 6:
                        pt = new PrinterPinA4(printObj);
                        break;
                }
                if (pt) {
                    var k = 0;
                    var si = setInterval(function () {
                        if (k < printObj.PrintSet.printNumber) {
                            k++;
                            if (printObj.feeType == 1) {
                                pt.printFee(printObj);
                            } else {
                                pt.printFeeRefund(printObj);
                            }
                        }
                        else
                        {
                            clearInterval(si);
                        }
                    }, 200);
                }
            }
        }
    });
})(jQuery);