<template>
  <div class="mt-5 py-5">
    <div class="container">
      <div class="text-center">
        <h1>
          OUR
          <span>CAUSES</span>
        </h1>
        <Separator />
        <p class="mb-5">Our charity help those people who have no hope</p>

        <div class="row">
          <div class="col-12 col-md-6 col-lg-4 mb-5" v-for="i in 4" :key="i">
            <!-- <div :class="{'d-sm-block d-md-none d-lg-block': i==3}"> -->
            <div v-if="i != 4">
              <div class="card is-radiusless is-borderless">
                <!-- 370x200 -->
                <img
                  :src="`/images/causes/cause00${i}.jpg`"
                  class="card-img-top is-radiusless is-borderless"
                  alt
                />
                <div class="card-body py-5">
                  <h5 class="card-title">Children to get education</h5>
                  <p
                    class="card-text"
                  >Lorem ipsum dolor sit amet, onsectetur adipiscing cons ectetur nulla. Sed at ullamcorper risus.</p>
                </div>
              </div>
              <!-- <div class="mt-3 d-flex justify-content-between align-items-center">
                <button class="btn btn-outline-info">DONATE</button>
                <h6 class="mb-0">NPR 25,000 / NPR 50,000</h6>
              </div>-->
            </div>
            <div v-if="i == 4" style="height: 100%" class="d-none d-sm-none d-md-block d-lg-none">
              <nuxt-link
                to="/aboutus"
                tag="div"
                class="card is-radiusless is-borderless"
                style="height: 100%"
              >
                <!-- 370x200 -->
                <div class="card-body more d-flex align-items-center justify-content-center">
                  <h4 class="mr-2">Learn More</h4>
                  <h3>
                    <i class="las la-arrow-right"></i>
                  </h3>
                </div>
              </nuxt-link>
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

.more {
  border: solid 2px $secondary;
  background-color: #f1f1f1;
  &:hover {
    cursor: pointer;
  }
}
</style>