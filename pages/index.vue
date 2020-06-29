<template>
  <div>
    <Carousel :carousels="carousels"/>
    <Causes />
    <Help />
    <Volunteers />
    <Blogs :latestPosts="latestPosts"/>
    <Sponsors />
  </div>
</template>

<script>
import Carousel from "@/components/index/Carousel";
import Causes from "@/components/index/Causes";
import Help from "@/components/index/Help";
import Volunteers from "@/components/index/Volunteers";
import Blogs from "@/components/index/Blogs";
import Sponsors from "@/components/index/Sponsors";

export default {
  components: {
    Carousel,
    Causes,
    Help,
    Volunteers,
    Blogs,
    Sponsors
  },

  data() {
    return {
      carousels: [],
      latestPosts: []
    }
  },

  created() {

    this.$axios.get('api/webui/home')
    .then(res => {
      this.carousels = res.data.carousels;
      this.latestPosts = res.data.latestPosts;
    })
    .catch(err => {
      console.log(err.response);
    });
    // .finally(() => {
    //   this.$store.commit("unset");
    // });
  }
};
</script>

<style>
</style>
