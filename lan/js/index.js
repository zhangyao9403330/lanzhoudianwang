/**
 * Created by 30947 on 2018/7/18.
 */
// var baseUrl="http://172.16.15.46:8080/";
// var baseUrl="http://localhost:8080/";
    wukuaPath="rest/spanGovern/mainMenu";
    ydPath="rest/task/secondMenu";
    lf_infoPath = "rest/prevent/secondMenu" 
$(function(){
    newriqi()
    char1();
    char2();
    char3();
    char4();
    char5();
    // char6();
    // char7();
    char8();
    char9();
    // char_five();
    // char_five1();
    
})

function char1(){   //故障统计
    var myChart = echarts.init($("#char1")[0]);
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
            x : '360',
            y : '10', // 'center' | 'bottom' | {number}
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
                center: ['35%', '45%'],
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
}

function char2(){
    var myChart = echarts.init($("#char2")[0]);
              option = {
                title: {                                
                    text: '单位：架',                
                    textStyle:{                 //---主标题内容样式    
                        color:'#0FD5E7',
                        fontSize:16
                    },
                    padding:[0,40,400,440]               //---标题位置,因为图形是是放在一个dom中,因此用padding属性来定位
                },
                xAxis: {
                    type: 'category',
                    data: ['大型无人机直升机', '中型无人机直升机', '固定翼无人机', '小型多旋翼无人机'],
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
                    data:[145,133,120,50],
                    type: 'bar',
                    itemStyle:{
                        normal:{
                            color: function(params) {
                                var colorList = ['#419afe','#ed95e3 ','#366afb','#6975fd']; 
                                return colorList[params.dataIndex] 
                            }
                        }
                    },
                    barWidth : 40,//柱图宽度
                    
                }]
            };
            myChart.setOption(option);
        
    
}

function char3(){
    var myChart = echarts.init($("#char3")[0]);
    $.ajax({
      url: this.baseUrl + this.ydPath,
      type: "get",
      success: function (res) {
          console.log(res);
          for (var i = 0; i < res.zzt_0.length; i++) {
              switch (res.zzt_0[i].NAME) {
                  case "001":
                      res.zzt_0[i].NAME = "班组1";
                      break;
                  case "002":
                      res.zzt_0[i].NAME = "班组2";
                      break;
                  case "003":
                      res.zzt_0[i].NAME = "班组3";
                      break;
                  case "004":
                      res.zzt_0[i].NAME = "班组4";
                      break;
                  case "005":
                      res.zzt_0[i].NAME = "班组5";
                      break;
                  case "006":
                      res.zzt_0[i].NAME = "班组6";
                      break;
                  case "007":
                      res.zzt_0[i].NAME = "班组7";
                      break;
                  default:
                      break;
              }

          }
          option = {
              tooltip: {
                  show: true, //---是否显示提示框,默认为true
                  trigger: 'item', //---数据项图形触发
                  axisPointer: { //---指示样式
                      type: 'shadow',
                      axis: 'auto',

                  },
                  padding: 5,
                  textStyle: { //---提示框内容样式
                      color: "#fff",
                  },
              },
              legend: {
                  x: '830',
                  y: '10',
                  data: ['已完成', '未完成'],
                  textStyle: {
                      color: '#90D1F2',
                      fontSize: '18'
                  },
              },
              xAxis: {
                  data: [res.zzt_0[0].NAME, res.zzt_0[1].NAME, res.zzt_0[2].NAME, res.zzt_0[3].NAME, res.zzt_0[4].NAME, res.zzt_0[5].NAME, res.zzt_0[6].NAME,res.zzt_0[7].NAME],
                  splitLine: {
                      show: false
                  }, //去除网格线
                  axisLine: {
                      symbol: ['none', 'arrow'], //---是否显示轴线箭头
                      symbolSize: [8, 8], //---箭头大小
                      symbolOffset: [0, 7], //---箭头位置
                      lineStyle: {
                          type: 'solid',
                          color: '#00EAFF', //左边线的颜色
                          width: '1' //坐标线的宽度
                      }
                  },
                  axisLabel: {
                    rotate:"45",  
                      textStyle: {
                          color: '#90D1F2', //坐标值得具体的颜色
                          fontSize: '10',
                          padding: [-5, 0, 0, -5], //---坐标轴名称相对位置

                      }
                  }
              },
              yAxis: {
                  axisLine: {
                      symbol: ['none', 'arrow'], //---是否显示轴线箭头
                      symbolSize: [8, 8], //---箭头大小
                      symbolOffset: [0, 7], //---箭头位置
                      lineStyle: {
                          type: 'solid',
                          color: '#00EAFF',
                          width: '1'
                      }
                  },
                  axisLabel: {
                      textStyle: {
                          color: '#90D1F2'
                      }
                  },
                  splitLine: { //---grid 区域中的分隔线
                      show: false, //---是否显示，'category'类目轴不显示，此时我的y轴为类目轴，splitLine属性是有意义的
                      lineStyle: {
                          color: '#00EAFF',
                          // width:1,
                          // type:'dashed',          //---类型
                      },
                  },
              },
              series: [{
                  name: '已完成',
                  type: 'bar',
                  stack: '使用情况',
                  data: [res.zzt_0[0].VALUE, res.zzt_0[1].VALUE, res.zzt_0[2].VALUE, res.zzt_0[3].VALUE, res.zzt_0[4].VALUE, res.zzt_0[5].VALUE, res.zzt_0[6].VALUE],
                  itemStyle:{
                    normal:{
                        color: function(params) {
                            var colorList = ['#53c8fe','#419afe','#ed95e3','#366afb','#6975fd','#a435d1','#c32e12']; 
                            return colorList[params.dataIndex] 
                        }
                    }
                },
                  barWidth: 20, //柱图宽度
              }, {
                  name: '未完成',
                  type: 'bar',
                  stack: '使用情况',
                  data: res.zzt_1,
                  itemStyle: {
                      normal: {
                          color: "#68E6F9"
                      },

                  },
                  barWidth: 40, //柱图宽度
              }]
          };
          myChart.setOption(option);
      }

      })




}

