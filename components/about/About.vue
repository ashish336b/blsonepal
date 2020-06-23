<template>
  <div class="row">
    <div class="col-12 col-lg-6">
      <div class="text-center mb-4">
        <h1 class="mb-0">
          ABOUT
          <span>US</span>
        </h1>
        <Separator />
      </div>
      <p class="text-justify">
        Lorem ipsum dolor sit amet, consectetur adipi elit. Cras mollis ligula mauris, vitae porttitor nunc maximus Integer fringilla place acLorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mauris, vitae porttitor nunc maximus a. Integer fringilla placerat leo ac bibendum. Quisque et neque eu magna cula pellentesque. Nam volutpat scelerisque tellus, vel ultrices arcu blandit vel. Curabitur semper cursus nulla, et accumsan nisl eleifend a. Integer vitae nisi quis arcu vehicula pharetra ac blandit purus.
        <br />
        <br />Etiam ut erat et nisi pulvinar accumsan. Curabitur imperdiet at sem vel elementum. Sed eget vestibulum purus. Quisque rhoncus leo vitae sem scelerisque varius.
      </p>
      <br />
      <button class="btn btn-outline-info mb-5">BECOME A VOLUNTEER</button>
    </div>
    <div class="col-12 col-lg-6 px-3">
      <div
        class="image-holder"
        :style="`background-image: url(http://via.placeholder.com/476x431)`"
      ></div>
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

.image-holder {
  height: 400px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>