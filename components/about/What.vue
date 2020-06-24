<template>
  <div class="row py-5 my-5">
    <div class="col-12 text-center">
      <h1 class="mb-0">
        WHAT WE
        <span>DO</span>
      </h1>
      <Separator />
      <p class="mb-5">
        We create events aiming to pear to the voice for children and gather for support.
        Please update with our events and confirm you presence.
      </p>
    </div>

    <div class="col-12 col-sm-12 col-md-4 what-we-do-container py-4" v-for="i in 3" :key="i">
      <div class="what-we-do text-center mx-4">
        <h5 class="text-white">DONATE FOR EDUCATION</h5>
      </div>
    </div>
  </div>
</template>

<script>
import Separator from "@/components/UI/Separator";

export default {
  components: {
    Separator
  }
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/elements.scss";

.what-we-do-container {
  display: table;
  background-image: url(http://via.placeholder.com/370x300);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  .what-we-do {
    height: 300px;
    background-color: rgba(10, 170, 160, 0.63);
    display: table-cell;
    vertical-align: middle;
  }
}
</style>