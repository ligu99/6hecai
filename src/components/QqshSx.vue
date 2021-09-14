<template>
    <div class="sjsx">
        <div class="sititle">琴棋书画</div>
        <div class="itemwrap">
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
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    computed: {
        ...mapState(['sxArr']),
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
    }
}
</script>

<style lang="scss" scoped>
.sititle {
    margin: 50px auto 10px;
    font-size: 24px;
    font-weight: 600;
}
.itemwrap {
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
</style>