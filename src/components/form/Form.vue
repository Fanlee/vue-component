<!--
 * @Author: lihuan
 * @Date: 2023-04-23 17:10:05
 * @LastEditors: lihuan
 * @LastEditTime: 2023-04-24 10:52:03
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
  provide() { 
    return {
      form:this
    }
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
  methods: {
    resetFields() { 
      this.fields.forEach(field => { 
        field.resetField()
      })
    },
    validate(callback) {
      return new Promise(resolve => {
        let valid = true;
        let count = 0;
        this.fields.forEach(field => { 
          field.validate('', errors => { 
            if (errors) { 
              valid = false
            }
            if (++count === this.fields.length) { 
              resolve(valid);
              if (typeof callback === 'function') {
                callback(valid);
              }
            }
          })
        })
       }) 
    }
  }
};
</script>

<style  scoped>
</style>
