<!--
 * @Author: lihuan
 * @Date: 2023-04-23 17:10:05
 * @LastEditors: lihuan
 * @LastEditTime: 2023-04-23 17:58:22
 * @Description: 
-->
<template>
  <form>
    <slot></slot>
  </form>
</template>

<script>
export default {
  name: "iForm",
  props: {
    model: {
      type: Object,
    },
    rules: {
      type: Object,
    },
  },
  data() {
    return {
      fields: [],
    };
  },
  created() {
		this.$on("on-form-item-add", (field) => {
      if (field) this.fields.push(field);
		});
		this.$on('on-form-item-remove', (field) => { 
			 if (field.prop) this.fields.splice(this.fields.indexOf(field), 1);
		})
	},
	mounted() { 
		console.log(this.fields)
	}
};
</script>

<style  scoped>
</style>
