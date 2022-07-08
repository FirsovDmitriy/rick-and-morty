<template>
  <div>
    <the-navbar />
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
import TheNavbar from '@/components/TheNavbar'

export default {
  name: 'App',

  components: {
    TheNavbar
  },

  methods: {},

  computed: {
    characterById () {
      return this.$store.getters.getCharacterById({ id: 2, page: 4 })
    }
  },

  created () {
    // this.$store.dispatch('getCharacters', 2)
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.block {
  text-align: center;
}
</style>
