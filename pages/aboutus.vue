<template>
  <div>
    <Cover image="http://via.placeholder.com/1920x350" current="About Us" />
    <div class="container pt-5 mt-5">
      <About />
      <!-- <What /> -->
      <Volunteers />
    </div>
  </div>
</template>

<script>
import Cover from "@/components/UI/Cover";
import About from "@/components/about/About";
import What from "@/components/about/What";
import Volunteers from "@/components/index/Volunteers";
import Separator from "@/components/UI/Separator";

export default {
  components: {
    Cover,
    About,
    What,
    Volunteers,
    Separator,
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/elements.scss";
</style>