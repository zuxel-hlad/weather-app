<template>
  <app-header/>
  <main>
    <router-view></router-view>
  </main>
</template>

<script>

import AppHeader from '@/components/AppHeader'

export default {
  name: 'App',
  components: { AppHeader }
}

</script>

<style>
</style>
