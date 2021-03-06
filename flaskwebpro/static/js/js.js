﻿
$(function () {
echarts_1();
echarts_2();
echarts_4();
echarts_31();
//echarts_32();
//echarts_33();
echarts_5();
echarts_6();
//echarts6();
// AJAX
function echarts_1() {
        // AJAX加载数据：异步的Javascript and xml
        xData = []
        yData = []
        $.ajax({
            type: 'post',                            // post请求
            url: '/getgenrecounts',
            dataType: 'json',
            data:{},
            error: function(xhr, err){
                alert('请求失败，请检查，' + err + '!')
            },
            success: function(data) {   // data是javascript的json格式
                for(i=0;i<data.length;i++){
                    xData[i]=data[i].genres
                    yData[i]=Number.parseInt(data[i].num)
                }

                         // 基于准备好的dom，初始化echarts实例
                var myChart = echarts.init(document.getElementById('echart1'));

                option = {
                  //  backgroundColor: '#00265f',
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'shadow'
                        }
                    },
                    grid: {
                        left: '0%',
                        top:'10px',
                        right: '0%',
                        bottom: '4%',
                       containLabel: true
                    },
                    xAxis: [{
                        type: 'category',
                            data: xData,
                        axisLine: {
                            show: true,
                         lineStyle: {
                                color: "rgba(255,255,255,.1)",
                                width: 1,
                                type: "solid"
                            },
                        },

                        axisTick: {
                            show: false,
                        },
                        axisLabel:  {
                                interval: 0,
                               // rotate:50,
                                show: false,
                                splitNumber: 15,
                                textStyle: {
                                    color: "rgba(255,255,255,.6)",
                                    fontSize: '12',
                                },
                            },
                    }],
                    yAxis: [{
                        type: 'value',
                        axisLabel: {
                           //formatter: '{value} %'
                            show:true,
                             textStyle: {
                                    color: "rgba(255,255,255,.6)",
                                    fontSize: '12',
                                },
                        },
                        axisTick: {
                            show: false,
                        },
                        axisLine: {
                            show: true,
                            lineStyle: {
                                color: "rgba(255,255,255,.1	)",
                                width: 1,
                                type: "solid"
                            },
                        },
                        splitLine: {
                            lineStyle: {
                               color: "rgba(255,255,255,.1)",
                            }
                        }
                    }],
                    series: [
                        {
                        type: 'bar',
                        data: yData,
                        barWidth:'35%', //柱子宽度
                       // barGap: 1, //柱子之间间距
                        itemStyle: {
                            normal: {
                                color:'#2f89cf',
                                opacity: 1,
                                barBorderRadius: 5,
                            }
                        }
                    }

                    ]
                };

                // 使用刚指定的配置项和数据显示图表。
                myChart.setOption(option);
                window.addEventListener("resize",function(){
                    myChart.resize();
                });
            }
        });
    }
