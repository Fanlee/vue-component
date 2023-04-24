<!--
 * @Author: lihuan
 * @Date: 2023-04-23 17:03:49
 * @LastEditors: lihuan
 * @LastEditTime: 2023-04-24 15:50:59
 * @Description: 
-->

<template>
  <div id="app">
    <!-- <i-form :model="formValidate" :rules="ruleValidate" ref="form">
      <i-form-item label="用户名" prop="name">
        <i-input v-model="formValidate.name"></i-input>
      </i-form-item>
      <i-form-item label="邮箱" prop="mail">
        <i-input v-model="formValidate.mail"></i-input>
      </i-form-item>
      <i-form-item label="选择框"> -->
    <!-- <i-checkbox-group v-model="multiple">
          <i-checkbox label="option1">选项 1</i-checkbox>
          <i-checkbox label="option2">选项 2</i-checkbox>
          <i-checkbox label="option3">选项 3</i-checkbox>
          <i-checkbox label="option4">选项 4</i-checkbox>
        </i-checkbox-group> -->
    <!-- <i-checkbox v-model="single" true-value="yes" false-value="no"
          >单独选项</i-checkbox
        >
      </i-form-item>
    </i-form>
    <button @click="handleSubmit">提交</button>
    <button @click="handleReset">重置</button> -->
    <i-display :code="code" />
  </div>
</template>

<script>
import iForm from "./components/form/Form.vue";
import iFormItem from "./components/form/FormItem.vue";
import iInput from "./components/input/Input.vue";
import iCheckbox from "./components/checkbox/Checkbox.vue";
import iCheckboxGroup from "./components/checkbox/CheckboxGroup.vue";
import iDisplay from "./components/display/Display.vue";
import { data } from "./data";
export default {
  name: "App",
  components: { iForm, iFormItem, iInput, iCheckbox, iCheckboxGroup, iDisplay },
  data() {
    return {
      single: "dsdsd",
      multiple: ["option1", "option2"],
      code: data,
      formValidate: {
        name: "",
        mail: "",
        checked: false,
      },
      ruleValidate: {
        name: [{ required: true, message: "用户名不能为空", trigger: "blur" }],
        mail: [
          { required: true, message: "邮箱不能为空", trigger: "blur" },
          { type: "email", message: "邮箱格式不正确", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    handleSubmit() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          window.alert("提交成功");
        } else {
          window.alert("表单校验失败");
        }
      });
    },
    handleReset() {
      this.$refs.form.resetFields();
    },
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
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
