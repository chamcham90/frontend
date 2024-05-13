<template>
  <div class="w-full flex p-5 mt-3 items-center px-5 py-3 border border-[#0c66ee] rounded-xl">
    <div class="label-name text-sm font-medium p-5 py-3 text-[#0c66ee] border-r border-[#0c66ee]">
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
.label-name {
  width: 150px; /* 원하는 고정 너비를 설정하세요 */
}
</style>
