export const data = `
<template>
  <input type="text" :value="currentValue" @input="handleInput" @blur="handleBlur" />
</template>

<script>

export default {
  name: 'iInout',
  mixins:[Emitter],
  props: {
    value: {
      type: String,
      default:''
    }
  },
  data() { 
    return {
      currentValue: this.value
    }
  },
  methods: {
    handleInput(e) {
      const value = e.target.value
      this.currentValue = value
      this.$emit('input', value)
      this.dispatch('iFormItem', 'on-form-change',value)
    },
    handleBlur() { 
      this.dispatch('iFormItem', 'on-form-blur', this.currentValue)
    }
  },
  watch: {
    value(val) { 
      this.currentValue = val
    }
  }
}
</script>

<style scoped></style>
`;
