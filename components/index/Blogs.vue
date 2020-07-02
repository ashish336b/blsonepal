<template>
  <div class="mb-5 py-5">
    <div class="container">
      <div class="text-center">
        <h1>
          LATEST FROM
          <span>BLOG</span>
        </h1>
        <Separator />
        <p class="mb-5">
          We create events aiming to spear the voice for children and gather for
          support Please update with our events
        </p>

        <div class="row">
          <div class="col-12 col-sm-6 col-lg-4 text-left"
            v-for="(post,id) in latestPosts.slice(0,3)"
            :key="post.id"
            :class="id===2 ? 'd-sm-none d-md-none d-lg-block' : ''">
            <Card :cardItem="post" type="post"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Separator from "@/components/UI/Separator";
import Card from "@/components/UI/Card";

export default {
  props: ['latestPosts'],
  components: {
    Separator,
    Card
  }
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/elements.scss";
.col-12 {
  margin-bottom: 32px;
}
</style>