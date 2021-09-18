<template>
    <div class="record">
        <h1>特码记录</h1>
        <el-table
            v-loading="loading"
            stripe
            :data="tableData"
            style="width: 100%"
        >
            <el-table-column prop="preDrawDate" label="日期" width="100">
            </el-table-column>
            <el-table-column label="特码">
                <template slot-scope="scope">
                    <span
                        :class="{
                            code: true,
                            red: scope.row.colorArr[6] == 1,
                            green: scope.row.colorArr[6] == 2,
                            blue: scope.row.colorArr[6] == 3,
                        }"
                    >
                        {{ scope.row.preDrawCode[6] }}
                    </span>
                </template>
            </el-table-column>
            <el-table-column label="生肖">
                <template slot-scope="scope">
                    <span>
                        {{ scope.row.shengXiaoArr[6] | formatShengxiao }}
                    </span>
                </template>
            </el-table-column>
            <el-table-column label="波色">
                <template slot-scope="scope">
                    <span>
                        {{
                            scope.row.colorArr[6] == 1
                                ? "红"
                                : scope.row.colorArr[6] == 2
                                ? "绿"
                                : "蓝"
                        }}
                    </span>
                </template>
            </el-table-column>

            <el-table-column label="四季">
                <template slot-scope="scope">
                    <span>{{ scope.row.shengXiaoArr[6] | formatSiji }}</span>
                </template>
            </el-table-column>
            <el-table-column label="琴棋书画">
                <template slot-scope="scope">
                    <span>{{ scope.row.shengXiaoArr[6] | formatQqsh }}</span>
                </template>
            </el-table-column>
            <el-table-column label="三色">
                <template slot-scope="scope">
                    <span>
                        {{ scope.row.shengXiaoArr[6] | formatSanse }}
                    </span>
                </template>
            </el-table-column>
            <el-table-column label="大小">
                <template slot-scope="scope">
                    <span>
                        {{
                            Number(scope.row.preDrawCode[6]) >= 25 ? "大" : "小"
                        }}
                    </span>
                </template>
            </el-table-column>
            <el-table-column label="单双">
                <template slot-scope="scope">
                    <span>
                        {{
                            Number(scope.row.preDrawCode[6]) % 2 === 0
                                ? "双"
                                : "单"
                        }}
                    </span>
                </template>
            </el-table-column>
            <el-table-column label="合大小">
                <template slot-scope="scope">
                    <span>
                        {{ scope.row.preDrawCode[6] | formatHdx }}
                    </span>
                </template>
            </el-table-column>
            <el-table-column label="合单双">
                <template slot-scope="scope">
                    <span>
                        {{ scope.row.preDrawCode[6] | formatHds }}
                    </span>
                </template>
            </el-table-column>
            <el-table-column label="尾大小">
                <template slot-scope="scope">
                    <span>
                        {{ scope.row.preDrawCode[6] | formatWdx }}
                    </span>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>

import { postRequest } from "@/api/baseRequest.js";

export default {
    data() {
        return {
            tableData: [],
            loading: true
        }
    },
    async created() {
        // type: 1-生肖
        // czAndFe：生肖/五行/家禽顺序
        // console.log(res.result.data.bodyList);
        // color:1-红，2-绿，3-蓝
        let { result: { data: { bodyList: bodyList1 } } } = await postRequest("/smallSix/findSmallSixHistory.do", {
            year: "2021",
            type: "1"
        });
        /*
        // type: 2-五行
        let { result: { data: { bodyList: bodyList2 } } } = await postRequest("/smallSix/findSmallSixHistory.do", {
            year: "2021",
            type: "2"
        });
        // type: 3-家禽野兽
        let { result: { data: { bodyList: bodyList3 } } } = await postRequest("/smallSix/findSmallSixHistory.do", {
            year: "2021",
            type: "3"
        });
        // type: 4-男女
        let { result: { data: { bodyList: bodyList4 } } } = await postRequest("/smallSix/findSmallSixHistory.do", {
            year: "2021",
            type: "4"
        });
        // type: 5-天地
        let { result: { data: { bodyList: bodyList5 } } } = await postRequest("/smallSix/findSmallSixHistory.do", {
            year: "2021",
            type: "5"
        });
        // type: 6-四季
        let { result: { data: { bodyList: bodyList6 } } } = await postRequest("/smallSix/findSmallSixHistory.do", {
            year: "2021",
            type: "6"
        });
        // type: 7-琴棋书画
        let { result: { data: { bodyList: bodyList7 } } } = await postRequest("/smallSix/findSmallSixHistory.do", {
            year: "2021",
            type: "7"
        });
        // type: 8-三色
        let { result: { data: { bodyList: bodyList8 } } } = await postRequest("/smallSix/findSmallSixHistory.do", {
            year: "2021",
            type: "8"
        });
        */


        let dataList = [];
        dataList = bodyList1.map((item, index) => {
            item.preDrawCode = item.preDrawCode.split(',').map(it => {
                if (it.length < 2) {
                    it = `0${it}`
                }
                return it
            });
            return {
                preDrawDate: item.preDrawDate,
                preDrawCode: item.preDrawCode,//7个号码数组
                shengXiaoArr: item.czAndFe,//7个号码对应生肖顺序数组
                colorArr: item.color,//7个号码对应波色数组
            }
        });

        this.tableData = dataList;
        this.loading = false;
    },
    filters: {

        formatSiji: value => {
            let newValue = "";
            if (value === 3 || value === 4 || value === 5) {
                newValue = "春"
            } else if (value === 6 || value === 7 || value === 8) {
                newValue = "夏"
            } else if (value === 9 || value === 10 || value === 11) {
                newValue = "秋"
            } else {
                newValue = "冬"
            }
            return newValue;
        },
        formatQqsh: value => {
            let newValue = "";
            if (value === 4 || value === 6 || value === 10) {
                newValue = "琴"
            } else if (value === 1 || value === 2 || value === 11) {
                newValue = "棋"
            } else if (value === 3 || value === 5 || value === 7) {
                newValue = "书"
            } else {
                newValue = "画"
            }
            return newValue;
        },
        formatSanse: value => {
            let newValue = "";
            if (value === 1 || value === 4 || value === 7 || value === 10) {
                newValue = "红肖"
            } else if (value === 2 || value === 5 || value === 8 || value === 11) {
                newValue = "绿肖"
            } else {
                newValue = "蓝肖"
            }
            return newValue;
        },
        /**
         * 特码大小：>=25为大，<=24为小
         * 合大小：十位个位之和>=7为大，<=6为小
         * 尾大小：个位数>=5为大，<=4为小
         */
        formatHdx: value => {
            if (value == "49") {
                return "和";
            }
            let hNum = Number(value.charAt(0)) + Number(value.charAt(1));
            let newValue = hNum >= 7 ? "合大" : "合小";
            return newValue;
        },
        formatHds: value => {
            let hNum = Number(value.charAt(0)) + Number(value.charAt(1));
            let newValue = hNum % 2 === 0 ? "合双" : "合单";
            return newValue;
        },
        formatWdx: value => {
            let wNum = Number(value.charAt(1));
            let newValue = wNum >= 5 ? "尾大" : "尾小";
            return newValue;
        },
    }
}
</script>

<style lang="scss" scoped>
.code {
    display: inline-block;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: #fff;
    font-size: 24px;
    font-weight: 600;
    line-height: 40px;
    text-align: center;
}
.red {
    background: red;
}
.green {
    background: green;
}
.blue {
    background: blue;
}
</style>
