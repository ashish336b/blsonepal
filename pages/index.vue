<template>
  <div>
    <Carousel />
    <Causes />
    <Help />
    <Volunteers />
  </div>
</template>

<script>
import Carousel from "@/components/index/Carousel";
import Causes from "@/components/index/Causes";
import Help from "@/components/index/Help";
import Volunteers from "@/components/index/Volunteers";
export default {
  components: {
    Carousel,
    Causes,
    Help,
    Volunteers
  }
};
</script>

<style>
</style>
