<template>
    <div class="home">
        <div class="newinfowrap">
            <div class="newinfo" v-loading="loading">
                <p>最新开奖结果：{{ newInfo.time }}</p>
                <span
                    :class="{
                        code: true,
                        red: newInfo.colorArr[index] == 1,
                        green: newInfo.colorArr[index] == 2,
                        blue: newInfo.colorArr[index] == 3,
                        ml: index == 6,
                    }"
                    v-for="(item, index) in newInfo.codeArr"
                    :key="item"
                >
                    {{ item }}
                </span>
            </div>
            <div>
                <el-button size="small" type="primary" @click="getNewInfo">
                    刷新
                </el-button>
            </div>
        </div>

        <div class="sxlist">
            <div class="sxitem" v-for="item in sxArr" :key="item.id">
                <div class="title">{{ item.name }}</div>
                <div class="itemnumber">
                    <span
                        :class="{
                            red: code.color == '红',
                            green: code.color == '绿',
                            blue: code.color == '蓝',
                        }"
                        v-for="code in item.codeArr"
                        :key="code.number"
                    >
                        {{ code.number }}
                    </span>
                </div>
            </div>
        </div>

        <div class="sititle">琴棋书画</div>
        <div class="qqsh">
            <div>
                <p>琴</p>
                <span v-for="item in qingArr" :key="item.id">
                    {{ item.name }}
                </span>
            </div>
            <div>
                <p>棋</p>
                <span v-for="item in qiArr" :key="item.id">
                    {{ item.name }}
                </span>
            </div>
            <div>
                <p>书</p>
                <span v-for="item in shuArr" :key="item.id">
                    {{ item.name }}
                </span>
            </div>
            <div>
                <p>画</p>
                <span v-for="item in huaArr" :key="item.id">
                    {{ item.name }}
                </span>
            </div>
        </div>

        <div class="sititle">春夏秋冬</div>
        <div class="qqsh">
            <div>
                <p>春</p>
                <span v-for="item in chunArr" :key="item.id">
                    {{ item.name }}
                </span>
            </div>
            <div>
                <p>夏</p>
                <span v-for="item in xiaArr" :key="item.id">
                    {{ item.name }}
                </span>
            </div>
            <div>
                <p>秋</p>
                <span v-for="item in qiuArr" :key="item.id">
                    {{ item.name }}
                </span>
            </div>
            <div>
                <p>冬</p>
                <span v-for="item in dongArr" :key="item.id">
                    {{ item.name }}
                </span>
            </div>
        </div>

        <div class="sititle">红绿蓝</div>
        <div class="qqsh">
            <div>
                <p>红</p>
                <span v-for="item in redArr" :key="item.id">
                    {{ item.name }}
                </span>
            </div>
            <div>
                <p>绿</p>
                <span v-for="item in greenArr" :key="item.id">
                    {{ item.name }}
                </span>
            </div>
            <div>
                <p>蓝</p>
                <span v-for="item in blueArr" :key="item.id">
                    {{ item.name }}
                </span>
            </div>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import { getRequest } from "@/api/baseRequest.js";

