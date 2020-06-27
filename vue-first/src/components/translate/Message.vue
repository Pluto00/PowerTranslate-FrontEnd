<template>
  <el-dialog :modal-append-to-body="false" :visible.sync="dialogVisible" title="使用说明" width="30%">
    <span>点击路径选择添加文档翻译的路径，也可直接在输入框中输入</span>
    <br>
    <span>默认翻译路径为：中文-英语-中文-日文-中文</span>
    <span class="dialog-footer" slot="footer">
      <el-button @click="dialogVisible = false" type="primary">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
    name: 'Message',
    data () {
        return {
            dialogVisible: true
        }
    }
}
</script>
