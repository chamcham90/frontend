<template>
  <li class="w-full">
    <a
      class="md:px-4 py-2 text-sm bg-transparent rounded-lg text-[#666666] hover:text-gray-900 focus:outline-none focus:shadow-outline whitespace-nowrap"
      :href="url"
      @click.prevent="handleClick"
    >
      {{ name }}
    </a>
  </li>
</template>

<script>
export default {
  methods: {
    goNoLink () {
      alert('아직 준비중입니다.')
    },
    handleClick () {
      if (this.url === '') {
        this.goNoLink()
      } else {
        location.href = this.url
      }
    }
  },
  props: {
    name: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true
    }
  }
}
</script>