export default {
    name: 'Home',
    data() {
        return {
            sxArr: [{
                id: "1",
                name: "鼠",
                color: "红",
                season: "冬",
                skill: "棋",
                codeArr: [{ number: '2', color: '红' },
                { number: '14', color: '蓝' },
                { number: '26', color: '蓝' },
                { number: '38', color: '绿' }],
            }, {
                id: "2",
                name: "牛",
                color: "绿",
                season: "冬",
                skill: "棋",
                codeArr: [{ number: '1', color: '红' },
                { number: '13', color: '红' },
                { number: '25', color: '蓝' },
                { number: '37', color: '蓝' },
                { number: '49', color: '绿' }],
            }, {
                id: "3",
                name: "虎",
                color: "蓝",
                season: "春",
                skill: "书",
                codeArr: [{ number: '12', color: '红' },
                { number: '24', color: '红' },
                { number: '36', color: '蓝' },
                { number: '48', color: '蓝' }],
            }, {
                id: "4",
                name: "兔",
                color: "红",
                season: "春",
                skill: "琴",
                codeArr: [{ number: '11', color: '绿' },
                { number: '23', color: '红' },
                { number: '35', color: '红' },
                { number: '47', color: '蓝' }],
            }, {
                id: "5",
                name: "龙",
                color: "绿",
                season: "春",
                skill: "书",
                codeArr: [{ number: '10', color: '蓝' },
                { number: '22', color: '绿' },
                { number: '34', color: '红' },
                { number: '46', color: '红' }],
            }, {
                id: "6",
                name: "蛇",
                color: "蓝",
                season: "夏",
                skill: "琴",
                codeArr: [{ number: '9', color: '蓝' },
                { number: '21', color: '绿' },
                { number: '33', color: '绿' },
                { number: '45', color: '红' }],
            }, {
                id: "7",
                name: "马",
                color: "红",
                season: "夏",
                skill: "书",
                codeArr: [{ number: '8', color: '红' },
                { number: '20', color: '蓝' },
                { number: '32', color: '绿' },
                { number: '44', color: '绿' }],
            }, {
                id: "8",
                name: "羊",
                color: "绿",
                season: "夏",
                skill: "画",
                codeArr: [{ number: '7', color: '红' },
                { number: '19', color: '红' },
                { number: '31', color: '蓝' },
                { number: '43', color: '绿' }],
            }, {
                id: "9",
                name: "猴",
                color: "蓝",
                season: "秋",
                skill: "画",
                codeArr: [{ number: '6', color: '绿' },
                { number: '18', color: '红' },
                { number: '30', color: '红' },
                { number: '42', color: '蓝' }],
            }, {
                id: "10",
                name: "鸡",
                color: "红",
                season: "秋",
                skill: "琴",
                codeArr: [{ number: '5', color: '绿' },
                { number: '17', color: '绿' },
                { number: '29', color: '红' },
                { number: '41', color: '蓝' }],
            }, {
                id: "11",
                name: "狗",
                color: "绿",
                season: "秋",
                skill: "棋",
                codeArr: [{ number: '4', color: '蓝' },
                { number: '16', color: '绿' },
                { number: '28', color: '绿' },
                { number: '40', color: '红' }],
            }, {
                id: "12",
                name: "猪",
                color: "蓝",
                season: "冬",
                skill: "画",
                codeArr: [{ number: '3', color: '蓝' },
                { number: '15', color: '蓝' },
                { number: '27', color: '绿' },
                { number: '39', color: '绿' }],
            }],
            newInfo: {},
            loading: true
        }
    },
    computed: {
        // 琴棋书画
        qingArr() {
            return this.sxArr.filter(item => item.skill === "琴");
        },
        qiArr() {
            return this.sxArr.filter(item => item.skill === "棋");
        },
        shuArr() {
            return this.sxArr.filter(item => item.skill === "书");
        },
        huaArr() {
            return this.sxArr.filter(item => item.skill === "画");
        },
        // 春夏秋冬
        chunArr() {
            return this.sxArr.filter(item => item.season === "春");
        },
        xiaArr() {
            return this.sxArr.filter(item => item.season === "夏");
        },
        qiuArr() {
            return this.sxArr.filter(item => item.season === "秋");
        },
        dongArr() {
            return this.sxArr.filter(item => item.season === "冬");
        },
        // 红绿蓝
        redArr() {
            return this.sxArr.filter(item => item.color === "红");
        },
        greenArr() {
            return this.sxArr.filter(item => item.color === "绿");
        },
        blueArr() {
            return this.sxArr.filter(item => item.color === "蓝");
        },
    },
    created() {
        this.getNewInfo();
    },
    methods: {
        getNewInfo() {
            this.loading = true;
            getRequest("/smallSix/findSmallSixInfo.do").then(res => {
                let resData = res.result.data;
                let codeArr = resData.preDrawCode.split(',').map(it => {
                    if (it.length < 2) {
                        it = `0${it}`
                    }
                    return it
                });
                this.newInfo = {
                    codeArr: codeArr,
                    colorArr: resData.color,
                    time: resData.preDrawTime.substring(0, 11)
                }
                this.loading = false;
            })
        }
    },
    filters: {
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
    },

    components: {
    }
}
</script>
<style lang="scss" scoped>
.home {
    padding-bottom: 50px;
}
.sxlist {
    display: flex;
    flex-direction: row;
    width: 960px;
    margin: auto;
    border: 1px solid #ccc;
    border-right: none;

    .sxitem {
        width: 80px;
        text-align: center;
        .title {
            border-bottom: 1px solid #ccc;
            padding: 5px 0px;
            font-size: 24px;
        }
        border-right: 1px solid #ccc;
    }
    .itemnumber {
        display: flex;
        flex-direction: column;
        align-items: center;
        span {
            display: inline-block;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            color: #fff;
            font-size: 24px;
            font-weight: 600;
            line-height: 50px;
            margin: 5px 0px;
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
    }
}
.sititle {
    margin: 50px auto 10px;
    font-size: 24px;
    font-weight: 600;
}
.qqsh {
    margin: auto;
    width: 960px;
    display: flex;
    flex-direction: row;
    border: 1px solid #ccc;
    border-right: none;
    align-content: center;
    div {
        border-right: 1px #ccc solid;
        align-self: center;
        flex: 1;
        p {
            border-bottom: 1px solid #ccc;
        }
        span {
            display: inline-block;
            padding: 10px 0px;
            letter-spacing: 10px;
        }
    }
}
.newinfowrap {
    width: 960px;
    margin: 10px auto 30px;
    display: flex;
    flex-direction: row;
}
.newinfo {
    width: 450px;
    text-align: left;
    border: 1px solid #ccc;
    padding: 10px;
    box-sizing: border-box;
    min-height: 80px;
    p {
        padding-bottom: 10px;
    }
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
        margin: 0px 3px;
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
    .ml {
        margin-left: 30px;
    }
}
</style>
