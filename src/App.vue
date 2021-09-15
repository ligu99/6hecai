<template>
    <div id="app">
        <div id="nav">
            <p class="sixtitle">
                六合彩
                <span>MarkSix</span>
            </p>
            <router-link to="/">首页</router-link> |
            <router-link to="/record">开奖记录</router-link> |
            <router-link to="/trend">走势</router-link> |
            <router-link to="/selectcode">选号</router-link>
        </div>
        <router-view />
    </div>
</template>

<style lang="scss">
p,
h1 {
    margin: 0;
}
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

#nav {
    width: 960px;
    padding: 20px 0px;
    margin: auto;
    position: relative;
    .sixtitle {
        position: absolute;
        left: 0;
        top: 0;
        font-size: 36px;
        span {
            font-size: 14px;
            color: #ccc;
        }
    }

    a {
        font-weight: bold;
        color: #2c3e50;
        padding: 0px 10px;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
</style>
