<template>
  <form
    class="add-form"
    @submit.prevent.enter="updateSearch"
  >
    <div class="add-form-group">
      <basic-input
        v-model="searchQuery"
        contentClass="add-form-input"
        placeholder="Введите название города"
      />
    </div>
    <basic-button
      contentClass="add-form-btn"
    >
      Добавить город
    </basic-button>
  </form>
</template>

<script>
export default {
  name: 'addCityForm',
  props: {
    modelValue: {
      type: String,
      default: ''
    }
  },
  emits: ['update:modelValue'],

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
  position: relative;

  &-input {
    padding: 10px;
    border: 1px solid green;
    border-radius: 4px;
    font-size: 14px;
  }

  &-group {
    width: calc(100% - 100px);
    display: flex;
    flex-wrap: wrap;
    position: relative;
  }

  &-btn {
    margin: 0 0 0 auto;
    padding: 10px;
    border-radius: 4px;
  }
}
</style>
