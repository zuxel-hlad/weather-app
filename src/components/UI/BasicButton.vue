<template>
<button
  :type="type"
  :class="`basic-button ${contentClass}`"
>
  <slot></slot>
</button>
</template>

<script>
export default {
  name: 'BasicButton',
  props: {
    contentClass: {
      type: String,
      required: false,
      default: ''
    },
    type: {
      type: String,
      required: false,
      default: 'button'
    }
  }
}
</script>

<style lang="scss" scoped>
.basic-button {
  min-width: 145px;
  background-color: green;
  color: #fff;
  border: none;
  cursor: pointer;
  transition: background-color .4s ease;
  &:hover {
    background-color: darkgreen;
  }
  &:active {
    box-shadow: inset 1px 1px 1px rgba(0, 0, 0, 0.3);
  }
}
</style>
