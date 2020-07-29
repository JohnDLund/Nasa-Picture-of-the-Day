import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"


const _NasaApi = axios.create({
  baseURL: "https://api.nasa.gov/planetary/",
  timeout: 3000
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    activePicture: {},
  },

  mutations: {
    setActivePicture(state, pictureData) {
      state.activePicture = pictureData
    }


  },

  actions: {
    async getOnePicture({ commit, dispatch }, query) {
      try {
        let res = await _NasaApi.get("apod?api_key=psofdkxHXsFgeowYqc2TxzASh6HYp7aklKyM9Gvp&date=" + query)
        console.log(res.data)
        commit("setActivePicture", res.data)
      } catch (error) {
        console.error(error)
      }
    },

    async getRandomPicture({ commit, dispatch }, count) {
      try {
        let res = await _NasaApi.get("apod?api_key=psofdkxHXsFgeowYqc2TxzASh6HYp7aklKyM9Gvp&count=" + count)
        console.log(res.data)
        commit("setActivePicture", res.data[0])
      } catch (error) {
        console.error(error)
      }
    }


  },

  modules: {
  }
})
