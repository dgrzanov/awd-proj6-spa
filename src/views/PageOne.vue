// PageOne.vue
<template>
  <div>
    <h1>{{ uppercasedTitle }}</h1>
    <input v-model="title" />
    <button @click="resetTitle">Reset Title</button>
  </div>
</template>

<script>
import { ref, computed } from 'vue'

export default {
  name: 'PageOne',
  methods: {
    resetTitle() {
      this.title = 'Page One'
    }
  },
  setup() {
    const title = ref('Page One')

    const uppercasedTitle = computed(() => {
      return title.value.toUpperCase()
    })

    return {
      title,
      uppercasedTitle
    }
  }
}
</script>
