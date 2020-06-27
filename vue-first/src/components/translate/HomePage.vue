<template>
  <div class="translate">
    <el-row>
      <el-col :span="2.9">
        <div class="grid-content bg-purple-dark">
          <el-dropdown @command="handleCommand">
            <el-button class="select-button">
              <span class="el-dropdown-link">
                翻译路径选择
                <i class="el-icon-arrow-down el-icon--right"></i>
              </span>
            </el-button>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="zh">中文</el-dropdown-item>
              <el-dropdown-item command="jp">日文</el-dropdown-item>
              <el-dropdown-item command="en">英文</el-dropdown-item>
              <el-dropdown-item command="clear" divided>清空</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-col>
      <el-col :span="12">
        <el-input placeholder="默认翻译路径:zh-en-zh-jp-zh" v-model="translate_route"></el-input>
      </el-col>
      <el-col :span="2" class="submit-button">
        <el-button @click="submit" type="primary">开始翻译</el-button>
      </el-col>
    </el-row>
    <el-form id="loadding-form">
      <el-row>
        <el-col :span="12">
          <div class="grid-content bg-purple">
            <el-input
              :autosize="{ minRows: 10, maxRows: 20}"
              autofocus="true"
              placeholder="请输入待翻译的内容"
              resize="none"
              type="textarea"
              v-model="input"
            ></el-input>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="grid-content bg-purple-light">
            <el-input
              :autosize="{ minRows: 10, maxRows: 20}"
              :readonly="true"
              resize="none"
              type="textarea"
              v-model="result"
            ></el-input>
          </div>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script>
import { Loading } from 'element-ui'

export default {
    name: 'HomePage',
    data () {
        return {
            input: '',
            result: '',
            translate_route: '',
            loading: false
        }
    },
    methods: {
        handleCommand (command) {
            if (this.translate_route !== '') {
                this.translate_route += '-'
            }
            this.translate_route += command
            this.$message('添加路径 ' + command)
            if (command === 'clear') {
                this.translate_route = ''
            }
        },
        submit () {
            let loadingInstance = Loading.service({ target: '#loadding-form' })
            if (this.input === '') {
                this.$alert('输入不能为空', '警告', {
                    confirmButtonText: '确定',
                    callback: () => {
                        loadingInstance.close()
                    }
                })
                return
            }
            this.$axios
                .post('/translate', {
                    input: this.input,
                    translate_route: this.translate_route === '' ? 'zh-en-zh-jp-zh' : this.translate_route
                })
                .then(successResponse => {
                    if (successResponse.data.code === 2000) {
                        this.result = successResponse.data.data
                    }
                })
                .catch(failResponse => {
                    this.result = '系统繁忙！！！请稍后再试一下QAQ'
                })
                .then(() => {
                    loadingInstance.close()
                })
        }
    }
}
</script>

<style scoped>
.el-row {
    margin-bottom: 20px;
}
.el-col {
    border-radius: 4px;
}
.bg-purple-dark {
    background: #ffffff;
}
.bg-purple {
    background: #ffffff;
}
.bg-purple-light {
    background: #ffffff;
}
.grid-content {
    border-radius: 4px;
    min-height: 36px;
}

.el-dropdown-link {
    cursor: pointer;
    color: #409eff;
}

.el-icon-arrow-down {
    font-size: 12px;
}

.translate {
    width: 80%;
    height: 50%;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    margin: auto;
}
</style>
