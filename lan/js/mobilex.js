/**
 * Created by 30947 on 2018/7/18.
 */
// var baseUrl = "http://172.16.15.46:8080/";
ydPath = "rest/task/secondMenu"
$(function () {
    task();
    bug();
    dpeople();
})

//统计分析图
function task() {
    var myChart = echarts.init($("#task")[0]);
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
                    data: [res.zzt_0[0].NAME, res.zzt_0[1].NAME, res.zzt_0[2].NAME, res.zzt_0[3].NAME, res.zzt_0[4].NAME, res.zzt_0[5].NAME, res.zzt_0[6].NAME],
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
                            width: '2' //坐标线的宽度
                        }
                    },
                    axisLabel: {
                        textStyle: {
                            color: '#90D1F2', //坐标值得具体的颜色
                            fontSize: '16',
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
                    itemStyle: {
                        normal: {
                            color: "#4B7EFC"
                        },

                    },
                    barWidth: 40, //柱图宽度
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
            myChart.setOption(option, true);




            myChart.on('click', function (params) {
                console.log(params.name)
                switch (params.name) {
                    case "班组1":
                    params.name = "001";
                        break;
                    case "班组2":
                    params.name = "002";
                        break;
                    case "班组3":
                    params.name = "003";
                        break;
                    case "班组4":
                    params.name = "004";
                        break;
                    case "班组5":
                    params.name = "005";
                        break;
                    case "班组6":
                    params.name = "006";
                        break;
                    case "班组7":
                    params.name = "007";
                        break;
                    default:
                        break;
                }
                $("#line_bottom_one").empty();
                Ban_infomation(params.name);
            })
        }
    })

    $.ajax({
        url: this.baseUrl + this.ydPath + "?bzId=001",
        type: "get",
        success: function (res) {
            console.log(res.lb);
            var str = '';
            for (var i = 0; i < res.lb.length; i++) {
        str +=" <div class='Banzu_box'>"+
        "<div class='left_yuan_box'>"+
            "<div style='width:18px;height:18px;background:rgba(26,225,232,1);border-radius:50%;margin-top:4px;'>"+"</div>"+
        "</div>"+
        "<div class='right_info_box'>"+
            "<ul>"+
                "<li>"+
                    "<span>"+res.lb[i].DAY+"</span>"+
                    "<span>"+res.lb[i].DEP_ID+"</span>"+
                    "<span>"+res.lb[i].USER_ID+"</span>"+
                "</li>"+
                "<li>"+"任务："+res.lb[i].TASK_TYPE+"</li>"+
            "</ul>"+
        "</div>"+
    "</div>"
            }
            $("#line_bottom_one").append(str);
        }
    })


}

function Ban_infomation(paraname) {
    $.ajax({
        url: this.baseUrl + this.ydPath + "?bzId=" + paraname,
        type: "get",
        success: function (res) {
            console.log(res.lb)
            var str = '';
            for (var i = 0; i < res.lb.length; i++) {
                str +=" <div class='Banzu_box'>"+
                "<div class='left_yuan_box'>"+
                    "<div style='width:18px;height:18px;background:rgba(26,225,232,1);border-radius:50%;margin-top:4px;'>"+"</div>"+
                "</div>"+
                "<div class='right_info_box'>"+
                    "<ul>"+
                        "<li>"+
                            "<span>"+res.lb[i].DAY+"</span>"+
                            "<span>"+res.lb[i].DEP_ID+"</span>"+
                            "<span>"+res.lb[i].USER_ID+"</span>"+
                        "</li>"+
                        "<li>"+"任务："+res.lb[i].TASK_TYPE+"</li>"+
                    "</ul>"+
                "</div>"+
            "</div>"

            }
            $("#line_bottom_one").append(str);
        }
    })
}

function bug() {
    var myChart = echarts.init($("#bug")[0]);
    $.ajax({
        url: this.baseUrl + this.ydPath,
        type: "get",
        success: function (res) {
            console.log(res.taskDefect)
            option = {
                backgroundColor: 'transparent',
                tooltip: {
                    trigger: 'item',
                    formatter: "{a}{b} {c}<br/>({d}%)",
                    textStyle: {
                        color: 'rgba(255, 255, 255, 0.85)',
                        fontSize: '26'
                    }
                },
                legend: {
                    orient: 'vertical',
                    x: "330",
                    y: "40",
                    textStyle: {
                        color: '#ffffff',
                        fontSize: '16'
                    },
                    data: ['班组1', '班组2', '班组3', '班组4', '班组5', '班组6', '班组7']
                },
                series: [{
                    name: '',
                    type: 'pie',
                    // radius: '50%',
                    center: ['35%', '55%'],

                    data: [{
                            value: res.taskDefect.defect[0].VALUE,
                            name: '班组1',
                            itemStyle: {
                                color: '#acd2f7'
                            }
                        },
                        {
                            value: res.taskDefect.defect[1].VALUE,
                            name: '班组2',
                            itemStyle: {
                                color: '#4cbbf5'
                            }
                        },
                        {
                            value: res.taskDefect.defect[2].VALUE,
                            name: '班组3',
                            itemStyle: {
                                color: '#0084f3'
                            }
                        },
                        {
                            value: res.taskDefect.defect[3].VALUE,
                            name: '班组4',
                            itemStyle: {
                                color: '#0a53fa'
                            }
                        },
                        {
                            value: res.taskDefect.defect[4].VALUE,
                            name: '班组5',
                            itemStyle: {
                                color: '#29AAE3'
                            }
                        },
                        {
                            value: res.taskDefect.defect[5].VALUE,
                            name: '班组6',
                            itemStyle: {
                                color: '#ab3df9'
                            }
                        },
                        {
                            value: res.taskDefect.defect[6].VALUE,
                            name: '班组7',
                            itemStyle: {
                                color: '#EFE42A'
                            }
                        }
                    ],
                    label: {
                        normal: {
                            show: false,
                        },
                        emphasis: {
                            show: true
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false,
                        },
                        emphasis: {
                            show: true
                        }
                    },
                    itemStyle: {
                        normal: {
                            labelLine: {
                                show: true,
                            },
                            label: {

                                show: true,
                                // position:'inner', //标签的位置
                                formatter: "{b} {d}%",
                                textStyle: {
                                    color: '#ffffff',
                                    fontSize: '15'
                                },
                            },

                        }
                    }
                }]
            };
            myChart.setOption(option)
        }
    })

}


function dpeople() {
    var dom = document.getElementById("dpeople");
    var myChart = echarts.init(dom);
    var app = {};
    option = null;
    app.title = '坐标轴刻度与标签对齐';

    option = {
        xAxis: {
            type: 'category',
            data: ['班组1', '班组2', '班组3', '班组4', '班组5', '班组6', '班组7'],
            splitLine: {
                show: false
            }, //去除网格线
            axisLine: {
                lineStyle: {
                    type: 'solid',
                    color: '#00EAFF', //左边线的颜色
                    width: '2' //坐标线的宽度
                }
            },
            axisLabel: {
                textStyle: {
                    color: '#90D1F2', //坐标值得具体的颜色

                }
            }
        },
        yAxis: {
            type: 'value',
            axisLine: {
                lineStyle: {
                    type: 'solid',
                    color: '#00EAFF',
                    width: '2'
                }
            },
            axisLabel: {
                textStyle: {
                    color: '#90D1F2'
                }
            }

        },
        series: [{
            data: [20, 200, 150, 80, 70, 110, 130],
            type: 'bar',
            itemStyle: {
                normal: {
                    color: '#00EAFF'
                }
            },
            barWidth: 40, //柱图宽度
        }]
    };

    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    }


}