//统计分析图
function char4() {

    var myChart = echarts.init($("#char4")[0]);
    $.ajax({
        url:this.baseUrl+this.wukuaPath,
        type: "get",
        success: function (res) {
            console.log(res);
            myChart.setOption({
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
                    x : '360',
                    y : '10', // 'center' | 'bottom' | {number}
                    textStyle : {
                        color : '#90D1F2',
                        fontSize:'14'
                    },
                    data:[res[0].NAME,res[1].NAME,res[2].NAME,res[3].NAME,res[4].NAME]
                },
        
                calculable : false,
                series : [
                    {
                        name:'设备类型',
                        type:'pie',
                        // radius : ['50%', '70%'],
                        center: ['35%', '45%'],
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
                            "name": res[0].NAME,
                            "value": res[0].VALUE,
                            itemStyle: {
                                color: '#53c8fe'
                            }
                        },
                        {
                            "name":res[1].NAME,
                            "value":res[1].VALUE,
                            itemStyle: {
                                color: '#419afe'
                            }
                        },
                        {
                            "name": res[2].NAME,
                            "value": res[2].VALUE,
                            itemStyle: {
                                color: '#ed95e3'
                            }
                        },
                        {
                            "name": res[3].NAME,
                            "value": res[3].VALUE,
                            itemStyle: {
                                color: '#366afb'
                            }
                        },
                        {
                            "name": res[4].NAME,
                            "value": res[4].VALUE,
                            itemStyle: {
                                color: '#6975fd'
                            }
                        }
                    ]
                        
                    }
                ]
            });


        }
    })
 


}



