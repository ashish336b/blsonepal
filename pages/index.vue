<template>
  <div>
    <Carousel />
    <Causes />
    <Help />
    <Volunteers />
    <Event />
    <Blogs />
    <Sponsors />
  </div>
</template>

<script>
import Carousel from "@/components/index/Carousel";
import Causes from "@/components/index/Causes";
import Help from "@/components/index/Help";
import Volunteers from "@/components/index/Volunteers";
import Event from "@/components/index/Event";
import Blogs from "@/components/index/Blogs";
import Sponsors from "@/components/index/Sponsors";

export default {
  components: {
    Carousel,
    Causes,
    Help,
    Event,
    Volunteers,
    Blogs,
    Sponsors
  }
};
</script>

<style>
</style>
