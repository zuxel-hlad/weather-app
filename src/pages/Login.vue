<template>
<section class="login">
  <form
    class="login-form"
    @submit.prevent="auth"
  >
    <div class="login-form-wrapper">
      <label
        for="login"
        class="login-form-label"
      >
        Login
      </label>
      <basic-input
        v-model="loginText"
        name="login"
        id="login"
        contentClass="login-form-input"
      />
      <label
        for="pass"
        class="login-form-label"
      >
        Password
      </label>
      <basic-input
        v-model="password"
        name="password"
        id="pass"
        contentClass="login-form-input"
      />
      <basic-button
        type="submit"
        contentClass="login-form-submit"
      >
        Login
      </basic-button>
    </div>
  </form>
</section>
</template>

<script>

import { mapMutations } from 'vuex'

export default {
  name: 'Login',
  data () {
    return {
      loginText: '',
      password: ''
    }
  },
  computed: {
    isValid () {
      return this.loginText !== '' && this.password !== ''
    }
  },
  methods: {
    ...mapMutations('authModule', ['login']),
    auth () {
      if (this.isValid) {
        this.login()
      } else { return false }
    }
  }
}
</script>

<style scoped lang="scss">
.login {
  background-color: #fff;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  &-form {
    max-width: 400px;
  }
}
</style>
