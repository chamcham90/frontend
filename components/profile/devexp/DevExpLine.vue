<template>
  <div class="container mx-auto p-4">
    <div class="flex flex-col md:flex-row md:items-center w-full">
      <div class="flex items-center w-full md:w-1/5 mb-4 md:mb-0">
        <img :src="iconSrc" alt="Icon" class="w-16 h-16 object-cover md:w-16 md:h-16"/>
        <span class="ml-4 font-bold text-lg md:text-xl">{{ labelName }}</span>
      </div>
      <div class="w-full md:w-4/5">
        <div class="bg-gray-200 rounded-full h-4 mb-4">
          <div class="bg-blue-600 h-4 rounded-full transition-all duration-1000" :style="{ width: progressBarWidth + '%' }"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import aosMixin from '~/mixins/aos'
export default {
  name: 'DevExpLine',
  mixins: [aosMixin],
  props: {
    labelName: {
      type: String,
      default: () => ('라벨'),
      require: true
    },
    labelIcon: {
      type: String,
      default: () => (''),
      require: true
    },
    labelProgress: {
      type: Number,
      default: 0,
      require: true
    }
  },
  data () {
    return {
      progressBarWidth: 0, // 초기 progress bar 값
      targetProgressBarWidth: this.labelProgress, // 목표 progress bar 값
      iconSrc: ''
    }
  },
  mounted () {
    // 특정 값을 초기 셋팅하여 progress bar가 차오르도록 설정
    this.animateProgressBar(this.targetProgressBarWidth) // 예: 70%
    // labelIcon에 따라 이미지 경로 설정
    this.setIconSrc(this.labelIcon)
  },
  methods: {
    setProgressBar (value) {
      if (value >= 0 && value <= 100) {
        this.progressBarWidth = value
      } else {
        console.error('Progress value must be between 0 and 100')
      }
    },
    animateProgressBar (targetValue) {
      let currentValue = 0
      const step = targetValue / 100 // 애니메이션 단계

      const interval = setInterval(() => {
        if (currentValue < targetValue) {
          currentValue += step
          this.progressBarWidth = currentValue
        } else {
          clearInterval(interval)
          this.progressBarWidth = targetValue // 정확한 목표값으로 설정
        }
      }, 10) // 10ms마다 업데이트
    },
    setIconSrc (fileName) {
      try {
        this.iconSrc = require(`~/assets/img/lang-icon/${fileName}.png`)
      } catch (e) {
        console.error(`Image not found: ${fileName}`)
      }
    }
  }
}
</script>
