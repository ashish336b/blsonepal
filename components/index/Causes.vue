<template>
  <div class="mt-5 py-5">
    <div class="container">
      <div class="text-center">
        <h1>
          OUR
          <span>CAUSES</span>
        </h1>
        <Separator />
        <p
          class="mb-5"
        >We're partnering with donors and local volunteers to tackle Nepal's greatest problems.</p>

        <div class="row">
          <div class="col-12 col-md-6 col-lg-4 mb-5" v-for="i in 4" :key="i">
            <!-- <div :class="{'d-sm-block d-md-none d-lg-block': i==3}"> -->
            <div v-if="i != 4" class="d-flex">
              <div class="card is-radiusless is-borderless">
                <!-- 370x200 -->
                <img
                  :src="causes[i - 1].image"
                  class="card-img-top is-radiusless is-borderless"
                  alt
                />
                <div class="card-body py-5">
                  <h5 class="card-title">{{causes[i - 1].title}}</h5>
                  <p class="card-text">{{causes[i - 1].description}}</p>
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
  data() {
    return {
      causes: [
        {
          title: "Education For Children",
          description:
            "Every last child deserves the opportunity to learn. BLSO Nepal works every day to ensure all children have the best chance to learn.",
          image: "/images/causes/education.jpg"
        },
        {
          title: "Health For All",
          description:
            "Our Volunteers raise awareness by demonstrating related activities among rural people about health and hygiene.",
          image: "/images/causes/cause003.jpg"
        },
        {
          title: "Preventing Human Trafficking",
          description:
            "Help Draft laws and create comprehensive national anti-trafficking strategies, also assisting with resources to implement them.",
          image: "/images/causes/humanTrafficking.jpg"
        }
      ]
    };
  },
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

.d-flex {
  height: 100%;
}
</style>