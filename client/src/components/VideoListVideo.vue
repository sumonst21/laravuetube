<template>
    <router-link :to="{ name: 'video-watch', params: { id: video.id }}">
        <div class="video-box">

        <img :src="video.thumbnail" />
        <div>
            <h3>{{ video.name }}</h3>
            <div v-html="video.description"></div>
            
            <span v-for="tag_id in video.tags" :key="tag_id.id">
                <router-link :to="{ name: 'tag', params: {id: tag_id.id}}">
                    <v-btn>{{tag_id.name}}</v-btn>
                </router-link>
            </span>
            
        </div>
        </div>
    </router-link>
</template>

<script>
export default {
    computed: {
        tag () {
            return this.$store.state.tags.find(tag => tag.id == this.$route.params.id) || {}
        },
    },

    props: ['video']
}
</script>

<style lang="scss" scoped>
    .video-box {
      border: 1px solid black;
      border-radius: 10px;
      margin: 10px;
      padding: 10px;
      text-align: left;
      display: flex;
      justify-content: flex-start;
      img {
        width: 200px;
        padding: 10px;
      }
    }

</style>