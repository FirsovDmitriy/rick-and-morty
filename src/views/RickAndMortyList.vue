<template>
  <div class="character-showcase">
    <character-card
      v-for="character in characters" :key="character.id"
      :character="character"
    />
  </div>
  <div class="pagination-block">
    <div class="pagination-block__button-group">
      <button @click="page--" v-show="page > 1" class="pagination-block__button-prev">
        <chevron-icon class="pagination-block__icon" />
      </button>
      <button v-show="page > 1" class="pagination-block__button"> {{ page - 1 }} </button>
      <button class="pagination-block__button pagination-block__button--active"> {{ page }} </button>
      <button class="pagination-block__button"> {{ page + 1 }} </button>
      <button @click="page++" v-show="page < pages" class="pagination-block__button-next">
        <chevron-icon class="pagination-block__chevron pagination-block__chevron--right" />
      </button>
       <button class="pagination-block__button"> {{ pages }} </button>
    </div>
  </div>
</template>

<script>
import CharacterCard from '@/components/CharacterCard'
import ChevronIcon from '@/components/icons/ChevronIcon'
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
  name: 'rick-and-morty-list',

  components: {
    CharacterCard, ChevronIcon
  },

  data () {
    return {
      page: 1
    }
  },

  methods: {
    ...mapActions([
      'getCharacters'
    ])
  },

  computed: {
    ...mapState([
      'pages'
    ]),

    ...mapGetters([
      'getCharacterByPage'
    ]),

    characters () {
      return this.getCharacterByPage(this.page)
    },

    pagination () {
      return 4
    }
  },

  watch: {
    page: {
      handler (newValue) {
        this.getCharacters(newValue)
      },
      immediate: true
    }
  },

  mounted () {
    console.log('page', this.page, '|', 'pages', this.pages)
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

.pagination-block__button-group {
  display: flex;
  justify-content: center;
}

.pagination-block__button-prev, .pagination-block__button-next, .pagination-block__button {
  font-size: 14px;
  min-width: 64px;
  height: 36px;
  padding: 0 16px;
  color: #fff;
  background-color: #1867c0;
  border: none;
}

.pagination-block__button {
  background-color: transparent;
  color: #2c3e50;
}

.pagination-block__button--active {
  background-color: navy;
  color: #fff;
}

.pagination-block__button-prev {
  margin-right: 10px;
}

.pagination-block__button-next {
  margin-left: 10px;
}

.pagination-block__chevron--right {
  transform: rotate(180deg);
}
</style>
