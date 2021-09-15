<template>
    <div class="home">
        <div class="newinfowrap">
            <div class="newinfo" v-loading="loading">
                <p>最新开奖结果：{{ newInfo.time }}</p>

                <div
                    class="itemwrap"
                    v-for="(item, index) in newInfo.codeArr"
                    :key="item"
                >
                    <span
                        :class="{
                            code: true,
                            red: newInfo.colorArr[index] == 1,
                            green: newInfo.colorArr[index] == 2,
                            blue: newInfo.colorArr[index] == 3,
                            ml: index == 6,
                        }"
                    >
                        {{ item }}
                    </span>
                    <span :class="{ newsx: true, ml: index == 6 }">
                        {{ newInfo.chineseZodiac[index] | formatShengxiao }}
                    </span>
                </div>
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

        <siji-sx></siji-sx>
        <qqsh-sx></qqsh-sx>
        <rgb-sx></rgb-sx>
    </div>
</template>

<script>
import { mapState } from 'vuex';

// @ is an alias to /src
import { getRequest } from "@/api/baseRequest.js";
import sijiSx from "@/components/SijiSx.vue";
import qqshSx from "@/components/QqshSx.vue";
import rgbSx from "@/components/Rgb.vue";
export default {
    name: 'Home',
    components: { sijiSx, qqshSx, rgbSx },
    data() {
        return {
            newInfo: {},
            loading: true
        }
    },
    computed: {
        ...mapState(['sxArr']),
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
                    chineseZodiac: resData.chineseZodiac,
                    time: resData.preDrawTime.substring(0, 11)
                }
                this.loading = false;
            })
        }
    },
    filters: {
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
    .itemwrap {
        display: inline-block;
    }
    p {
        padding-bottom: 10px;
    }
    .code {
        display: block;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        color: #fff;
        font-size: 24px;
        font-weight: 600;
        line-height: 40px;
        text-align: center;
        margin: 0px 3px;
        line-height: 40px;
        text-align: center;
        margin: 0px 3px;
    }
    .newsx {
        display: inline-block;
        width: 40px;
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
    .ml {
        margin-left: 30px;
    }
}
</style>
