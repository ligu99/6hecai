<template>
    <div class="trend">
        <div id="trend1" style="width: 100%; height: 600px"></div>
        <div id="trend2" style="width: 100%; height: 600px"></div>
    </div>
</template>

<script>
import { postRequest } from "@/api/baseRequest.js";

export default {
    data() {
        return {
            qqshData: [],
            dateArr: [],
            cxqdData: []
        }
    },
    async created() {
        // type: 6-四季
        let { result: { data: { bodyList: bodyList6 } } } = await postRequest("/smallSix/findSmallSixHistory.do", {
            year: "2021",
            type: "6"
        });
        bodyList6.forEach(item => {
            this.cxqdData.push(item.czAndFe[6]);
            this.dateArr.push(item.preDrawDate);
        });
        // type: 7-琴棋书画
        let { result: { data: { bodyList: bodyList7 } } } = await postRequest("/smallSix/findSmallSixHistory.do", {
            year: "2021",
            type: "7"
        });
        bodyList7.forEach(item => {
            this.qqshData.push(item.czAndFe[6]);
        });
        this.drawTrend1();
        this.drawTrend2();
    },
    mounted() {
    },
    methods: {
        drawTrend1() {
            let trend1 = this.$echarts.init(document.getElementById("trend1"));
            let seriesData = this.qqshData.map((item, index) => {
                return [index, item]
            });
            let option = {
                title: {
                    text: '琴棋书画走势'
                },
                xAxis: {
                    type: 'category',
                    data: this.dateArr,
                    axisTick: {
                        alignWithLabel: true
                    },
                    axisLabel: {
                        interval: 0,
                        rotate: 40
                    }
                },
                yAxis: {
                    //设置Y轴刻度
                    type: 'value', //坐标轴类型，一定要写，否则显示会出问题
                    // data: ["琴", "棋", "书", "画"]
                    axisLabel: {
                        formatter: (value, index) => {
                            switch (value) {
                                case 1:
                                    return "琴"
                                case 2:
                                    return "期"
                                case 3:
                                    return "书"
                                case 4:
                                    return "画"
                                default:
                                    return ""
                            }
                        }
                    }
                },
                dataZoom: [{
                    type: 'slider',
                    show: true, //flase直接隐藏图形\
                    // left: 50, //滚动条靠左侧的百分比
                    // right: 50,
                    // bottom: 0,
                    start: 0,//滚动条的起始位置
                    end: 30 //滚动条的截止位置（按比例分割你的柱状图x轴长度）
                }],
                grid: {
                    bottom: 50,
                    containLabel: true
                },
                series: [{
                    type: 'line',
                    data: seriesData
                }]
            };

            trend1.setOption(option);
        },

        drawTrend2() {
            let trend2 = this.$echarts.init(document.getElementById("trend2"));
            let seriesData = this.cxqdData.map((item, index) => {
                return [index, item]
            });
            let option = {
                title: {
                    text: '春夏秋冬走势'
                },
                xAxis: {
                    type: 'category',
                    data: this.dateArr,
                    axisTick: {
                        alignWithLabel: true
                    },
                    axisLabel: {
                        interval: 0,
                        rotate: 40
                    }
                },
                yAxis: {
                    //设置Y轴刻度
                    type: 'value', //坐标轴类型，一定要写，否则显示会出问题
                    // data: ["琴", "棋", "书", "画"]
                    axisLabel: {
                        formatter: (value, index) => {
                            switch (value) {
                                case 1:
                                    return "春"
                                case 2:
                                    return "夏"
                                case 3:
                                    return "秋"
                                case 4:
                                    return "冬"
                                default:
                                    return ""
                            }
                        }
                    }
                },
                dataZoom: [{
                    type: 'slider',
                    show: true, //flase直接隐藏图形\
                    // left: 50, //滚动条靠左侧的百分比
                    // right: 50,
                    // bottom: 0,
                    start: 0,//滚动条的起始位置
                    end: 30 //滚动条的截止位置（按比例分割你的柱状图x轴长度）
                }],
                grid: {
                    bottom: 50,
                    containLabel: true
                },
                series: [{
                    type: 'line',
                    data: seriesData
                }]
            };

            trend2.setOption(option);
        }
    }

}
</script>

<style lang="scss" scoped>
#trend1,
#trend2 {
    margin: 50px;
}
</style>