<!--
 * @Author: lihuan
 * @Date: 2023-04-24 13:55:34
 * @LastEditors: lihuan
 * @LastEditTime: 2023-04-24 15:06:06
 * @Description: 
-->
<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
import { findComponentsDownward } from "../../utils/assist.js";
import Emitter from "../../mixins/emitter.js";
export default {
  name: "iCheckboxGroup",
  mixins: [Emitter],
  props: {
    value: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      currentValue: this.value,
      childrens: [],
    };
  },
  mounted() {
    this.updateModel(true);
  },
  methods: {
    updateModel(update) {
      this.childrens = findComponentsDownward(this, "iCheckbox");
      if (this.childrens) {
        const { value } = this;
        this.childrens.forEach((child) => {
          child.model = value;
          if (update) {
            child.currentValue = value.indexOf(child.label) >= 0;
            child.group = true;
          }
        });
      }
    },
    change(data) {
      this.currentValue = data;
      this.$emit("input", data);
      this.$emit("on-change", data);
      this.dispatch("iFormItem", "on-form-change", data);
    },
  },
  watch: {
    value() {
      this.updateModel(true);
    },
  },
};
</script>

<style  scoped>
</style>