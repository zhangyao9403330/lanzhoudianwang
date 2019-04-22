/**
 * Created by 30947 on 2018/7/18.
 */
// var baseUrl="http://172.16.15.46:8080/";
voltagelineinfo="rest/eqLine/secondMenu"// 电压等级线路分布图
// wurenji="http://172.16.15.46:8080/planeInfo" 
$(function(){
    voltage();
    bteam();
})


function voltage(){
    var myChart = echarts.init($("#voltage")[0]);
    $.ajax({
        url: this.baseUrl+this.voltagelineinfo,
        type: "get",
        success: function (res) {
            console.log(res)
           var  Vdata="";
           var  Mdata="";
            for (var i = 0; i < res.bzt.length; i++) {
                // Vdata+=`<li>${res.bzt[i].NAME}</li>` 
                // Mdata+=`<li>${res.bzt[i].VALUE}</li>` 
                Vdata+="<li>"+res.bzt[i].NAME+"</li>"; 
                Mdata+="<li>"+res.bzt[i].VALUE+"</li>";
            }
         $("#bzt_info ul:first-child").append(Vdata);
         $("#bzt_info ul:nth-child(2)").append(Mdata);

            option = {
                backgroundColor: 'transparent',
                tooltip: {
                    trigger: 'item',
                    formatter: "{b} {c}<br/>({d}%)",
                    textStyle: {
                        color: 'rgba(255, 255, 255, 0.85)',
                        fontSize: '26'
                    }
                },
                legend: {
                    orient : 'vertical',
                    x:"940",
                    y:"40",
                    textStyle: {
                        color: '#00EAFF',
                        fontSize: '16'
                    },
                    data: ['班组一','班组二','班组三','班组四']
                },
                series : [
                    {
                        name: '',
                        type: 'pie',
                        radius: ['50%', '70%'],
                        center: ['50%', '50%'],
                        avoidLabelOverlap: false,
                        data:[
                            {
                                value:res.bzt[0].VALUE,
                                name:'班组一',
                                itemStyle: {
                                    color: '#acd2f7'
                                }
                            },
                            {
                                value:res.bzt[1].VALUE,
                                name:'班组二',
                                itemStyle: {
                                    color: '#4cbbf5'
                                }
                            },
                            {
                                value:res.bzt[2].VALUE,
                                name:'班组三',
                                itemStyle: {
                                    color: '#0084f3'
                                }
                            },
                            {
                                value:res.bzt[3].VALUE,
                                name:'班组四',
                                itemStyle: {
                                    color: '#0a53fa'
                                }
                            },
                        ],
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
                     
                    }
                ]
            };
            myChart.setOption(option);
        }
    })
   
    
}


function bteam(){
    var myChart = echarts.init($("#bteam")[0]);
    $.ajax({
        url: this.baseUrl+this.voltagelineinfo,
        type: "get",
        success: function (reslut) {
            console.log(reslut.lb);
            var t_title="<tr>"+"<th>"+"班组名字"+"</th>"+"<th>"+"线路数"+"</th>"+"<th>"+"总长度"+"</th>"+"<th>"+"人员数"+"</th>"+"</tr>";
            var html="";
            var rescon="";
            for (var i = 0; i < reslut.lb.length; i++) {
                html+="<tr>"+"<td>"+reslut.lb[i].NAME+"</td>"+"<td>"+reslut.lb[i].LINECOUNT+"</td>"+"<td>"+reslut.lb[i].LINESUM+"</td>"+"<td>"+reslut.lb[i].NUM+"</td>"+"</tr>"
            }
            rescon=t_title+html;
          $("#Btable").append(rescon);

              option1 = {
                title: {                                
                    text: '路线数（个）/班组',                
                    textStyle:{                 //---主标题内容样式    
                        color:'#0FD5E7'
                    },
                    padding:[15,40,400,915]               //---标题位置,因为图形是是放在一个dom中,因此用padding属性来定位
                },
                xAxis: {
                    type: 'category',
                    data: ['班组一', '班组二', '班组三', '班组四', '班组五', '班组六', '班组七'],
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
                    data:reslut.zzt,
                    type: 'bar',
                    itemStyle:{
                        normal:{
                            color: function(params) {
                                var colorList = ['#C33531','#EFE42A','#64BD3D','#EE9201','#29AAE3', '#B74AE5','#0AAF9F']; 
                                return colorList[params.dataIndex] 
                            }
                        }
                    },
                    barWidth : 40,//柱图宽度
                    
                }]
            };
            myChart.setOption(option1);
        }
    })
  
      

}

