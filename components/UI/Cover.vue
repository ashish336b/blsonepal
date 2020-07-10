<template>
  <!-- 1920x350 -->
  <div :style="`background-image:url(${image})`" class="cover">
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
  props: ["image", "current"]
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