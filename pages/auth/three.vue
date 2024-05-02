<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <input v-model="loginId" type="text" placeholder="Enter your login ID" />
      <input v-model="password" type="password" placeholder="Enter your password" />
      <button type="submit">Submit</button>
    </form>
  </div>
</template>
<script>
export default {
  name: 'loginForm',
  data () {
    return {
      loginId: 'wow160',
      password: '2024'
    }
  },
  methods: {
    async handleSubmit () {
      try {
        // FormData 객체 생성
        const formData = new FormData()
        formData.append('loginId', this.loginId)
        formData.append('password', this.password)

        // Axios를 사용한 POST 요청
        const response = await this.$axios.post('/api/three/body', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })

        if (response.status === 200) {
          this.$router.push('/auth/three')
        } else {
          alert(response.data.errorMessage) // response 객체에서 오류 메시지 접근 방식 확인 필요
        }
      } catch (error) {
        console.error('Login error:', error)
        alert('Login error!')
      }
    }
  }
}
</script>

<style scoped>

</style>
