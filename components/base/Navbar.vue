<template>
  <nav id="navbar" class="fixed top-0 left-0 w-full bg-white shadow z-10">
    <div class="flex flex-col max-w-screen-xl px-8 mx-auto lg:items-center lg:justify-between lg:flex-row py-4">
      <div class="w-full flex flex-col lg:flex-row items-center space-x-4 xl:space-x-8">
        <div class="flex flex-row items-center justify-between w-full py-6 lg:w-auto">
          <div>
            <img :src="require('~/assets/img/logo/nefa.svg')" class="w-24 xl:w-28 cursor-pointer" @click="navigateToHome"/>
          </div>
          <button class="rounded-lg lg:hidden focus:outline-none focus:shadow-outline" @click="open = !open">
            메뉴
          </button>
        </div>
        <ul :class="[open ? 'flex' : 'hidden lg:flex']"
            class="w-full lg:w-auto h-auto flex-col lg:flex-row lg:items-center pb-4 lg:pb-0 lg:justify-end lg:space-x-4 space-y-3 lg:space-y-0 origin-top duration-300"
        >
          <NavLink name="소개" url="/profile/info" />
          <NavLink name="프로젝트" url="/profile/project" />
          <NavLink name="기타정보" url="/profile/devexp" />
          <NavLink name="더보기" url="" />
          <button
            class="w-full lg:w-auto md:px-4 py-2 text-sm bg-transparent rounded-lg text-[#666666] hover:text-gray-900 focus:outline-none focus:shadow-outline flex items-center"
            @click="dropdownToggler"
            @blur="dropdownToggler"
          >
          </button>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import NavLink from '~/components/NavLink.vue'

export default {
  name: 'BaseNavbar',
  components: {
    NavLink
  },
  data () {
    return {
      open: false,
      dropdownNavbar: false
    }
  },
  methods: {
    dropdownToggler () {
      this.dropdownNavbar = !this.dropdownNavbar
    },
    navigateToHome () {
      window.location.href = '/'
    }
  }
}
</script>

<style scoped>
#navbar {
  transition: top 0.3s;
}
</style>
