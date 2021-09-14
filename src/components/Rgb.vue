<template>
    <div class="sjsx">
        <div class="sititle">红绿蓝</div>
        <div class="itemwrap">
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
import { mapState } from 'vuex';
export default {
    computed: {
        ...mapState(['sxArr']),
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