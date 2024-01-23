// PageOne.vue
<template>
  <div>
    <h1>{{ title }}</h1>
    <input v-model="title" />
    <button @click="changeTitle">Change Title</button>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'PageOne',
  setup() {
    const title = ref('Page One')

    function changeTitle() {
      title.value = 'New Title'
    }

    return {
      title,
      changeTitle
    }
  }
}
</script>
