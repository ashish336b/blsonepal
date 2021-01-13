<template>
  <div>
    <Carousel :carousels="carousels" />
    <Causes />
    <Children />
    <Help />
    <Volunteers />
    <Event />
    <Blogs :latestPosts="latestPosts" />
    <!-- <Sponsors /> -->
  </div>
</template>

<script>
import Carousel from "@/components/index/Carousel";
import Causes from "@/components/index/Causes";
import Children from "@/components/index/Children";
import Help from "@/components/index/Help";
import Volunteers from "@/components/index/Volunteers";
import Event from "@/components/index/Event";
import Blogs from "@/components/index/Blogs";
import Sponsors from "@/components/index/Sponsors";

export default {
  data() {
    return {
      carousels: [],
      latestPosts: []
    };
  },

  mounted() {
    this.$store.commit("set");
    this.$axios
      .get("/carousels")
      .then(res => {
        this.carousels = res.data;
      })
      .catch(err => {
        console.log(err.response);
      })
      .finally(() => {
        this.$store.commit("unset");
      });

    this.$axios
      .get("/blogs")
      .then(res => {
        this.latestPosts = res.data;
      })
      .catch(err => {
        console.log(err.response);
      })
      .finally(() => {
        this.$store.commit("unset");
      });
  },

  components: {
    Carousel,
    Causes,
    Children,
    Help,
    Event,
    Volunteers,
    Blogs,
    Sponsors
  }
};
</script>

<style></style>
