<template>
<div id="app">
    <body id="main">
        <!-- <img src="./assets/logo.png"> -->
        <router-view />
    </body>
</div>
</template>

<script>
export default {
    name: 'App'
}
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

#main {
    background: url('./assets/eva.jpg') no-repeat;
    background-position: center;
    height: 100%;
    width: 100%;
    background-size: cover;
    position: fixed;
}
body {
    margin: 0px;
}
</style>
