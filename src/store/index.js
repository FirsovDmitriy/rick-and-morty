import { createStore } from 'vuex'
import instance from '@/api/index'
import { CHARACTERS_BY_PAGE } from '@/api/routes'

export default createStore({
  state: {
    characters: {},
    pages: 0
  },

  getters: {
    getCharacterById: (state) => ({ id, page }) => {
      const characterPage = state.characters[page]
      if (characterPage) {
        return characterPage.find(character => character.id === id)
      }
    },

    getCharacterByPage: (state) => (page) => {
      const characterPage = state.characters[page]
      return characterPage
    }
  },

  mutations: {
    setCharacters (state, { page, characters }) {
      state.characters[page] = characters
    },

    setPages (state, pages) {
      state.pages = pages
    }
  },

  actions: {
    getCharacters ({ commit }, page) {
      return instance.get(CHARACTERS_BY_PAGE(page))
        .then(({ data }) => {
          const { info, results } = data
          commit('setCharacters', { page, characters: results })
          commit('setPages', info.pages)
        })
        .catch(error => console.log(error))
    }
  },

  modules: {
  }
})
