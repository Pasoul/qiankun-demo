<template>
  <div id="app1 sub_app">
    这是app1 子应用
    <br />
    <!-- <router-link to="/app1/about">about</router-link> -->
    <router-view/>
    <div class="attach-upload-wrap">
      <div class="attach-upload-body">
        <div class="upload-file-item" @click="chooseFile">
          <div class="upload-file-text">
            <i class="el-icon-paperclip"></i><span>添加附件</span>
          </div>
        </div>
      </div>
      <!--  上传  -->
      <input ref="file" type="file" @change="uploadFile" />
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex';
function convertUint8ArrayToBinaryString(u8Array) {
  let i
  const len = u8Array.length
  let bStr = ''
  for (i = 0; i < len; i++) {
    bStr += String.fromCharCode(u8Array[i])
  }

  return bStr
}
export default {
  name: 'App',
  methods: {
    chooseFile() {
      this.$refs.file.click()
    },
    uploadFile(e) {
      // 将选择的文件转成数组格式
      let { files } = e.target
      files = [].slice.call(files, 0)
      // 清空
      this.$refs.file.value = ''
      const fileReader = new FileReader()
      fileReader.readAsArrayBuffer(files[0])
      const _startTime = Date.now()
      fileReader.onload = () => {
        console.log('开始转换');
        const fileReaderResult = fileReader.result
        const bytes = new window.Uint8Array(fileReaderResult)
        convertUint8ArrayToBinaryString(bytes)
        console.log('转换结果耗时', Date.now() - _startTime)
      }
    },
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
