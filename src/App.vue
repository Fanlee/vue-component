<!--
 * @Author: lihuan
 * @Date: 2023-04-23 17:03:49
 * @LastEditors: lihuan
 * @LastEditTime: 2023-04-23 17:15:50
 * @Description: 
-->

<template>
  <div id="app">
    <i-form :model="formValidate" :rules="ruleValidate">
      <i-form-item label="用户名" prop="name">
        <!-- <i-input v-model="formValidate.name"></i-input> -->
      </i-form-item>
      <i-form-item label="邮箱" prop="mail">
        <!-- <i-input v-model="formValidate.mail"></i-input> -->
      </i-form-item>
    </i-form>
  </div>

</template>

<script>
import iForm from './components/form/Form.vue'
import iFormItem from './components/form/FormItem.vue'

export default {
  name: 'App',
  components: { iForm, iFormItem },
  data() { 
    return {
      formValidate: {
        name: '',
        mail: ''
      },
      ruleValidate: {
        name: [
            { required: true, message: '用户名不能为空', trigger: 'blur' }
          ],
          mail: [
            { required: true, message: '邮箱不能为空', trigger: 'blur' },
            { type: 'email', message: '邮箱格式不正确', trigger: 'blur' }
          ],
      }
    }
  }
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 2s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
