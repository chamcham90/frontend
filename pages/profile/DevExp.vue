<template>
  <div>
    <DevExpLine
      label-name='[9Y] SPRING'
      label-icon='spring'
      :label-progress=95
    >
    </DevExpLine>
    <DevExpLine
      label-name='[6M] FLUTTER'
      label-icon='flutter'
      :label-progress=6
    >
    </DevExpLine>
    <DevExpLine
      label-name='[5Y] JQUERY'
      label-icon='jquery'
      :label-progress=50
    >
    </DevExpLine>
    <DevExpLine
      label-name='[1M] VUE'
      label-icon='vue'
      :label-progress=2
    >
    </DevExpLine>
    <DevExpLine
      label-name='[1Y] Git'
      label-icon='git'
      :label-progress=10
    >
    </DevExpLine>
  </div>
</template>
<script>
import DevExpLine from '~/components/profile/devexp/DevExpLine'
import aosMixin from '~/mixins/aos'
export default {
  name: 'ProfileDevExp',
  mixins: [aosMixin],
  components: { DevExpLine }
}
</script>
