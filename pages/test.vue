<template>
  <div class="flex justify-between items-center gap-4 p-4">
    <router-link >/one</router-link>
    <router-link >/two</router-link>
    <router-link >/three</router-link>
  </div>
</template>
<script>
export default {
  name: 'test'
  /*
  async asyncData ({ $axios }) {
    try {
      const response = await $axios.$get('http://localhost:8080/api/helloWorld')
      return {
        testData: response.data
      }
    } catch (error) {
      console.error('API call error:', error)
      return { testData: 'Failed to fetch data' }
    }
  }
   */
}
</script>
<style scoped>
</style>
