<template>
  <input
    type="text"
    :value="modelValue"
    :class="`basic-input ${contentClass}`"
    :placeholder="placeholder"
    @input="$emit('update:modelValue', $event.target.value)"
  >
</template>

<script>
export default {
  name: 'BasicInput',
  props: {
    modelValue: {
      type: String,
      required: false,
      default: ''
    },
    contentClass: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    }
  },
  emits: ['update:modelValue']
}
</script>

<style lang="scss" scoped>
.basic-input {
  width: 100%;
  &:focus-visible {
    outline: transparent;
  }
}
</style>
