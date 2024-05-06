<template>
  <footer class="max-w-screen-xl px-8 mx-auto">
    <div class="w-full border-y border-[#DDDDDD]">
      <div class="grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
        <div
          class="md:w-full lg:w-full w-full sm:w-1/2 xl:w-fit flex flex-col sm:flex-row sm:px-6 py-6 sm:py-12 sm:space-x-10 sm:border-r-0 border-[#DDDDDD]"
        >
          <div class="sm:hidden xl:block mb-6 sm:mb-0">
            <a href="#">
              <img :src="require('~/assets/img/logo/nefa.svg')" class="w-24 -mt-2" alt="Nefa Logo" />
            </a>
          </div>
          <ul class="space-y-4">
            <NavLink name="인스타" url="#" />
            <NavLink name="유튜브" url="#" />
          </ul>
        </div>
        <div
          class="md:w-full lg:w-full lg:border-r w-full sm:w-1/2 xl:w-fit sm:px-16 py-6 sm:py-12 border-t sm:border-t xl:border-r border-[#DDDDDD]"
        >
          <ul class="space-y-4">
            <NavLink name="카카오톡" url="#" />
            <NavLink name="라인" url="#" />
          </ul>
        </div>
        <div
          class="md:w-full md:border-t lg:w-full w-full sm:w-1/2 xl:w-fit sm:px-16 py-6 sm:py-12 border-t sm:border-t-0 sm:border-r-0 border-[#DDDDDD]"
        >
          <ul class="space-y-4">
            <NavLink name="도움말" url="#" />
            <NavLink name="연락방법" url="#" />
            <NavLink name="경력" url="#" />
          </ul>
        </div>
        <div
          class="md:w-full md:border-t lg:w-full sm:px-10 py-6 sm:py-12 w-full sm:w-1/2 xl:w-[22rem] space-y-4 sm:border-t border-[#DDDDDD]"
        >
          <h5 class="text-sm font-medium text-[#666666] focus:outline-none focus:shadow-outline">연락처남기기</h5>
          <p class="text-sm text-[#666666] focus:outline-none focus:shadow-outline">
            연락처를 남겨주시면 <br class="sm:hidden" /> 24시간 내로 연락드리겠습니다
          </p>
          <div class="items-center space-x-0">
            <input
              type="text"
              class="w-full px-2 py-4 sm:py-3 rounded-lg sm:rounded-md text-sm focus:outline-none border border-[#AAAAAA] placeholder-[#888]"
              placeholder="이메일 입력"
            />
            <button
              class="w-full bg-blue-gradient px-4 py-4 sm:py-3 rounded-md text-white hover:shadow-md transition duration-300"
            >
              전송
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="py-8 sm:py-4 text-center text-sm text-[#666666] hover:text-gray-900">
<!--      &copy; Copyright 2022 NEFA LLC. All rights reserved-->
    </div>
    <div class="py-8 sm:py-4 text-center text-sm text-[#666666] hover:text-gray-900">
      <a href="https://www.freepik.com/free-psd/3d-character-young-people-with-business-concept_27305556.htm#fromView=search&page=1&position=0&uuid=d9f04303-7fac-4b5c-9118-64dcec0e5c4f">Image by jcomp on Freepik</a>
    </div>
  </footer>
</template>
<script>
export default {
  name: 'BaseFooter'
}
</script>
