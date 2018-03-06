import React, { Component } from 'react'
import { Chart, Label, Geom, Axis, Tooltip, Legend, Coord } from 'bizcharts'
import { DataSet } from '@antv/data-set'
class Charts extends Component{



    // render(){
    //     const data = [
    //         { genre: 'Sports', sold: 275, income: 2300 },
    //         { genre: 'Strategy', sold: 115, income: 667 },
    //         { genre: 'Action', sold: 120, income: 982 },
    //         { genre: 'Shooter', sold: 350, income: 5271 },
    //         { genre: 'Other', sold: 150, income: 3710 }
    //       ]

    //       const cols = {
    //         sold: { alias: '销售量' },
    //         genre: { alias: '游戏种类' }
    //       }

    //       return(
    //         <Chart width={640} height={400} data={data} scale={cols}>
    //             <Axis name="genre" />
    //             <Axis name="sold" />
    //             <Legend position="top" dy={-20} />
    //             <Tooltip />
    //             <Geom type="interval" position="genre*sold" color="genre" />
    //         </Chart>
    //       )
    // }
    



    render(){
        const data = [
            { month: 'Jan', Tokyo: 7.0, London: 3.9 },
            { month: 'Feb', Tokyo: 6.9, London: 4.2 },
            { month: 'Mar', Tokyo: 9.5, London: 5.7 },
            { month: 'Apr', Tokyo: 14.5, London: 8.5 },
            { month: 'May', Tokyo: 18.4, London: 11.9 },
            { month: 'Jun', Tokyo: 21.5, London: 15.2 },
            { month: 'Jul', Tokyo: 25.2, London: 17.0 },
            { month: 'Aug', Tokyo: 26.5, London: 16.6 },
            { month: 'Sep', Tokyo: 23.3, London: 14.2 },
            { month: 'Oct', Tokyo: 18.3, London: 10.3 },
            { month: 'Nov', Tokyo: 13.9, London: 6.6 },
            { month: 'Dec', Tokyo: 9.6, London: 4.8 }
          ]

        const ds = new DataSet()
        const dv = ds.createView().source(data)
        dv.transform({
            type: 'fold',
            fields: [ 'Tokyo', 'London' ], // 展开字段集
            key: 'city', // key字段
            value: 'temperature', // value字段
          })
          
          const cols = {
            month: {
              range: [ 0, 1 ]
            }
          }


          return(
                <Chart height={400} data={dv} scale={cols}  animate={true}>
                    <Legend />
                    <Axis name="month" />
                    <Axis name="temperature" label={{formatter: val => `${val}°C`}}/>
                    <Tooltip crosshairs={{type : "y"}}/>
                    <Geom type="line" position="month*temperature" size={2} color={'city'} />
                    <Geom type='point' position="month*temperature" size={4} shape={'circle'} color={'city'} style={{ stroke: '#fff', lineWidth: 1}} />
                </Chart>

          )
    }



    // render(){
    //     const { DataView } = DataSet;
    //     const data = [
    //       { item: '事例一', count: 40 },
    //       { item: '事例二', count: 21 },
    //       { item: '事例三', count: 17 },
    //       { item: '事例四', count: 13 },
    //       { item: '事例五', count: 9 }
    //     ]

    //     const dv = new DataView()

    //     dv.source(data).transform({
    //       type: 'percent',
    //       field: 'count',
    //       dimension: 'item',
    //       as: 'percent'
    //     })

    //     const cols = {
    //       percent: {
    //         formatter: val => {
    //           val = (val * 100) + '%'
    //           return val
    //         }
    //       }
    //     }   

    //     return(
    //         <Chart height={window.innerHeight} data={dv} scale={cols} padding={[ 80, 100, 80, 80 ]} forceFit>
    //         <Coord type='theta' radius={0.75} />
    //         <Axis name="percent" />
    //         <Legend position='right' offsetY={-window.innerHeight / 2 + 120} offsetX={-100} />
    //         <Tooltip 
    //           showTitle={false} 
    //           itemTpl='<li><span style="background-color:{color};" class="g2-tooltip-marker"></span>{name}: {value}</li>'
    //           />
    //         <Geom
    //           type="intervalStack"
    //           position="percent"
    //           color='item'
    //           tooltip={['item*percent',(item, percent) => {
    //             percent = percent * 100 + '%';
    //             return {
    //               name: item,
    //               value: percent
    //             };
    //           }]}
    //           style={{lineWidth: 1,stroke: '#fff'}}
    //           >
    //           <Label content='percent' offset={-40} textStyle={{
    //               rotate: 0,
    //               textAlign: 'center',
    //               shadowBlur: 2,
    //               shadowColor: 'rgba(0, 0, 0, .45)'
    //             }} />
    //         </Geom>
    //       </Chart>
    //     )
    // }
}


export default Charts