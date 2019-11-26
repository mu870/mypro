
import echarts from 'echarts'
const install = function(Vue) {
    Object.defineProperties(Vue.prototype, {
        $charts: {
            get() {
                return {
                    //画一条简单的线
                    line2: function (id) {
                        this.charts = echarts.init(document.getElementById(id));
                        this.charts.clear();

                        const optionData = {
                            grid: {  
                                left: '0%',   //图表距边框的距离
                                right: '0%',
                                bottom: '3%',
                                containLabel: true
                            },
                            title: {
                                text: '进货统计',
                                x: 'center'
                              },
                      
                            xAxis: {
                                type: 'category',
                                data: ['12-02-7','12-02-8','12-02-9','12-02-10', '12-02-11', '12-02-12', '12-02-13','12-02-14','12-02-15','12-02-16','12-02-17']
                            },
                            yAxis: {
                                    type: 'value',
                                    min:-100, // 设置y轴刻度的最小值
                                    max:800,  // 设置y轴刻度的最大值
                                    splitNumber:9,  // 设置y轴刻度间隔个数
                            },
                            series: [{
                                data: [100, 600, 400, 200, 800, 540, 430,340,456,456,654],
                                type: 'line',
                                symbolSize:10,
                                symbol:'circle',  
                                itemStyle:{
                                    normal:{
                                      borderColor:'#87CEFA',  // 拐点边框颜色
                                      color:'#87CEFA',
                                    }
                                  }
                            }],
                            lineStyle:{
                                // 使用rgba设置折线透明度为0，可以视觉上隐藏折线
                                color: '#87CEFA'
                              },
              
                        };
                        

                        this.charts.setOption(optionData);
                    },
                }
            }
        }
    })
}

export default {
    install
}