function echarts_2() {
    x2Data = []
    y2Data = []
    $.ajax({
        type: 'post',                            // post请求
        url: '/getratecounts',
        dataType: 'json',
        data: {},
        error: function (xhr, err) {
            alert('请求失败，请检查，' + err + '!')
        },
        success: function (data) {   // data是javascript的json格式
            for (i = 0; i < data.length; i++) {
                x2Data[i] = data[i].rating;
                y2Data[i] = Number.parseInt(data[i].s)
            }
            // 基于准备好的dom，初始化echarts实例
            var myChart = echarts.init(document.getElementById('echart2'));

            option = {
                //  backgroundColor: '#00265f',
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {type: 'shadow'}
                },
                grid: {
                    left: '0%',
                    top: '10px',
                    right: '0%',
                    bottom: '4%',
                    containLabel: true
                },
                xAxis: [{
                    type: 'category',
                    data: x2Data,  //['浙江', '上海', '江苏', '广东', '北京', '深圳', '安徽'],
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: "rgba(255,255,255,.1)",
                            width: 1,
                            type: "solid"
                        },
                    },

                    axisTick: {
                        show: false,
                    },
                    axisLabel: {
                        interval: 0,
                        // rotate:50,
                        show: true,
                        splitNumber: 15,
                        textStyle: {
                            color: "rgba(255,255,255,.6)",
                            fontSize: '12',
                        },
                    },
                }],
                yAxis: [{
                    type: 'value',
                    axisLabel: {
                        //formatter: '{value} %'
                        show: true,
                        textStyle: {
                            color: "rgba(255,255,255,.6)",
                            fontSize: '12',
                        },
                    },
                    axisTick: {
                        show: false,
                    },
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: "rgba(255,255,255,.1	)",
                            width: 1,
                            type: "solid"
                        },
                    },
                    splitLine: {
                        lineStyle: {
                            color: "rgba(255,255,255,.1)",
                        }
                    }
                }],
                series: [
                    {

                        type: 'bar',
                        data: y2Data,  //[1500, 1200, 600, 200, 300, 300, 900],
                        barWidth: '35%', //柱子宽度
                        // barGap: 1, //柱子之间间距
                        itemStyle: {
                            normal: {
                                color: '#27d08a',
                                opacity: 1,
                                barBorderRadius: 5,
                            }
                        }
                    }

                ]
            };

            // 使用刚指定的配置项和数据显示图表。
            myChart.setOption(option);
            window.addEventListener("resize", function () {
                myChart.resize();
            });
        }
    });
}
function echarts_5() {
    x5Data = []
    y5Data = []
    $.ajax({
        type: 'post',                            // post请求
        url: '/getmetascorecounts',
        dataType: 'json',
        data: {},
        error: function (xhr, err) {
            alert('请求失败，请检查，' + err + '!')
        },
        success: function (data) {   // data是javascript的json格式
            for (i = 0; i < data.length; i++) {
                x5Data[i] = data[i].metascore;
                y5Data[i] = Number.parseInt(data[i].s)
            }
            // 基于准备好的dom，初始化echarts实例
            var myChart = echarts.init(document.getElementById('echart5'));

            option = {
                //  backgroundColor: '#00265f',
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow'
                    }
                },

                grid: {
                    left: '0%',
                    top: '10px',
                    right: '0%',
                    bottom: '2%',
                    containLabel: true
                },
                xAxis: [{
                    type: 'category',
                    data: x5Data, //['浙江', '上海', '江苏', '广东', '北京', '深圳', '安徽', '四川'],
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: "rgba(255,255,255,.1)",
                            width: 1,
                            type: "solid"
                        },
                    },

                    axisTick: {
                        show: false,
                    },
                    axisLabel: {
                        interval: 0,
                        // rotate:50,
                        show: true,
                        splitNumber: 15,
                        textStyle: {
                            color: "rgba(255,255,255,.6)",
                            fontSize: '12',
                        },
                    },
                }],
                yAxis: [{
                    type: 'value',
                    axisLabel: {
                        //formatter: '{value} %'
                        show: true,
                        textStyle: {
                            color: "rgba(255,255,255,.6)",
                            fontSize: '12',
                        },
                    },
                    axisTick: {
                        show: false,
                    },
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: "rgba(255,255,255,.1	)",
                            width: 1,
                            type: "solid"
                        },
                    },
                    splitLine: {
                        lineStyle: {
                            color: "rgba(255,255,255,.1)",
                        }
                    }
                }],
                series: [{
                    type: 'bar',
                    data: y5Data,  //[2, 3, 3, 9, 15, 12, 6, 4, 6, 7, 4, 10],
                    barWidth: '35%', //柱子宽度
                    // barGap: 1, //柱子之间间距
                    itemStyle: {
                        normal: {
                            color: '#2f89cf',
                            opacity: 1,
                            barBorderRadius: 5,
                        }
                    }
                }
                ]
            };

            // 使用刚指定的配置项和数据显示图表。
            myChart.setOption(option);
            window.addEventListener("resize", function () {
                myChart.resize();
            });
        }
    });
}
	
