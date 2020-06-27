<template>
    <el-menu
        :default-active="'/index'"
        active-text-color="red"
        background-color="white"
        mode="horizontal"
        router
        style="min-width: 1300px"
        text-color="#222"
    >
        <el-menu-item :index="item.name" :key="i" v-for="(item,i) in navList">{{ item.navItem }}</el-menu-item>
        <a href="#nowhere" style="color: #222;float: right;padding: 20px;">更多功能</a>
        <i class="el-icon-menu" style="float:right;font-size: 45px;color: #222;padding-top: 8px"></i>
        <span
            style="position: absolute;padding-top: 20px;right: 43%;font-size: 20px;font-weight: bold"
        >White Jotter - Your Mind Palace</span>
    </el-menu>
</template>

<script>
export default {
    name: 'NavMenu',
    data () {
        return {
            navList: [
                { name: '/index', navItem: '首页' },
                { name: '/translate', navItem: '翻译' },
                { name: '/library', navItem: '图书馆' },
                { name: '/admin', navItem: '个人中心' }
            ]
        }
    }
}
</script>

<style scoped>
a {
    text-decoration: none;
}

span {
    pointer-events: none;
}
</style>