function char5() {

    var myChart = echarts.init($("#char5")[0]);
    $.ajax({
        url: this.baseUrl + this.lf_infoPath,
        type: "get",
        success: function (res) {
            console.log(res.zzt);
            option = {
                title: {                                
                    text: '设备数量/防害项目',                
                    textStyle:{                 //---主标题内容样式    
                        color:'#90D1F2'
                    },
                    padding:[15,40,400,915]               //---标题位置,因为图形是是放在一个dom中,因此用padding属性来定位
                },
                xAxis: {
                    type: 'category',
                    data: [res.zzt[0].NAME,res.zzt[1].NAME,res.zzt[2].NAME,res.zzt[3].NAME,res.zzt[4].NAME,res.zzt[5].NAME],
                    splitLine:{show: false},//去除网格线
                    axisLine: {
                        lineStyle: {
                            type: 'solid',
                            color: '#00EAFF',//左边线的颜色
                            width:'2'//坐标线的宽度
                        }
                    },
                    axisLabel: {
                        textStyle: {
                            color: '#90D1F2',//坐标值得具体的颜色
                            fontSize:'16'
                        }
                    }
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
                    data:[res.zzt[0].VALUE,res.zzt[1].VALUE,res.zzt[2].VALUE,res.zzt[3].VALUE,res.zzt[4].VALUE,res.zzt[5].VALUE],
                    type: 'bar',
                    itemStyle:{
                        normal:{
                            color: function(params) {
                                var colorList = ['#419afe','#ed95e3','#  366afb','#6975fd','#53c8fe', '#B74AE5']; 
                                return colorList[params.dataIndex] 
                            }
                        }
                    },
                    barWidth : 40,//柱图宽度
                    
                }]
            };

            myChart.setOption(option)
        }
    })
   
}
function char6() {

    var myChart = echarts.init($("#char9")[0]);

    myChart.setOption({
        tooltip : {
            show:false,
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient : 'vertical',
            x : 'right',
            // y : 'bottom', // 'center' | 'bottom' | {number}
            textStyle : {
                color : '#ffffff',

            },
            data:['可视化巡检视频','防外点破监控视频','三跨点监控视频']
        },
        // color:["#EE2C2C","#9AFF9A","#BF3EFF"],
        calculable : false,
        series : [
            {
                name:'设备类型',
                type:'pie',
                radius : ['30%', '60%'],
                itemStyle : {
                    normal : {
                        label : {
                            show : true,
                            formatter:'{b} {d}%',
                        },
                        labelLine : {
                            show : true
                        }
                    },
                    emphasis : {
                        label : {
                            show : true,
                            position : 'center',
                            textStyle : {
                                fontSize : '20',
                                fontWeight : 'bold'
                            }
                        }
                    },

                },
               
                data:[{
                    "name": "可视化巡检视频",
                    "value": 10
                },
                {
                    "name": "防外点破监控视频",
                    "value": 5
                },
                {
                    "name": "三跨点监控视频",
                    "value": 3
                }
            ]
                
            }
        ]
    });


}
function char7() {

    var myChart = echarts.init($("#char9")[0]);

    option = {
       
        tooltip : {
            trigger: 'axis'
        },
        legend: {
            x : 'right',
            data:['警告数'],
            textStyle: {
                //设置颜色
                color: '#ffffff'
            }
        },
        toolbox: {
            show : false,
            feature : {
                mark : {show: true},
                dataView : {show: true, readOnly: false},
                restore : {show: true},
                saveAsImage : {show: true}
            }
        },
        calculable : true,
        polar : [
            {
                indicator : [
                    {text : '可视化巡检视频', max  : 100},
                    {text : '防外点破监控视频', max  : 100},
                    {text : '三跨点监控视频', max  : 100}
                ],
                radius :80,
                name:{
                    show: true,
                    formatter: null,
                    textStyle: {
                        //设置颜色
                        color: '#ffffff'
                    }
                },
                center : ['50%', 140],
            }
        ],
        series : [
            {
                name: '完全实况球员数据',
                type: 'radar',
                itemStyle: {
                    normal: {
                        areaStyle: {
                            type: 'default'
                        }
                    }
                },
                data : [
                    {
                        value : [97, 42, 88, 94, 90, 86],
                        name : '警告数'
                    },
                ]
            },
        ],
        radar:{
          splitArea:{
              show:false,
              areaStyle:{
                  color:"rgba(131,141,158,1)"
              }
          } ,
          name:{
              textStyle:{
                  color:'#ffffff'
              }
          } 
        }
    };
    myChart.setOption(option)
}
function char8() {

    var myChart = echarts.init($("#char8")[0]);
    option = {
        tooltip: {
            show: true, //---是否显示提示框,默认为true
            trigger: 'item', //---数据项图形触发
            axisPointer: { //---指示样式
                type: 'shadow',
                axis: 'auto',

            },
            padding: 5,
            textStyle: { //---提示框内容样式
                color: "#fff",
            },
        },
        title: {                                
            text: '监测异常数/个',                
            textStyle:{                 //---主标题内容样式    
                color:'#0FD5E7',
                fontSize:16
            },
            padding:[0,40,100,400]               //---标题位置,因为图形是是放在一个dom中,因此用padding属性来定位
        },
        xAxis: {
            data: ['班组1', '班组2', '班组3', '班组4', '班组5', '班组6', '班组7'],
            splitLine: {
                show: false
            }, //去除网格线
            axisLine: {
                symbol: ['none', 'arrow'], //---是否显示轴线箭头
                symbolSize: [8, 8], //---箭头大小
                symbolOffset: [0, 7], //---箭头位置
                lineStyle: {
                    type: 'solid',
                    color: '#00EAFF', //左边线的颜色
                    width: '1' //坐标线的宽度
                }
            },
            axisLabel: {
              rotate:"45",  
                textStyle: {
                    color: '#90D1F2', //坐标值得具体的颜色
                    fontSize: '10',
                    padding: [-5, 0, 0, -5], //---坐标轴名称相对位置

                }
            }
        },
        yAxis: {
            axisLine: {
                symbol: ['none', 'arrow'], //---是否显示轴线箭头
                symbolSize: [8, 8], //---箭头大小
                symbolOffset: [0, 7], //---箭头位置
                lineStyle: {
                    type: 'solid',
                    color: '#00EAFF',
                    width: '1'
                }
            },
            axisLabel: {
                textStyle: {
                    color: '#90D1F2'
                }
            },
            splitLine: { //---grid 区域中的分隔线
                show: false, //---是否显示，'category'类目轴不显示，此时我的y轴为类目轴，splitLine属性是有意义的
                lineStyle: {
                    color: '#00EAFF',
                    // width:1,
                    // type:'dashed',          //---类型
                },
            },
        },
        series: [{
            name: '已完成',
            symbolSize:8,
            data: [110, 170, 140,120,115,180,200],
            type: 'line',
            areaStyle: {},
            itemStyle: {
                normal: { //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#fff' // 0% 处的颜色
                    }, {
                        offset: 0.4,
                        color: '#e4f2ff' // 100% 处的颜色
                    }, {
                        offset: 1,
                        color: '#81befd' // 100% 处的颜色
                    }]), //背景渐变色    
                    lineStyle: { // 系列级个性化折线样式  
                        width: 1,
                        type: 'solid',
                        color: "#0180ff" //折线的颜色
                    }
                },

            }, //线条样式

        }]
    }; //防污闪
    myChart.setOption(option);
}
function char9() {

    var myChart = echarts.init($("#char9")[0]);
    option = {
    
        tooltip : {
            trigger: 'axis'
        },
        legend: {
            x : 'right',
            color:"blue",
            data:['检测异常数/个']
        },
        polar : [
            {
                indicator : [
                    {text : '人工', max  : 100},
                    {text : '视频', max  : 100},
                    {text : '无人机', max  : 100},
                ],
                radius :70
            }
        ],
        series : [
            {
                name: '完全实况球员数据',
                type: 'radar',
                itemStyle: {
                    normal: {
                        areaStyle: {
                            type: 'default'
                        }
                    }
                },
                data : [
                    {
                        value : [97, 42, 88],
                        name : '检测异常数/个',
                        itemStyle: {
                            normal: {
                                color: 'rgba(105,206,255,.5)',
                                lineStyle: {
                                    color: 'rgba(105,206,255,.5)',
                                },
                            },
                        },
                    },
                ]
            }
        ]
    };
    myChart.setOption(option);
}
function newriqi(){
        var date = new Date();
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var strDate = date.getDate();
        if (month >= 1 && month <= 9) {
            month = "0" + month;
        }
        if (strDate >= 0 && strDate <= 9) {
            strDate = "0" + strDate;
        }
        var currentdate = year +"年" + month + "月" + strDate+"日";
        $("#riqi").text(currentdate)
    
}