function echarts_4() {
    // AJAX加载数据：异步的Javascript and xml
    Data={}
    $.ajax({
        type: 'post',                            // post请求
        url: '/getyearcounts',
        dataType: 'json',
        data: {},
        error: function (xhr, err) {
            alert('请求失败，请检查，' + err + '!')
        },
        success: function (data) {   // data是javascript的json格式
            console.log(data)
            // 基于准备好的dom，初始化echarts实例
            var myChart = echarts.init(document.getElementById('echart4'));

            option = {
                title: {
                    text: '不同年份对比',
                    left: 'center'
                },
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b} : {c} ({d}%)'
                },
                legend: {
                    orient: 'vertical',
                    left: 'left',
                    data:'' ,
                },
                series: [
                    {
                        name: '年份来源',
                        type: 'pie',
                        radius: '55%',
                        center: ['50%', '60%'],
                        data:  data,
                        emphasis: {
                            itemStyle: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(ee, ee, ee, 0.5)'
                            }
                        }
                    }
                ]
            };


            // 使用刚指定的配置项和数据显示图表。
            myChart.setOption(option);
            window.addEventListener("resize", function () {
                myChart.resize();
            });
        }
    });
}
function echarts_6() {
        // AJAX加载数据：异步的Javascript and xml
        x6Data = []
        y6Data = []
        $.ajax({
            type: 'post',                            // post请求
            url: '/gettop5gross',
            dataType: 'json',
            data:{},
            error: function(xhr, err){
                alert('请求失败，请检查，' + err + '!')
            },
            success: function(data) {   // data是javascript的json格式
                for(i=0;i<data.length;i++){
                    x6Data[i]=data[i].title;
                    y6Data[i]=Number.parseInt(data[i].cumulative_worldwide_gross);
                }

                         // 基于准备好的dom，初始化echarts实例
                var myChart = echarts.init(document.getElementById('echart6'));

                option = {
                  //  backgroundColor: '#00265f',
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'shadow'
                        }
                    },
                    grid: {
                        left: '0%',
                        top:'10px',
                        right: '0%',
                        bottom: '4%',
                       containLabel: true
                    },
                    xAxis: [{
                        type: 'category',
                            data: x6Data,
                        axisLine: {
                            show: true,
                         lineStyle: {
                                color: "rgba(255,255,255,.1)",
                                width: 1,
                                type: "solid"
                            },
                        },

                        axisTick: {
                            show: false,
                        },
                        axisLabel:  {
                                interval: 0,
                               // rotate:50,
                                show: false,
                                splitNumber: 15,
                                textStyle: {
                                    color: "rgba(255,255,255,.6)",
                                    fontSize: '12',
                                },
                            },
                    }],
                    yAxis: [{
                        type: 'value',
                        axisLabel: {
                           //formatter: '{value} %'
                            show:true,
                             textStyle: {
                                    color: "rgba(255,255,255,.6)",
                                    fontSize: '12',
                                },
                        },
                        axisTick: {
                            show: false,
                        },
                        axisLine: {
                            show: true,
                            lineStyle: {
                                color: "rgba(255,255,255,.1	)",
                                width: 1,
                                type: "solid"
                            },
                        },
                        splitLine: {
                            lineStyle: {
                               color: "rgba(255,255,255,.1)",
                            }
                        }
                    }],
                    series: [
                        {
                        type: 'line',
                        data: y6Data,
                       // barWidth:'35%', //柱子宽度
                       // barGap: 1, //柱子之间间距
                        itemStyle: {
                            normal: {
                                color:'#2f89cf',
                                opacity: 1,
                                barBorderRadius: 5,
                            }
                        }
                    }

                    ]
                };

                // 使用刚指定的配置项和数据显示图表。
                myChart.setOption(option);
                window.addEventListener("resize",function(){
                    myChart.resize();
                });
            }
        });
    }
