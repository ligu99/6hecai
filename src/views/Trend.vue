<template>
    <div class="trend">
        <div id="trend1" style="width: 100%; height: 600px"></div>
    </div>
</template>

<script>
import { postRequest } from "@/api/baseRequest.js";

export default {
    data() {
        return {
            qqshData: [],
            dateArr: []
        }
    },
    async created() {
        // type: 7-琴棋书画
        let { result: { data: { bodyList } } } = await postRequest("/smallSix/findSmallSixHistory.do", {
            year: "2021",
            type: "7"
        });
        bodyList.forEach(item => {
            this.qqshData.push(item.czAndFe[6]);
            this.dateArr.push(item.preDrawDate);
        });
        this.drawTrend1();
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
                    data: this.dateArr
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
                series: [{
                    type: 'line',
                    data: seriesData
                }]
            };

            trend1.setOption(option);
        }
    }

}
</script>

<style lang="scss" scoped>
</style>