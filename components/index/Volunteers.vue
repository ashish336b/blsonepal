<template>
  <div class="mt-5 py-5">
    <div class="container">
      <div class="text-center">
        <h1>
          OUR
          <span>VOLUNTEERS</span>
        </h1>
        <Separator />
        <p class="mb-5">
          We create events aiming to pear to the voice for children and gather for support.
          Please update with our events and confirm you presence.
        </p>

        <div class="row">
          <div class="col-12 col-sm-6 col-md-3 col-lg-3 mb-5" v-for="i in 4" :key="i">
            <div class="card is-radiusless is-borderless">
              <!-- 270x350 -->
              <img
                src="http://via.placeholder.com/270x350"
                class="card-img-top is-radiusless is-borderless"
                alt
              />
              <div class="card-body py-5">
                <h5 class="card-title">Kritish Dhaubanjar</h5>
                <p class="card-text">Secretery</p>
              </div>
            </div>
          </div>
        </div>
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

.card-body {
  background-color: $card;
  .card-text {
    font-size: 13px;
  }
}
</style>