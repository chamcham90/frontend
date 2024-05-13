<template>
  <div class="flex flex-col">
    <div class="flex items-center space-x-4">
      <div class="lg:max-w-[1600px] w-full flex items-center relative px-5 py-3 border border-[#0c66ee] rounded-xl">
        <span class="lg:max-w-[80px] text-sm font-medium p-5 py-3 text-[#0c66ee] border-r border-[#0c66ee]"> {{ labelName }} </span>
        <span class="w-full text-sm font-medium p-5 py-3 text-[#0c66ee]"> {{ labelValue }} </span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ProjectTextBox',
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
