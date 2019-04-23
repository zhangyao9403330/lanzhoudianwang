/**
 * Created by 30947 on 2018/7/18.
 */
// var baseUrl="http://172.16.15.46:8080/";
voltagelineinfo="rest/eqLine/secondMenu"// 电压等级线路分布图
// wurenji="http://172.16.15.46:8080/planeInfo" 
$(function(){
    xldjfbt()//线路等级分布图
    voltage();
    bteam(); //班组线路分布图
})

function xldjfbt(){
    var myChart = echarts.init($("#xldjfb")[0]);
    // $.ajax({
    //     url: this.baseUrl+this.voltagelineinfo,
    //     type: "get",
    //     success: function (reslut) {
           

        option1 = {
            title: {                                
                text: '路线个数/个',                
                textStyle:{                 //---主标题内容样式    
                    color:'#0FD5E7',
                    fontSize:16
                },
                padding:[20,60,200,400]               //---标题位置,因为图形是是放在一个dom中,因此用padding属性来定位
            },
            xAxis: {
                type: 'category',
                data: ['一级线路', '二级线路', '三级线路', '四级线路', '五级线路'],
                splitLine:{show: false},//去除网格线
                axisLine: {
                    lineStyle: {
                        type: 'solid',
                        color: '#00EAFF',//左边线的颜色
                        width:'2'//坐标线的宽度
                    }
                },
                // axisLabel: {
                //     textStyle: {
                //         color: '#90D1F2',//坐标值得具体的颜色
    
                //     }
                    
                // }
                axisLabel:{
                  interval:0,
                //   rotate:45,
                  margin:2,
                  textStyle:{
                      color:"#90D1F2"
                  }
              },
            },
            grid :{ 
                borderWidth :'0px' 
            },
            yAxis: {
                type: 'value',
                // show : false,
                axisLine: {   
                    lineStyle: {
                        type: 'solid',
                        color:'#00EAFF',
                        width:'0'
                    }
                },
                axisLabel: {
                    textStyle: {
                        color: '#90D1F2'
                    }
                },
                splitLine:{                 //---grid 区域中的分隔线
                    show:true,                  //---是否显示，'category'类目轴不显示，此时我的y轴为类目轴，splitLine属性是有意义的
                    lineStyle:{
                        color:'#00EAFF',
                        width:1,
                        // type:'dashed',          //---类型
                    },
                },
                
            },
            series: [{
                data:[145,133,120,50,100],
                type: 'bar',
                itemStyle:{
                    normal:{
                        color: function(params) {
                            var colorList = ['#419afe','#ed95e3 ','#366afb','#6975fd','#6073de']; 
                            return colorList[params.dataIndex] 
                        }
                    }
                },
                barWidth : 40,//柱图宽度
                
            }]
        };
            myChart.setOption(option1);
    //     }
    // })
  
      

}
function voltage(){
    var myChart = echarts.init($("#voltage")[0]);
    var myChart1 = echarts.init($("#voltage1")[0]);
    // $.ajax({
    //     url: this.baseUrl+this.voltagelineinfo,
    //     type: "get",
    //     success: function (res) {
            // console.log(res)
            var option={
                tooltip: {
                    trigger: 'item',
                    formatter: "{a}{b} {c}<br/>({d}%)",
                    textStyle: {
                        color: 'rgba(255, 255, 255, 0.85)',
                        fontSize: '20'
                    }
                },
                legend: {
                    orient : 'vertical',
                    x : '400',
                    y : '20', // 'center' | 'bottom' | {number}
                    textStyle : {
                        color : '#90D1F2',
                        fontSize:'14'
                    },
                    data:["人工巡检故障","分布式故障","其他"]
                },
        
                calculable : false,
                series : [
                    {
                        name:'设备类型',
                        type:'pie',
                        // radius : ['50%', '70%'],
                        center: ['35%', '40%'],
                        label:{
                            normal:{
                                show:false,
                            },
                            emphasis:{
                                show:true
                            }
                        },
                        labelLine:{
                            normal:{
                                show:false,
                            },
                            emphasis:{
                                show:true
                            }
                        },
                  
                        data:[{
                            "name": "人工巡检故障",
                            "value": 40,
                            itemStyle: {
                                color: '#53c8fe'
                            }
                        },
                        {
                            "name":"分布式故障",
                            "value":30,
                            itemStyle: {
                                color:'#419afe'
                            }
                        },
                        {
                            "name": "其他",
                            "value": 30,
                            itemStyle: {
                                color: '#ed95e3'
                            }
                        }]
                        
                    }
                ]
            }
            var option1={
                tooltip: {
                    trigger: 'item',
                    formatter: "{a}{b} {c}<br/>({d}%)",
                    textStyle: {
                        color: 'rgba(255, 255, 255, 0.85)',
                        fontSize: '20'
                    }
                },
                legend: {
                    orient : 'vertical',
                    x : '400',
                    y : '20', // 'center' | 'bottom' | {number}
                    textStyle : {
                        color : '#90D1F2',
                        fontSize:'14'
                    },
                    data:["人工巡检故障","分布式故障","其他"]
                },
        
                calculable : false,
                series : [
                    {
                        name:'设备类型',
                        type:'pie',
                        // radius : ['50%', '70%'],
                        center: ['35%', '40%'],
                        label:{
                            normal:{
                                show:false,
                            },
                            emphasis:{
                                show:true
                            }
                        },
                        labelLine:{
                            normal:{
                                show:false,
                            },
                            emphasis:{
                                show:true
                            }
                        },
                  
                        data:[{
                            "name": "人工巡检故障",
                            "value": 40,
                            itemStyle: {
                                color: '#53c8fe'
                            }
                        },
                        {
                            "name":"分布式故障",
                            "value":30,
                            itemStyle: {
                                color:'#419afe'
                            }
                        },
                        {
                            "name": "其他",
                            "value": 30,
                            itemStyle: {
                                color: '#ed95e3'
                            }
                        }]
                        
                    }
                ]
            }
            myChart.setOption(option);
            myChart1.setOption(option1);
        // }
    // })
   
    
}


