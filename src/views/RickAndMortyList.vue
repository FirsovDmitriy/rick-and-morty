<template>
  <div>list</div>
  <div class="character-showcase">
    <character-card
      v-for="character in characters" :key="character.id"
      :character="character"
    />
  </div>
</template>

<script>
import CharacterCard from '@/components/CharacterCard'

import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'rick-and-morty-list',

  components: {
    CharacterCard
  },

  data () {
    return {
      currentPage: 1
    }
  },

  methods: {
    ...mapActions([
      'getCharacters'
    ])
  },

  computed: {
    ...mapGetters([
      'getCharacterByPage'
    ]),

    characters () {
      return this.getCharacterByPage(this.currentPage)
    }
  },

  mounted () {
    this.getCharacters(this.currentPage)
  }
}
</script>

<style scoped>
.character-showcase {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(calc(33.333% - 60px), 1fr));
  row-gap: 30px;
  column-gap: 30px;
}
</style>
