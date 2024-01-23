// store/index.js
import { createPinia } from 'pinia'

export const useStore = createPinia({
  id: 'main',
  state: () => ({
    title: 'My App'
  }),
  actions: {
    changeTitle(newTitle) {
      console.log('Kliknuo si na dugme')
      this.title = newTitle
    }
  }
})