function bteam(){
    var myChart = echarts.init($("#bteam")[0]);
    // $.ajax({
    //     url: this.baseUrl+this.voltagelineinfo,
    //     type: "get",
    //     success: function (reslut) {
            // console.log(reslut.lb);
            // var t_title="<tr>"+"<th>"+"班组名字"+"</th>"+"<th>"+"线路数"+"</th>"+"<th>"+"总长度"+"</th>"+"<th>"+"人员数"+"</th>"+"</tr>";
            // var html="";
            // var rescon="";
            // for (var i = 0; i < reslut.lb.length; i++) {
            //     html+="<tr>"+"<td>"+reslut.lb[i].NAME+"</td>"+"<td>"+reslut.lb[i].LINECOUNT+"</td>"+"<td>"+reslut.lb[i].LINESUM+"</td>"+"<td>"+reslut.lb[i].NUM+"</td>"+"</tr>"
            // }
            // rescon=t_title+html;
        //   $("#Btable").append(rescon);

        option1 = {
            title: {                                
                text: '路线数（个）/班组',                
                textStyle:{                 //---主标题内容样式    
                    color:'#0FD5E7',
                    fontSize:16
                },
                padding:[20,60,200,900]               //---标题位置,因为图形是是放在一个dom中,因此用padding属性来定位
            },
            xAxis: {
                type: 'category',
                data: ['开永运维班', '盐海运维班', '兰州运维班', '西固运维班','和华运维班','新城运维班','可视化运维班'],
                splitLine:{show: false},//去除网格线
                axisLine: {
                    lineStyle: {
                        type: 'solid',
                        color: '#00EAFF',//左边线的颜色
                        width:'2'//坐标线的宽度
                    }
                },
                // axisLabel: {
                //     textStyle: {
                //         color: '#90D1F2',//坐标值得具体的颜色
    
                //     }
                    
                // }
                axisLabel:{
                  interval:0,
                //   rotate:45,
                  margin:2,
                  textStyle:{
                      color:"#90D1F2"
                  }
              },
            },
            grid :{ 
                borderWidth :'0px' 
            },
            yAxis: {
                type: 'value',
                // show : false,
                axisLine: {   
                    lineStyle: {
                        type: 'solid',
                        color:'#00EAFF',
                        width:'0'
                    }
                },
                axisLabel: {
                    textStyle: {
                        color: '#90D1F2'
                    }
                },
                splitLine:{                 //---grid 区域中的分隔线
                    show:true,                  //---是否显示，'category'类目轴不显示，此时我的y轴为类目轴，splitLine属性是有意义的
                    lineStyle:{
                        color:'#00EAFF',
                        width:1,
                        // type:'dashed',          //---类型
                    },
                },
                
            },
            series: [{
                data:[145,133,120,50,100,120,200],
                type: 'bar',
                itemStyle:{
                    normal:{
                        color: function(params) {
                            var colorList = ['#419afe','#ed95e3 ','#366afb','#6975fd','#6073de','#1343ce','#2312ad']; 
                            return colorList[params.dataIndex] 
                        }
                    }
                },
                barWidth : 40,//柱图宽度
                
            }]
        };
            myChart.setOption(option1);
    //     }
    // })
  
      

}

