import { defineStore } from 'pinia'
import { ref } from 'vue'

const userDefaults = {
  name: 'Oisin Conolly',
  email: 'oisin@example.com'
}

export const useUserStore = defineStore('user', () => {
  const profile = ref(userDefaults)

  function getUser() {
    // @TODO implement
  }

  return { profile, getUser }
})
