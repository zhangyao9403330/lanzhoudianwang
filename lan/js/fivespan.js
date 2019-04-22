/**
 * Created by 30947 on 2018/7/18.
 */
// var baseUrl = "http://172.16.15.46:8080/";
wk_infoPath = "rest/spanGovern/secondMenu" //五跨建设概况
// wurenji="http://172.16.15.46:8080/planeInfo" 
$(function () {
    wk_build();
    earlywarning();
    replacement();
    retrofitting();
    Insulator();
    Metal();
    year_wk();
    type_wk();
    Landinstrument(); //故障寻地仪
    Adss(); //ADSS光缆改造
    Screwfastening(); //放松螺丝加装或紧固
    Helectricity(); //高压电危险警言牌安装
    Amonitor(); //视频监控安装
    Biography(); //图传设备安装模

    $(".nav_change_box span").click(function () {
        var index = $(this).index();
        $(".big_tbox").eq(index).addClass("active").siblings().removeClass("active");
    })
})

//五跨建设概况
function wk_build() {
    var myChart = echarts.init($("#wk_build")[0]);
    $.ajax({
        url: this.baseUrl + this.wk_infoPath,
        type: "get",
        success: function (res) {
            console.log(res);
            option = {
                title: {
                    text: '单位：个',
                    textStyle: { //---主标题内容样式    
                        color: '#0FD5E7',
                        fontSize: '16'
                    },
                    padding: [0, 40, 0, 400] //---标题位置,因为图形是是放在一个dom中,因此用padding属性来定位
                },
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
                xAxis: {
                    type: 'category',
                    data: ['计划安装数', '已完成', '储备数量'],
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
                    type: 'value',
                    axisLine: {
                        symbol: ['none', 'arrow'], //---是否显示轴线箭头
                        symbolSize: [8, 8], //---箭头大小
                        symbolOffset: [0, 7], //---箭头位置
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
                    },
                    splitLine: { //---grid 区域中的分隔线
                        show: false, //---是否显示，'category'类目轴不显示，此时我的y轴为类目轴，splitLine属性是有意义的
                        lineStyle: {
                            color: '#00EAFF',
                            width: 1,
                            // type:'dashed',          //---类型
                        },
                    },

                },
                series: [{
                    data: [1, 2, 3],
                    type: 'bar',
                    itemStyle: {
                        normal: {
                            color: "#68E6F9"
                        }
                    },
                    barWidth: 40, //柱图宽度
                }]
            };
            myChart.setOption(option)
        }
    })



}

//预警装置建设概况
function earlywarning() {
    var myChart = echarts.init($("#earlywarning")[0]);

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
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['Mon', 'Tue', 'Wed'],
            axisLabel: {
                textStyle: {
                    color: '#90D1F2', //坐标值得具体的颜色

                }
            }
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                textStyle: {
                    color: '#90D1F2', //坐标值得具体的颜色

                }
            },
            splitLine: { //---grid 区域中的分隔线
                show: false, //---是否显示，'category'类目轴不显示，此时我的y轴为类目轴，splitLine属性是有意义的
                lineStyle: {
                    color: '#00EAFF',
                    width: 1,
                    // type:'dashed',          //---类型
                },
            },
        },
        series: [{
            data: [820, 932, 901],
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
    };

    myChart.setOption(option)
}

