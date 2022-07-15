<template>
  <character-filter />
  <div class="character-showcase">
    <the-preloader v-if="$store.state.preloader" />
    <character-card
      v-for="character in characters" :key="character.id"
      :character="character"
    />
  </div>
  <div class="pagination-block">
    <div class="pagination-block__button-group">
      <button @click="prevPage()" v-show="page > 1" class="pagination-block__button-prev">
        <chevron-icon class="pagination-block__icon" />
      </button>
      <button
        v-for="item in pagination" :key="item"
        @click="page = item"
        class="pagination-block__button"
        :class="{
          'pagination-block__button--active': item === page
        }"
      >
        {{ item }}
      </button>
      <button @click="nextPage()" v-show="page < pages" class="pagination-block__button-next">
        <chevron-icon class="pagination-block__chevron pagination-block__chevron--right" />
      </button>
       <button class="pagination-block__button"> {{ pages }} </button>
    </div>
  </div>
</template>

<script>
import CharacterCard from '@/components/CharacterCard'
import ThePreloader from '@/components/ThePreloader'
import ChevronIcon from '@/components/icons/ChevronIcon'
import CharacterFilter from '@/components/CharacterFilter'
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
  name: 'rick-and-morty-list',

  components: {
    CharacterCard,
    ChevronIcon,
    ThePreloader,
    CharacterFilter
  },

  data () {
    return {
      page: 1,
      count: [],
      startIndex: 0,
      endIndex: 4

    }
  },

  methods: {
    ...mapActions([
      'getCharacters'
    ]),

    prevPage () {
      this.page--
      this.startIndex--
      this.endIndex--
    },

    nextPage () {
      this.page++
      this.startIndex++
      this.endIndex++
    },

    test () {
      for (let i = 1; i <= this.pages; i++) this.count.push(i)
    }
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
      return this.count.slice(this.startIndex, this.endIndex)
    }
  },

  watch: {
    page: {
      handler (newValue) {
        this.getCharacters(newValue)
        this.test()
      },
      immediate: true
    }
  },

  mounted () {
    console.log('page', this.page, '|', 'pages', this.pages)
    this.test()
  }
}
</script>

<style scoped>
.character-showcase {
  position: relative;
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
  border: 1px solid #1867c0;
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
