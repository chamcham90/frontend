<template>
  <footer class="max-w-screen-xl px-8 mx-auto">
    <div class="w-full border-y border-[#DDDDDD]">
      <div class="grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
        <div
          class="md:w-full lg:w-full w-full sm:w-1/2 xl:w-fit flex flex-col sm:flex-row sm:px-6 py-6 sm:py-12 sm:space-x-10 sm:border-r-0 border-[#DDDDDD]"
        >
          <div class="sm:hidden xl:block mb-6 sm:mb-0">
            <a href="/">
              <img :src="require('~/assets/img/logo/nefa.svg')" class="w-24 -mt-2" alt="Nefa Logo" />
            </a>
          </div>
          <ul class="space-y-4">
            <NavLink name="인스타" url="" />
            <NavLink name="유튜브" url="" />
          </ul>
        </div>
        <div
          class="md:w-full lg:w-full lg:border-r w-full sm:w-1/2 xl:w-fit sm:px-16 py-6 sm:py-12 border-t sm:border-t xl:border-r border-[#DDDDDD]"
        >
          <ul class="space-y-4">
            <NavLink name="카카오톡" url='https://open.kakao.com/o/svJzkzqg' />
<!--            <NavLink name="라인" url="" />-->
          </ul>
        </div>
        <div
          class="md:w-full md:border-t lg:w-full w-full sm:w-1/2 xl:w-fit sm:px-16 py-6 sm:py-12 border-t sm:border-t-0 sm:border-r-0 border-[#DDDDDD]"
        >
          <ul class="space-y-4">
            <NavLink name="도움말" url="" />
          </ul>
        </div>
      </div>
    </div>
    <div class="py-8 sm:py-4 text-center text-sm text-[#666666] hover:text-gray-900">
<!--      &copy; Copyright 2022 NEFA LLC. All rights reserved-->
    </div>
    <div class="py-8 sm:py-4 text-center text-sm text-[#666666] hover:text-gray-900">
      <a href="https://www.naver.com" target="_blank">support_you@naver.com</a>
    </div>
    <div class="py-8 sm:py-4 text-center text-sm text-[#666666] hover:text-gray-900">
      <a href="http://www.freepik.com" target="_blank">Image by jcomp on Freepik</a>
    </div>
  </footer>
</template>
<script>
export default {
  methods: {
    async saveContactEmailSubmit () {
      try {
        // FormData 객체 생성
        const formData = new FormData()
        formData.append('contactEmail', this.contactEmail)
        // Axios를 사용한 POST 요청
        const response = await this.$axios.post('/two/email', formData, {
          headers: {
            'Content-Type': 'application/json'
          }
        })

        if (response.status === 200) {
          if (response.data.msg) {
            alert(response.data.msg)
          }
          this.$router.push('/')
        } else {
          alert(response.data.errorMessage) // response 객체에서 오류 메시지 접근 방식 확인 필요
        }
      } catch (error) {
        console.error('Login error:', error)
        alert('저장중 오류가 발생하였습니다.')
      }
    }
  },
  name: 'BaseFooter',
  data () {
    return {
      contactEmail: ''
    }
  }
}
</script>
