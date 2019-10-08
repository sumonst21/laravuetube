import Vue from 'vue'
import Vuex from 'vuex'
import Api from '@/services/api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    videos: [],
    tags: []
  },
  mutations: {
    SET_VIDEOS(state, videos) {
      state.videos = videos;
    },
    SET_TAGS(state, tags) {
      state.tags = tags;
    }
  },
  actions: {
    async loadVideos({commit}){
      let response = await Api().get('/videos');
      let videos = response.data.videos
      let tags = response.data.tags
      videos.forEach(v => {
        v.tags.forEach(u => {
          //get tags for each video
          u.pivot.tag_id = tags.id
        })
      })
      tags.forEach(t => {
        t.videos.forEach(w => {
          w.pivot.video_id = videos.id
        })
      })
      commit('SET_VIDEOS', videos.map(v => v)); 
      commit('SET_TAGS', tags);

    }
  },
  modules: {
  }
})
