<template>
  <div class="w-full flex p-5 mt-3 items-center px-5 py-3 border border-[#0c66ee] rounded-xl">
    <div class="label-name text-sm font-medium px-5 py-3 text-[#0c66ee] border-r border-[#0c66ee] w-1/3 min-w-[150px]">
      <span > {{ labelName }} </span>
    </div>
    <div class="text-sm font-medium p-5 py-3 text-[#0c66ee]">
      <span> {{ labelValue }} </span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ProjectTextBox',
  inheritAttrs: false,
  props: {
    labelName: {
      type: String,
      required: true
    },
    labelValue: {
      type: String,
      required: true
    }
  }
}
</script>
<style>
</style>
