<template>
  <div class="todoListBody">
    <div class="container">
      <div class="my-text">
        <h1>待办事项</h1>
        <el-text type="primary" @click="refreshCurrentTime">{{currentTime}}</el-text>
        <div id="currentTime"><br></div>
        <el-form-item v-for="(item,index) in this.table" :key="index">
          {{index+1}}<el-input v-model="item.todo" class="todoInput" style="display: inline-block;"></el-input>
          <el-button @click="deleteTodo(index)">删除</el-button>
        </el-form-item>
        <el-button @click="addTodo" style="margin:10px;">新增</el-button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'todoList',
    components: {
    },
    data() {
      return {
        currentTime: '',
        table: [
          {todo:'睡觉'}
        ]
      }
    },
    methods: {
      addTodo() {
        this.table.push({todo:''})
      },
      deleteTodo(index) {
        console.log(index)
        this.table.splice(index,1)
      },
      // 展示当前时间
      refreshCurrentTime() {
        let date = new Date()
        let currentDate = date.toLocaleDateString().replaceAll('/', '-')
        let currentTime = date.toLocaleTimeString()
        this.currentTime = currentDate + ' ' + currentTime
      }
    },
    mounted() {
      this.refreshCurrentTime()
      this.timer = setInterval(this.refreshCurrentTime, 1000);
    },
    beforeDestrow() {
      clearInterval(this.timer)
    }
  }
</script>

<style lang="less" scoped>
  .todoListBody {
    background-color: #282c34;
    height: 100vh;
  }
  .todoInput /deep/ .el-input__inner{
    /* background-image: linear-gradient(to right, burlywood, skyblue); */
    background-color: burlywood;
    margin: 10px;
    margin-left: 20px;
    border: 0px;
    /* 不显示input输入框边框 */
    /* outline:none; */
    font-size: 16px;
    text-shadow: 0px 0px 0px 
  }
  .container {
    /* background-image: linear-gradient(to right, #282c34, black); */
    height: 750px;
    width: 700px;
    overflow: hidden;
    margin: auto;
    border: 1px solid royalblue;
    padding: 0px;
    /* 边框角弧度 */
    border-radius: 5%;
    /* background-color: skyblue; */
    /* overflow-y: scroll; */
  }
  .my-text {
    margin: 30px;
    color: burlywood;
    font-size: 15px;
  }
  .skinColor {
    position: relative;
    text-align: right;
  }
</style>
