// PageTwo.vue
<template>
  <div>
    <h1>{{ title }}</h1>
    <button @click="$emit('changeTitle', 'New Title')">Change Title</button>
  </div>
</template>

<script>
export default {
  name: 'PageTwo',
  props: ['title'],
  emits: ['changeTitle']
}
</script>