function echarts6() {
    xData = []
    yData = []
    $.ajax({
        type: 'post',                            // post请求
        url: '/getgenrecounts',
        dataType: 'json',
        data: {},
        error: function (xhr, err) {
            alert('请求失败，请检查，' + err + '!')
        },
        success: function (data) {   // data是javascript的json格式
            for (i = 0; i < data.length; i++) {
                xData[i] = data[i].genres
                yData[i] = Number.parseInt(data[i].num)
            }

            // 基于准备好的dom，初始化echarts实例
            var myChart = echarts.init(document.getElementById('echart6'));

            var dataStyle = {
                normal: {
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    },
                    //shadowBlur: 40,
                    //shadowColor: 'rgba(40, 40, 40, 1)',
                }
            };
            var placeHolderStyle = {
                normal: {
                    color: 'rgba(255,255,255,.05)',
                    label: {show: false,},
                    labelLine: {show: false}
                },
                emphasis: {
                    color: 'rgba(0,0,0,0)'
                }
            };
            option = {
                color: ['#0f63d6', '#0f78d6', '#0f8cd6', '#0fa0d6', '#0fb4d6'],
                tooltip: {
                    show: true,
                    formatter: "{a} : {c} "
                },
                legend: {
                    itemWidth: 10,
                    itemHeight: 10,
                    itemGap: 12,
                    bottom: '3%',

                    data: ['浙江', '上海', '广东', '北京', '深圳'],
                    textStyle: {
                        color: 'rgba(255,255,255,.6)',
                    }
                },

                series: [
                    {
                        name: '浙江',
                        type: 'pie',
                        clockWise: false,
                        center: ['50%', '42%'],
                        radius: ['59%', '70%'],
                        itemStyle: dataStyle,
                        hoverAnimation: false,
                        data: [{
                            value: 80,
                            name: '01'
                        }, {
                            value: 20,
                            name: 'invisible',
                            tooltip: {show: false},
                            itemStyle: placeHolderStyle
                        }]
                    },
                    {
                        name: '上海',
                        type: 'pie',
                        clockWise: false,
                        center: ['50%', '42%'],
                        radius: ['49%', '60%'],
                        itemStyle: dataStyle,
                        hoverAnimation: false,
                        data: [{
                            value: 70,
                            name: '02'
                        }, {
                            value: 30,
                            name: 'invisible',
                            tooltip: {show: false},
                            itemStyle: placeHolderStyle
                        }]
                    },
                    {
                        name: '广东',
                        type: 'pie',
                        clockWise: false,
                        hoverAnimation: false,
                        center: ['50%', '42%'],
                        radius: ['39%', '50%'],
                        itemStyle: dataStyle,
                        data: [{
                            value: 65,
                            name: '03'
                        }, {
                            value: 35,
                            name: 'invisible',
                            tooltip: {show: false},
                            itemStyle: placeHolderStyle
                        }]
                    },
                    {
                        name: '北京',
                        type: 'pie',
                        clockWise: false,
                        hoverAnimation: false,
                        center: ['50%', '42%'],
                        radius: ['29%', '40%'],
                        itemStyle: dataStyle,
                        data: [{
                            value: 60,
                            name: '04'
                        }, {
                            value: 40,
                            name: 'invisible',
                            tooltip: {show: false},
                            itemStyle: placeHolderStyle
                        }]
                    },
                    {
                        name: '深圳',
                        type: 'pie',
                        clockWise: false,
                        hoverAnimation: false,
                        center: ['50%', '42%'],
                        radius: ['20%', '30%'],
                        itemStyle: dataStyle,
                        data: [{
                            value: 50,
                            name: '05'
                        }, {
                            value: 50,
                            name: 'invisible',
                            tooltip: {show: false},
                            itemStyle: placeHolderStyle
                        }]
                    },]
            };

            // 使用刚指定的配置项和数据显示图表。
            myChart.setOption(option);
            window.addEventListener("resize", function () {
                myChart.resize();
            });
        }
    });
}
function echarts_31() {
    x31Data = []
    $.ajax({
        type: 'post',                            // post请求
        url: '/getdurationcounts',
        dataType: 'json',
        data: {},
        error: function (xhr, err) {
            alert('请求失败，请检查，' + err + '!')
        },
        success: function (data) {   // data是javascript的json格式
            for (i = 0; i < data.length; i++) {
                x31Data[i] = data[i].name;
            }

            // 基于准备好的dom，初始化echarts实例
            var myChart = echarts.init(document.getElementById('fb2'));
            option = {

                title: [{
                    text: '时长分布',
                    left: 'center',
                    textStyle: {
                        color: '#fff',
                        fontSize: '16'
                    }

                }],
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b}: {c} ({d}%)",
                    position: function (p) {   //其中p为当前鼠标的位置
                        return [p[0] + 10, p[1] - 10];
                    }
                },
                legend: {

                    top: '70%',
                    itemWidth: 10,
                    itemHeight: 10,
                    data: x31Data,   //['0岁以下', '20-29岁', '30-39岁', '40-49岁', '50岁以上'],
                    textStyle: {
                        color: 'rgba(255,255,255,.5)',
                        fontSize: '12',
                    }
                },
                series: [
                    {
                        name: '时长分布',
                        type: 'pie',
                        center: ['50%', '42%'],
                        radius: ['40%', '60%'],
                        color: ['#065aab', '#066eab', '#0682ab', '#0696ab', '#06a0ab', '#06b4ab', '#06c8ab', '#06dcab', '#06f0ab'],
                        label: {show: false},
                        labelLine: {show: false},
                        data:data, //[{value: 1, name: '0岁以下'}, {value: 4, name: '20-29岁'}, {value: 2, name: '30-39岁'}, {value: 2, name: '40-49岁'}, {value: 1, name: '50岁以上'},]
                    }
                ]
            };

            // 使用刚指定的配置项和数据显示图表。
            myChart.setOption(option);
            window.addEventListener("resize", function () {
                myChart.resize();
            });
        }
    });
}
function echarts_32() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('fb2'));
option = {
   
	    title: [{
        text: '职业分布',
        left: 'center',
        textStyle: {
            color: '#fff',
			fontSize:'16'
        }

    }],
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)",
position:function(p){   //其中p为当前鼠标的位置
            return [p[0] + 10, p[1] - 10];
        }
    },
    legend: {
        
    top:'70%',
       itemWidth: 10,
        itemHeight: 10,
        data:['电子商务','教育','IT/互联网','金融','学生','其他'],
                textStyle: {
           color: 'rgba(255,255,255,.5)',
			fontSize:'12',
        }
    },
    series: [
        {
        	name:'年龄分布',
            type:'pie',
			center: ['50%', '42%'],
            radius: ['40%', '60%'],
            color: ['#065aab', '#066eab', '#0682ab', '#0696ab', '#06a0ab','#06b4ab','#06c8ab','#06dcab','#06f0ab'],	
            label: {show:false},
			labelLine: {show:false},
            data:[
                {value:5, name:'电子商务'},
                {value:1, name:'教育'},
                {value:6, name:'IT/互联网'},
                {value:2, name:'金融'},
                {value:1, name:'学生'},
                {value:1, name:'其他'},
            ]
        }
    ]
};
      
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
function echarts_33() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('fb3'));
option = {
	    title: [{
        text: '兴趣分布',
        left: 'center',
        textStyle: {
            color: '#fff',
			fontSize:'16'
        }

    }],
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)",
position:function(p){   //其中p为当前鼠标的位置
            return [p[0] + 10, p[1] - 10];
        }
    },
    legend: {
    top:'70%',
       itemWidth: 10,
        itemHeight: 10,
        data:['汽车','旅游','财经','教育','软件','其他'],
                textStyle: {
            color: 'rgba(255,255,255,.5)',
			fontSize:'12',
        }
    },
    series: [
        {
        	name:'兴趣分布',
            type:'pie',
			center: ['50%', '42%'],
            radius: ['40%', '60%'],
                   color: ['#065aab', '#066eab', '#0682ab', '#0696ab', '#06a0ab','#06b4ab','#06c8ab','#06dcab','#06f0ab'],	
            label: {show:false},
			labelLine: {show:false},
            data:[
                {value:2, name:'汽车'},
                {value:3, name:'旅游'},
                {value:1, name:'财经'},
                {value:4, name:'教育'},
                {value:8, name:'软件'},
                {value:1, name:'其他'},
            ]
        }
    ]
};
      
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
				
	
})



		
		
		


		









