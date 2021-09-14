<template>
    <div class="selectcode">
        <h1>选号助手</h1>
        <div class="checkbox">
            <span>波色：</span>
            <el-checkbox-group v-model="filters.color">
                <el-checkbox label="红"></el-checkbox>
                <el-checkbox label="绿"></el-checkbox>
                <el-checkbox label="蓝"></el-checkbox>
            </el-checkbox-group>
        </div>
        <div class="checkbox">
            <span>生肖：</span>
            <el-checkbox-group v-model="filters.sx">
                <el-checkbox label="鼠"></el-checkbox>
                <el-checkbox label="牛"></el-checkbox>
                <el-checkbox label="虎"></el-checkbox>
                <el-checkbox label="兔"></el-checkbox>
                <el-checkbox label="龙"></el-checkbox>
                <el-checkbox label="蛇"></el-checkbox>
                <el-checkbox label="马"></el-checkbox>
                <el-checkbox label="羊"></el-checkbox>
                <el-checkbox label="猴"></el-checkbox>
                <el-checkbox label="鸡"></el-checkbox>
                <el-checkbox label="狗"></el-checkbox>
                <el-checkbox label="猪"></el-checkbox>
            </el-checkbox-group>
        </div>
        <div class="checkbox">
            <span>大小：</span>
            <el-checkbox-group v-model="filters.dx">
                <el-checkbox label="大"></el-checkbox>
                <el-checkbox label="小"></el-checkbox>
            </el-checkbox-group>
        </div>
        <div class="checkbox">
            <span>单双：</span>
            <el-checkbox-group v-model="filters.ds">
                <el-checkbox label="单"></el-checkbox>
                <el-checkbox label="双"></el-checkbox>
            </el-checkbox-group>
        </div>
        <div class="checkbox">
            <span>合大小：</span>
            <el-checkbox-group v-model="filters.hdx">
                <el-checkbox label="合大"></el-checkbox>
                <el-checkbox label="合小"></el-checkbox>
            </el-checkbox-group>
        </div>
        <div class="checkbox">
            <span>合单双：</span>
            <el-checkbox-group v-model="filters.hds">
                <el-checkbox label="合单"></el-checkbox>
                <el-checkbox label="合双"></el-checkbox>
            </el-checkbox-group>
        </div>
        <el-button type="primary" size="small" @click="goTofilter">
            确定选号
        </el-button>

        <div class="line"></div>

        <div class="rescode">
            <p>选号结果</p>
            <div v-if="rescode.length > 1">
                <span
                    :class="{
                        code: true,
                        red: item.color === '红',
                        green: item.color === '绿',
                        blue: item.color === '蓝',
                    }"
                    v-for="item in rescode"
                    :key="item.number"
                >
                    {{ item.number }}
                </span>
            </div>
            <div v-else>暂无选号</div>
        </div>

        <siji-sx></siji-sx>
        <qqsh-sx></qqsh-sx>
        <rgb-sx></rgb-sx>
    </div>
</template>

