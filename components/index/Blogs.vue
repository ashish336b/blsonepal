<template>
  <div class="my-5 py-5">
    <div class="container">
      <div class="text-center">
        <h1>
          LATEST FROM
          <span>BLOG</span>
        </h1>
        <Separator />
        <p class="mb-5">Our post helps you keep up with what good deeds we are doing.</p>

        <div class="row">
          <div class="col-12 col-sm-6 col-lg-4 text-left">
            <Card />
          </div>
          <div class="col-12 col-sm-6 col-lg-4 text-left">
            <Card />
          </div>
          <div class="col-12 col-sm-6 col-lg-4 text-left d-sm-none d-md-none d-lg-block">
            <Card />
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