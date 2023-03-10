# Vue Script

## 基础用法

基础的按钮用法。

:::demo 使用`type`、`plain`、`round`和`circle`属性来定义 Button 的样式。
```vue
<template>
  <n-space>
    <n-button>Default</n-button>
    <n-button @click="onSubmit" type="tertiary">
      Tertiary
    </n-button>
    <n-button @click="onSubmit" type="primary">
      Primary
    </n-button>
    <n-button @click="onSubmit" type="info">
      Info
    </n-button>
    <n-button @click="onSubmit" type="success">
      Success
    </n-button>
    <n-button @click="onSubmit" type="warning">
      Warning
    </n-button>
    <n-button @click="onSubmit" type="error">
      Error
    </n-button>
  </n-space>
  <div style="margin-top: 16px">输出内容：{{ content }}</div>
</template>

<script>
import { ref, defineComponent } from 'vue'

export default defineComponent({
  name: 'InputDemo',
  setup() {
    const input = ref(1)
    const content = ref(1)

    function onSubmit() {
      content.value += input.value
    }

    return { input, content, onSubmit }
  }
})
</script>

<style lang="scss" scoped>
.n-input {
  border-radius: 1px;
}
</style>
```
:::

## Setup TypeScript 用法

setup typescript 用法。

:::demo 使用`type`、`plain`、`round`和`circle`属性来定义 Button 的样式。

```vue
<template>
  <n-space>
    <n-button>Default</n-button>
    <n-button @click="onSubmit" type="tertiary">
      Tertiary
    </n-button>
    <n-button @click="onSubmit" type="primary">
      Primary
    </n-button>
    <n-button @click="onSubmit" type="info">
      Info
    </n-button>
    <n-button @click="onSubmit" type="success">
      Success
    </n-button>
    <n-button @click="onSubmit" type="warning">
      Warning
    </n-button>
    <n-button @click="onSubmit" type="error">
      Error
    </n-button>
  </n-space>
  <div style="margin-top: 16px">输出内容：{{ content }}</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

interface IObject {
  [k: string]: any
}

const input = ref<any>(1)
const content = ref<any>(1)

function onSubmit() {
  content.value += input.value
}
</script>

<style lang="scss" scoped>
.el-input {
}
</style>
```

:::
