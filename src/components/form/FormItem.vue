<!--
 * @Author: lihuan
 * @Date: 2023-04-23 17:10:14
 * @LastEditors: lihuan
 * @LastEditTime: 2023-04-23 17:54:22
 * @Description: 
-->
<template>
  <div>
    <label v-if="label">{{ label }}</label>
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Emitter from '../../mixins/emitter.js';
export default {
  name: 'iFormItem',
  mixins:[Emitter],
  props: {
    label: {
      type: String,
      default: ''
    },
    prop: {
      type: String
    }
  },
  mounted() {
    console.log(11)
    if (this.prop) { 
      this.dispatch('iForm', 'on-form-item-add', this)
    }
  },
  beforeDestroy() { 
    this.dispatch('iForm', 'on-from-item-remove', this)
  }
}
</script>

<style  scoped>

</style>