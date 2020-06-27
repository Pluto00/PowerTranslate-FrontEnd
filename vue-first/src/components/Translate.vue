<template>
  <el-container>
    <el-aside style="width: 200px;margin-top: 20px">
      <switch></switch>
      <Message></Message>
    </el-aside>
    <el-main>
      <HomePage></HomePage>
    </el-main>
  </el-container>
</template>

<script>
import HomePage from './translate/HomePage'
import Message from './translate/Message'
export default {
    name: 'Translate',
    components: { Message, HomePage }
}
</script>

<style scoped>
</style>
