// App.vue
<template>
  <Navbar />
  <router-view @changeTitle="handleTitleChange"></router-view>
</template>

<script>
import Navbar from './components/Navbar.vue'
import { ref } from 'vue'

export default {
  name: 'App',
  components: { Navbar },
  setup() {
    const title = ref('My App')

    const handleTitleChange = (newTitle) => {
      title.value = newTitle
      console.log('Title changed to: ', newTitle)
    }

    return {
      handleTitleChange,
      title
    }
  }
}
</script>
