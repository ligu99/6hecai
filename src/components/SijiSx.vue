<template>
    <div class="sjsx">
        <div class="sititle">春夏秋冬</div>
        <div class="itemwrap">
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
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    computed: {
        ...mapState(['sxArr']),
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