<template>
  <!-- 1920x350 -->
  <div :style="`background-image:url(${coverImage})`" class="cover">
    <div class="jumbotron mb-0 text-center text-white">
      <h1 class="text-uppercase">{{current}}</h1>
      <p class="lead">
        <nuxt-link to="/">Home</nuxt-link>
        &nbsp;/ {{current}}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["image", "current"],

  data() {
    return {
      coverImage: 'http://via.placeholder.com/1920x350',
    }
  },

  created() {
    let page = this.current.replace(/\s+/g, '');
    this.$axios.get(`api/webui/getcoverphoto?page=${page}`)
      .then(res => {
        this.coverImage = res.data.photo_url;
      })
  }
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/elements.scss";

h1 {
  color: #fff;
}
.cover {
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

.jumbotron {
  padding-top: 6rem;
  padding-bottom: 6rem;
  background-color: rgba(0, 0, 0, 0.4);
}
</style>