<template>
  <form class="add-form" @submit.prevent.enter="updateSearch">
    <div class="add-form-group">
      <input
        v-model="searchQuery"
        class="add-form-input"
        type="text"
        placeholder="Введите название города"
      >
    </div>
    <button class="add-form-btn" type="submit">Добавить город</button>
  </form>
</template>

<script>
export default {
  name: 'addCityForm',
  props: {
    modelValue: {
      type: String,
      default: '',
      required: true
    }
  },

  data () {
    return {
      searchQuery: ''
    }
  },

  methods: {
    updateSearch () {
      if (this.searchQuery) {
        this.$emit('update:modelValue', this.searchQuery.toLowerCase())
        this.searchQuery = ''
      } else {
        return false
      }
    }
  }
}
</script>

<style scoped lang="scss">
.add-form {
  background: #fff;
  border-radius: 4px;
  margin: 0 auto;
  padding: 25px;
  max-width: 550px;
  display: flex;
  align-items: flex-start;

  &-input {
    width: 100%;
    cursor: pointer;
    padding: 10px;
    border: 1px solid green;
    border-radius: 4px;
    font-size: 14px;

    &:focus-visible {
      outline: transparent;
    }
  }

  &-group {
    width: calc(100% - 100px);
    display: flex;
    flex-wrap: wrap;
    position: relative;
  }

  &-error {
    display: block;
    padding: 0 10px 0 0;
    width: 100%;
    position: absolute;
    color: red;
    font-size: 14px;
    left: 0;
    bottom: -22px;
  }

  &-btn {
    margin: 0 0 0 auto;
    padding: 10px;
    min-width: 145px;
    background-color: green;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color .4s ease;

    &:hover {
      background-color: darkgreen;
    }

    &:active {
      box-shadow: inset 1px 1px 1px rgba(0, 0, 0, 0.3);
    }
  }
}
</style>