<script>
import sijiSx from "@/components/SijiSx.vue";
import qqshSx from "@/components/QqshSx.vue";
import rgbSx from "@/components/Rgb.vue";
export default {
    components: { sijiSx, qqshSx, rgbSx },
    data() {
        return {
            /**
             * 特码大小：>=25为大，<=24为小,49和
             * 特码单双：个位13579为单，02468为双,49和
             * 合大小：十位个位之和>=7为大，<=6为小
             * 合单双：十位个位之和的个位13579为单，02468为双
             * 尾大小：个位数>=5为大，<=4为小
            */
            codeArr: [
                { number: "01", color: "红", sx: "牛", dx: "小", ds: "单", hdx: "合小", hds: "合单", wdx: "尾小" },
                { number: "13", color: "红", sx: "牛", dx: "小", ds: "单", hdx: "合小", hds: "合双", wdx: "尾小" },
                { number: "25", color: "蓝", sx: "牛", dx: "大", ds: "单", hdx: "合大", hds: "合单", wdx: "尾大" },
                { number: "37", color: "蓝", sx: "牛", dx: "大", ds: "单", hdx: "合大", hds: "合双", wdx: "尾大" },
                { number: "49", color: "绿", sx: "牛", dx: "大", ds: "单", hdx: "合大", hds: "合单", wdx: "尾大" },
                { number: "02", color: "红", sx: "鼠", dx: "小", ds: "双", hdx: "合小", hds: "合双", wdx: "尾小" },
                { number: "14", color: "蓝", sx: "鼠", dx: "小", ds: "双", hdx: "合小", hds: "合单", wdx: "尾小" },
                { number: "26", color: "蓝", sx: "鼠", dx: "大", ds: "双", hdx: "合大", hds: "合双", wdx: "尾大" },
                { number: "38", color: "绿", sx: "鼠", dx: "大", ds: "双", hdx: "合大", hds: "合单", wdx: "尾大" },
                { number: "03", color: "蓝", sx: "猪", dx: "小", ds: "单", hdx: "合小", hds: "合单", wdx: "尾小" },
                { number: "15", color: "蓝", sx: "猪", dx: "小", ds: "单", hdx: "合小", hds: "合双", wdx: "尾大" },
                { number: "27", color: "绿", sx: "猪", dx: "大", ds: "单", hdx: "合大", hds: "合单", wdx: "尾大" },
                { number: "39", color: "绿", sx: "猪", dx: "大", ds: "单", hdx: "合大", hds: "合双", wdx: "尾大" },
                { number: "04", color: "蓝", sx: "狗", dx: "小", ds: "双", hdx: "合小", hds: "合双", wdx: "尾小" },
                { number: "16", color: "绿", sx: "狗", dx: "小", ds: "双", hdx: "合大", hds: "合单", wdx: "尾大" },
                { number: "28", color: "绿", sx: "狗", dx: "大", ds: "双", hdx: "合大", hds: "合双", wdx: "尾大" },
                { number: "40", color: "红", sx: "狗", dx: "大", ds: "双", hdx: "合小", hds: "合双", wdx: "尾小" },
                { number: "05", color: "绿", sx: "鸡", dx: "小", ds: "单", hdx: "合小", hds: "合单", wdx: "尾大" },
                { number: "17", color: "绿", sx: "鸡", dx: "小", ds: "单", hdx: "合大", hds: "合双", wdx: "尾大" },
                { number: "29", color: "红", sx: "鸡", dx: "大", ds: "单", hdx: "合大", hds: "合单", wdx: "尾大" },
                { number: "41", color: "蓝", sx: "鸡", dx: "大", ds: "单", hdx: "合小", hds: "合单", wdx: "尾小" },
                { number: "06", color: "绿", sx: "猴", dx: "小", ds: "双", hdx: "合小", hds: "合双", wdx: "尾大" },
                { number: "18", color: "红", sx: "猴", dx: "小", ds: "双", hdx: "合大", hds: "合单", wdx: "尾大" },
                { number: "30", color: "红", sx: "猴", dx: "大", ds: "双", hdx: "合小", hds: "合单", wdx: "尾小" },
                { number: "42", color: "蓝", sx: "猴", dx: "大", ds: "双", hdx: "合小", hds: "合双", wdx: "尾小" },
                { number: "07", color: "红", sx: "羊", dx: "小", ds: "单", hdx: "合大", hds: "合单", wdx: "尾大" },
                { number: "19", color: "红", sx: "羊", dx: "小", ds: "单", hdx: "合大", hds: "合双", wdx: "尾大" },
                { number: "31", color: "蓝", sx: "羊", dx: "大", ds: "单", hdx: "合小", hds: "合双", wdx: "尾小" },
                { number: "43", color: "绿", sx: "羊", dx: "大", ds: "单", hdx: "合大", hds: "合单", wdx: "尾小" },
                { number: "08", color: "红", sx: "马", dx: "小", ds: "双", hdx: "合大", hds: "合双", wdx: "尾大" },
                { number: "20", color: "蓝", sx: "马", dx: "小", ds: "双", hdx: "合小", hds: "合双", wdx: "尾小" },
                { number: "32", color: "绿", sx: "马", dx: "大", ds: "双", hdx: "合小", hds: "合单", wdx: "尾小" },
                { number: "44", color: "绿", sx: "马", dx: "大", ds: "双", hdx: "合大", hds: "合双", wdx: "尾小" },
                { number: "09", color: "蓝", sx: "蛇", dx: "小", ds: "单", hdx: "合大", hds: "合单", wdx: "尾大" },
                { number: "21", color: "绿", sx: "蛇", dx: "小", ds: "单", hdx: "合小", hds: "合单", wdx: "尾小" },
                { number: "33", color: "绿", sx: "蛇", dx: "大", ds: "单", hdx: "合小", hds: "合双", wdx: "尾小" },
                { number: "45", color: "红", sx: "蛇", dx: "大", ds: "单", hdx: "合大", hds: "合单", wdx: "尾大" },
                { number: "10", color: "蓝", sx: "龙", dx: "小", ds: "双", hdx: "合小", hds: "合单", wdx: "尾小" },
                { number: "22", color: "绿", sx: "龙", dx: "小", ds: "双", hdx: "合小", hds: "合双", wdx: "尾小" },
                { number: "34", color: "红", sx: "龙", dx: "大", ds: "双", hdx: "合大", hds: "合单", wdx: "尾小" },
                { number: "46", color: "红", sx: "龙", dx: "大", ds: "双", hdx: "合大", hds: "合双", wdx: "尾大" },
                { number: "11", color: "绿", sx: "兔", dx: "小", ds: "单", hdx: "合小", hds: "合双", wdx: "尾小" },
                { number: "23", color: "红", sx: "兔", dx: "小", ds: "单", hdx: "合小", hds: "合单", wdx: "尾小" },
                { number: "35", color: "红", sx: "兔", dx: "大", ds: "单", hdx: "合大", hds: "合双", wdx: "尾大" },
                { number: "47", color: "蓝", sx: "兔", dx: "大", ds: "单", hdx: "合大", hds: "合单", wdx: "尾大" },
                { number: "12", color: "红", sx: "虎", dx: "小", ds: "双", hdx: "合小", hds: "合单", wdx: "尾小" },
                { number: "24", color: "红", sx: "虎", dx: "小", ds: "双", hdx: "合小", hds: "合双", wdx: "尾小" },
                { number: "36", color: "蓝", sx: "虎", dx: "大", ds: "双", hdx: "合大", hds: "合单", wdx: "尾大" },
                { number: "48", color: "蓝", sx: "虎", dx: "大", ds: "双", hdx: "合大", hds: "合双", wdx: "尾大" }
            ],
            red: false,
            green: false,
            blue: false,
            filters: {
                color: [],
                sx: [],
                dx: [],
                ds: [],
                hdx: [],
                hds: []
            },
            rescode: []
        }
    },
    mounted() {
    },
    methods: {
        goTofilter() {
            let res = this.multiFilter(this.codeArr, this.filters);
            this.rescode = res.sort((a, b) => {
                return a.number - b.number
            })
        },

        multiFilter(array, filters) {
            const filterKeys = Object.keys(filters)
            let isNullfilter = filterKeys.every(key => {
                return filters[key].length === 0
            });
            // 空条件，则不执行后面的代码
            if (isNullfilter) return [];
            // filters all elements passing the criteria
            return array.filter((item) => {
                // dynamically validate all filter criteria
                return filterKeys.every(key => {
                    //ignore when the filter is empty Anne
                    if (!filters[key].length) return true
                    return !!~filters[key].indexOf(item[key])
                })
            })
        }

    }
}
</script>
 
<style lang="scss" scoped>
.selectcode {
    padding-bottom: 50px;
}
.checkbox {
    width: 960px;
    margin: 10px auto;
    display: flex;
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
    margin: 3px;
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
.rescode {
    width: 960px;
    min-height: 150px;
    margin: 10px auto;
    border: 1px solid #ccc;
    p {
        text-align: left;
        border-bottom: 1px solid #ccc;
        padding: 5px;
    }
}
.line {
    height: 3px;
    width: 960px;
    margin: 30px auto;
    background: #000;
}
</style>