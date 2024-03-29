<script lang="ts" setup name="SvgIcon">
import { computed } from 'vue'
import 'iconify-icon';

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  runtime: {
    type: Boolean,
    default: false
  },
  flip: {
    type: String as () => 'horizontal' | 'vertical' | 'both' | '',
    default: ''
  },
  rotate: {
    type: Number,
    default: 0
  }
})

const outputType = computed(() => {
  if (props.name.indexOf('i-') === 0) {
    return props.runtime ? 'svg' : 'css'
  } else if (props.name.includes(':')) {
    return 'svg'
  } else {
    return 'custom'
  }
})

const outputName = computed(() => {
  if (props.name.indexOf('i-') === 0) {
    let conversionName = props.name
    if (props.runtime) {
      conversionName = conversionName.replace('i-', '')
    }
    return conversionName
  } else {
    return props.name
  }
})

const transformStyle = computed(() => {
  const style = []
  if (props.flip !== '') {
    switch (props.flip) {
      case 'horizontal':
        style.push('rotateY(180deg)')
        break
      case 'vertical':
        style.push('rotateX(180deg)')
        break
      case 'both':
        style.push('rotateX(180deg)')
        style.push('rotateY(180deg)')
        break
    }
  }
  if (props.rotate !== 0) {
    style.push(`rotate(${props.rotate % 360}deg)`)
  }
  return style.join(' ') ? `transform: ${style.join(' ')};` : ''
})
</script>

<template>
  <i v-if="outputType === 'css'" class="svg-icon" :class="outputName" :style="transformStyle" />
  <iconify-icon class="svg-icon" v-else-if="outputType === 'svg'" :icon="outputName" :style="transformStyle" />
  <svg v-else :style="transformStyle" aria-hidden="true" class="svg-icon">
    <use :xlink:href="`#icon-${outputName}`" />
  </svg>
</template>

<style lang="scss">
.svg-icon {
  width: 1em;
  height: 1em;
}
</style>