//非独立耐张段换塔
function replacement() {
    var myChart = echarts.init($("#replacement")[0]);
    $.ajax({
        url: this.baseUrl + this.wk_infoPath,
        type: "get",
        success: function (res) {
            // console.log(res.dlnzd);
            option = {
                backgroundColor: 'transparent',
                tooltip: {
                    trigger: 'item',
                    formatter: "{a}{b} {c}<br/>({d}%)",
                    textStyle: {
                        color: 'rgba(255, 255, 255, 0.85)',
                        fontSize: '20'
                    }
                },
                legend: {
                    orient: 'vertical',
                    icon: "rect ",
                    x: "300",
                    y: "40",
                    textStyle: {
                        color: '#90D1F2',
                        fontSize: '18'
                    },
                    data: [res.dlnzd[0].NAME, res.dlnzd[1].NAME, res.dlnzd[2].NAME]
                },
                series: [{
                    name: '',
                    type: 'pie',
                    radius: '50%',
                    center: ['30%', '50%'],

                    data: [{
                            value: res.dlnzd[0].VALUE,
                            name: res.dlnzd[0].NAME,
                            itemStyle: {
                                color: '#53C7FF'
                            }
                        },
                        {
                            value: res.dlnzd[1].VALUE,
                            name: res.dlnzd[1].NAME,
                            itemStyle: {
                                color: '#ED95E3'
                            }
                        },
                        {
                            value: res.dlnzd[2].VALUE,
                            name: res.dlnzd[2].NAME,
                            itemStyle: {
                                color: '#6876FF'
                            }
                        },

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

//加装附引流建设概况
function retrofitting() {
    var myChart = echarts.init($("#retrofitting")[0]);
    $.ajax({
        url: this.baseUrl + this.wk_infoPath,
        type: "get",
        success: function (res) {
            // console.log(res.fyl);
            option = {
                backgroundColor: 'transparent',
                tooltip: {
                    trigger: 'item',
                    formatter: "{a}{b} {c}<br/>({d}%)",
                    textStyle: {
                        color: 'rgba(255, 255, 255, 0.85)',
                        fontSize: '20'
                    }
                },
                legend: {
                    orient: 'vertical',
                    icon: "rect ",
                    x: "300",
                    y: "40",
                    textStyle: {
                        color: '#90D1F2',
                        fontSize: '18'
                    },
                    data: [res.fyl[0].NAME, res.fyl[1].NAME, res.fyl[2].NAME]
                },
                series: [{
                    name: '',
                    type: 'pie',
                    radius: '50%',
                    center: ['30%', '50%'],

                    data: [{
                            value: res.fyl[0].VALUE,
                            name: res.fyl[0].NAME,
                            itemStyle: {
                                color: '#53C7FF'
                            }
                        },
                        {
                            value: res.fyl[1].VALUE,
                            name: res.fyl[1].NAME,
                            itemStyle: {
                                color: '#ED95E3'
                            }
                        },
                        {
                            value: res.fyl[2].VALUE,
                            name: res.fyl[2].NAME,
                            itemStyle: {
                                color: '#6876FF'
                            }
                        },

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

//合成绝缘子单串改双串
function Insulator() {
    var myChart = echarts.init($("#Insulator")[0]);
    $.ajax({
        url: this.baseUrl + this.wk_infoPath,
        type: "get",
        success: function (res) {
            // console.log(res.scsg);
            option = {
                title: {
                    text: '单位：个',
                    textStyle: { //---主标题内容样式    
                        color: '#0FD5E7',
                        fontSize: '16'
                    },
                    padding: [0, 40, 0, 400] //---标题位置,因为图形是是放在一个dom中,因此用padding属性来定位
                },
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
                xAxis: {
                    type: 'category',
                    data: [res.scsg[0].NAME, res.scsg[1].NAME, res.scsg[2].NAME],
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
                    type: 'value',
                    axisLine: {
                        symbol: ['none', 'arrow'], //---是否显示轴线箭头
                        symbolSize: [8, 8], //---箭头大小
                        symbolOffset: [0, 7], //---箭头位置 
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
                    },
                    splitLine: { //---grid 区域中的分隔线
                        show: false, //---是否显示，'category'类目轴不显示，此时我的y轴为类目轴，splitLine属性是有意义的
                        lineStyle: {
                            color: '#00EAFF',
                            width: 1,
                            // type:'dashed',          //---类型
                        },
                    },

                },
                series: [{
                    data: [res.scsg[0].VALUE, res.scsg[1].VALUE, res.scsg[2].VALUE],
                    type: 'bar',
                    itemStyle: {
                        normal: {
                            color: "#53C7FF"
                        }
                    },
                    barWidth: 40, //柱图宽度
                }]
            };

            myChart.setOption(option)
        }
    })

}

//金属探伤建设概况
function Metal() {
    var myChart = echarts.init($("#Metal")[0]);
    $.ajax({
        url: this.baseUrl + this.wk_infoPath,
        type: "get",
        success: function (res) {
            console.log(res.jsts)
            option = {
                title: {
                    text: '单位：个',
                    textStyle: { //---主标题内容样式    
                        color: '#0FD5E7',
                        fontSize: '16'
                    },
                    padding: [0, 40, 0, 400] //---标题位置,因为图形是是放在一个dom中,因此用padding属性来定位
                },
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
                xAxis: {
                    type: 'category',
                    data: [res.jsts[0].NAME, res.jsts[1].NAME, res.jsts[2].NAME],
                    splitLine: {
                        show: false
                    }, //去除网格线
                    axisLine: {
                        symbol: ['none', 'arrow'], //---是否显示轴线箭头
                        symbolSize: [8, 8], //---箭头大小
                        symbolOffset: [0, 7], //---箭头位置
                        lineStyle: {
                            type: 'solid',
                            color: '#00EAFF',
                            width: '2'
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
                    type: 'value',
                    axisLine: {
                        symbol: ['none', 'arrow'], //---是否显示轴线箭头
                        symbolSize: [8, 8], //---箭头大小
                        symbolOffset: [0, 7], //---箭头位置
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
                    },
                    splitLine: { //---grid 区域中的分隔线
                        show: false, //---是否显示，'category'类目轴不显示，此时我的y轴为类目轴，splitLine属性是有意义的
                        lineStyle: {
                            color: '#00EAFF',
                            width: 1,
                            // type:'dashed',          //---类型
                        },
                    },

                },
                series: [{
                    data: [res.jsts[0].VALUE, res.jsts[1].VALUE, res.jsts[2].VALUE],
                    type: 'bar',
                    itemStyle: {
                        normal: {
                            color: "#5C4BFC"
                        }
                    },
                    barWidth: 40, //柱图宽度
                }]
            };

            myChart.setOption(option)
        }
    })

}

//五跨设备近四年建设状况
function year_wk() {
    var myChart = echarts.init($("#year_wk")[0]);
    $.ajax({
        url: this.baseUrl + this.wk_infoPath,
        type: "get",
        success: function (res) {
            console.log(res.zxt_jh);
            option = {
                title: {
                    text: '2019年设备建设状况',
                    textStyle: { //---主标题内容样式    
                        color: '#90D1F2',
                        fontSize: '16'
                    },
                    padding: [0, 40, 0, 900] //---标题位置,因为图形是是放在一个dom中,因此用padding属性来定位
                },
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
                    data: ['已安装', '未完成', '未储备'],
                    textStyle: {
                        color: '#90D1F2',
                        fontSize: '18'
                    },
                    x: 'center',
                    y: 'bottom',
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '10%',
                    containLabel: true
                },
                xAxis: [{
                    type: 'category',
                    boundaryGap: false,
                    data: ['2016', '2017', '2018', '2019'],
                    lineStyle: {
                        type: 'solid',
                        color: '#0AA4D6', //左边线的颜色
                        width: '2' //坐标线的宽度
                    },
                    axisLabel: {
                        textStyle: {
                            color: '#90D1F2', //坐标值得具体的颜色
                            fontSize: '14'
                        }
                    }
                }],
                yAxis: [{
                    type: 'value',
                    lineStyle: {
                        type: 'solid',
                        color: '#0AA4D6', //左边线的颜色
                        width: '2' //坐标线的宽度
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
                            width: 1,
                            // type:'dashed',          //---类型
                        },
                    },
                }],
                series: [{
                        name: '已安装',
                        type: 'line',
                        stack: '总量',
                        areaStyle: {},
                        data: res.zxt_jh,
                        symbolSize: 10, //折线点的大小
                        symbol: 'circle', //拐点样式
                        itemStyle: {
                            normal: { //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#4389BA' // 0% 处的颜色
                                    },
                                    {
                                        offset: 1,
                                        color: '#69CEFF' // 100% 处的颜色
                                    }
                                ]), //背景渐变色    
                                lineStyle: { // 系列级个性化折线样式  
                                    width: 1,
                                    type: 'solid',
                                    color: "RGBA(7, 197, 231, 1)" //折线的颜色
                                }
                            },

                        }, //线条样式
                    },
                    {
                        name: '未完成',
                        type: 'line',
                        stack: '总量',
                        areaStyle: {},
                        data: res.zxt_wc,
                        symbolSize: 10, //折线点的大小
                        symbol: 'circle', //拐点样式
                        itemStyle: {
                            normal: { //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#52bef0' // 0% 处的颜色
                                    },
                                    {
                                        offset: 1,
                                        color: '#1E246E' // 100% 处的颜色
                                    }
                                ]), //背景渐变色    
                                lineStyle: { // 系列级个性化折线样式  
                                    width: 1,
                                    type: 'solid',
                                    color: "#353FAE" //折线的颜色
                                }
                            },

                        }, //线条样式
                    },
                    {
                        name: '未储备',
                        type: 'line',
                        stack: '总量',
                        areaStyle: {},
                        data: res.zxt_cb,
                        symbolSize: 10, //折线点的大小
                        symbol: 'circle', //拐点样式
                        itemStyle: {
                            normal: { //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0.1,
                                        color: '#A94EC0' // 0% 处的颜色
                                    }, {

                                        offset: 0.5,
                                        color: '#7E3E9D' // 0% 处的颜色
                                    },
                                    {
                                        offset: 1,
                                        color: '#3F256B' // 100% 处的颜色
                                    }
                                ]), //背景渐变色    
                                lineStyle: { // 系列级个性化折线样式  
                                    width: 1,
                                    type: 'solid',
                                    color: "#AE53C7" //折线的颜色
                                }
                            },

                        }, //线条样式
                    },
                ]
            };

            myChart.setOption(option)

        }
    })

}


function type_wk() {
    var myChart = echarts.init($("#type_wk")[0]);
    $.ajax({
        url: this.baseUrl + this.wk_infoPath,
        type: "get",
        success: function (res) {
            console.log(res.bzt);
            var arr = res.bzt;
            for (var i = 0; i < arr.length; i++) {
                switch (arr[i].WAY) {
                    case "1":
                        arr[i].WAY = "独立耐张段";
                        break;
                    case "2":
                        arr[i].WAY = "双串双挂";
                        break;
                    case "3":
                        arr[i].WAY = "安装附引流";
                        break;
                    case "4":
                        arr[i].WAY = "金属探伤";
                        break;
                    case "5":
                        arr[i].WAY = "视频监控";
                        break;
                    case "6":
                        arr[i].WAY = "ADSS治理";
                        break;
                    default:
                        break;
                }
            }
            option = {
                backgroundColor: 'transparent',
                tooltip: {
                    trigger: 'item',
                    formatter: "{a}{b} {c}<br/>({d}%)",
                    textStyle: {
                        color: 'rgba(255, 255, 255, 0.85)',
                        fontSize: '22'
                    }
                },
                legend: {
                    orient: 'vertical',
                    x: "300",
                    y: "40",
                    textStyle: {
                        color: '#90D1F2',
                        fontSize: '18'
                    },
                    data: [arr[0].WAY,arr[1].WAY,arr[2].WAY,arr[3].WAY,arr[4].WAY,arr[5].WAY]
                },
                series: [{
                    name: '',
                    type: 'pie',
                    radius: '50%',
                    center: ['15%', '50%'],

                    data: [{
                            value: arr[0].VALUE,
                            name: arr[0].WAY,
                            itemStyle: {
                                color: '#53F9FF'
                            }
                        },
                        {
                            value: arr[1].VALUE,
                            name: arr[1].WAY,
                            itemStyle: {
                                color: '#5CA2FF'
                            }
                        },
                        {
                            value: arr[2].VALUE,
                            name: arr[2].WAY,
                            itemStyle: {
                                color: '#ED95E3'
                            }
                        },
                        {
                            value: arr[3].VALUE,
                            name: arr[3].WAY,
                            itemStyle: {
                                color: '#A288FE'
                            }
                        },
                        {
                            value: arr[4].VALUE,
                            name: arr[4].WAY,
                            itemStyle: {
                                color: '#53C7FF'
                            }
                        },
                        {
                            value: arr[5].VALUE,
                            name: arr[5].WAY,
                            itemStyle: {
                                color: '#FFD885'
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

function Landinstrument() {
    var myChart = echarts.init($("#Landinstrument")[0]);

    option = {
        xAxis: {
            type: 'category',
            data: ['计划安装数', '已完成', '储备数量'],
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
            data: [1, 2, 3],
            type: 'bar',
            itemStyle: {
                normal: {
                    color: "#53C7FF"
                }
            },
            barWidth: 40, //柱图宽度
        }]
    };

    myChart.setOption(option)
}

function Adss() {
    var myChart = echarts.init($("#Adss")[0]);

    option = {
        xAxis: {
            type: 'category',
            data: ['计划安装数', '已完成', '储备数量'],
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
            data: [1, 2, 3],
            type: 'bar',
            itemStyle: {
                normal: {
                    color: "#53C7FF"
                }
            },
            barWidth: 40, //柱图宽度
        }]
    };

    myChart.setOption(option)
}

function Screwfastening() {
    var myChart = echarts.init($("#Screwfastening")[0]);

    option = {
        xAxis: {
            type: 'category',
            data: ['计划安装数', '已完成', '储备数量'],
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
            data: [1, 2, 3],
            type: 'bar',
            itemStyle: {
                normal: {
                    color: "#53C7FF"
                }
            },
            barWidth: 40, //柱图宽度
        }]
    };

    myChart.setOption(option)
}

function Helectricity() {
    var myChart = echarts.init($("#Helectricity")[0]);

    option = {
        xAxis: {
            type: 'category',
            data: ['计划安装数', '已完成', '储备数量'],
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
            data: [1, 2, 3],
            type: 'bar',
            itemStyle: {
                normal: {
                    color: "#53C7FF"
                }
            },
            barWidth: 40, //柱图宽度
        }]
    };

    myChart.setOption(option)
}

function Amonitor() {
    var myChart = echarts.init($("#Amonitor")[0]);

    option = {
        xAxis: {
            type: 'category',
            data: ['计划安装数', '已完成', '储备数量'],
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
            data: [1, 2, 3],
            type: 'bar',
            itemStyle: {
                normal: {
                    color: "#53C7FF"
                }
            },
            barWidth: 40, //柱图宽度
        }]
    };

    myChart.setOption(option)
}

function Biography() {
    var myChart = echarts.init($("#Biography")[0]);

    option = {
        xAxis: {
            type: 'category',
            data: ['计划安装数', '已完成', '储备数量'],
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
            data: [1, 2, 3],
            type: 'bar',
            itemStyle: {
                normal: {
                    color: "#53C7FF"
                }
            },
            barWidth: 40, //柱图宽度
        }]
    };

    myChart.setOption(option)
}