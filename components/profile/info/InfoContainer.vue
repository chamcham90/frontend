<template>
  <div class="bg-white shadow-lg rounded-lg overflow-hidden">
    <!-- Background Image -->
    <div
      class="bg-cover bg-center h-32 w-full"
      :style="{ backgroundImage: `url(${profileInfo.bannerImgSrc})`, backgroundSize: 'cover', backgroundPosition: 'center' }">
    </div>
    <!-- Profile Image and Info -->
    <div class="p-4">
      <div class="flex items-center">
        <div
          class="bg-cover bg-center h-32 w-1/2 rounded-full"
          :style="{ backgroundImage: `url(${profileInfo.circleImgSrc})`, backgroundSize: 'cover', backgroundPosition: 'center' }">
        </div>
        <div class="ml-4">
          <h2 class="text-lg font-semibold">{{ profileInfo.titleTxt }}</h2>
          <p class="text-gray-600">{{ profileInfo.subTitleTxt }}</p>
        </div>
      </div>

      <!-- Additional Information -->
      <div class="mt-4 h-24 overflow-hidden">
        <p class="text-gray-600">
          {{ profileInfo.bodyTxt }}
        </p>
      </div>
    </div>

    <!-- Contact Information -->
    <div class="p-4 border-t border-gray-200">
      <div class="flex items-center justify-between text-sm text-gray-600">
        <a :href="profileInfo.footerHref">{{ profileInfo.footerTxt}}</a>
<!--        <a href="mailto:johndoe@example.com" class="hover:text-blue-500">johndoe@example.com</a>-->
<!--        <a href="tel:+1234567890" class="hover:text-blue-500">+1 234 567 890</a>-->
      </div>
    </div>
  </div>
</template>
<script>
import aosMixin from '~/mixins/aos'
export default {
  name: 'InfoContainer',
  components: { },
  mixins: [aosMixin],
  props: {
    profileInfo: {
      type: Object,
      default: () => ({
        bannerImgSrc: 'https://via.placeholder.com/400x200',
        circleImgSrc: '',
        titleTxt: 'title',
        subTitleTxt: 'subtitle',
        bodyTxt: 'bodyTxt',
        footerTxt: 'footerTxt',
        footerHref: 'https://naver.com'
      }),
      required: true
    }
  }
}
</script>
