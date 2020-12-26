<template>
  <div class="mb-5 pb-5">
    <div class="container">
      <div class="text-center">
        <h1>
          WE ARE
          <span>HELPING</span>
        </h1>
        <Separator />
        <p class="mb-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit,
          laborum magnam aliquid nihil ab quis placeat.
        </p>

        <div class="row">
          <div class="col-12">
            <Carousel
              :responsive="{
                0: { items: 1, nav: true },
                768: { items: 2, nav: true },
                1200: { items: 3, nav: true }
              }"
            >
              <div v-for="(child, index) in children" :key="index" class="mb-3">
                <div
                  :style="`background-image: url(${child.image})`"
                  class="img-holder mx-auto"
                />
                <hr class="mx-5" />
                <h6>{{ child.name }}</h6>
                <p class="mx-4 mb-4">
                  {{ child.description.substr(0, 120) }}...
                </p>
                <!-- <nuxt-link
                  tag="button"
                  to="/donate"
                  class="btn btn-outline-info btn-sm"
                  >DONATE</nuxt-link
                > -->
                <nuxt-link
                  tag="button"
                  :to="`/children#card_id_${firstName(child.name)}`"
                  class="btn btn-outline-info btn-sm"
                  >MORE ABOUT {{ firstName(child.name) }}</nuxt-link
                >
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Separator from "@/components/UI/Separator";
import Carousel from "vue-owl-carousel";

export default {
  data() {
    return {
      children: [
        {
          name: "Jane Doe",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, laborum magnam aliquid nihil ab quis placeat.",
          image: "http://via.placeholder.com/120x120"
        }
      ]
    };
  },

  methods: {
    firstName(name) {
      return name.split(" ")[0].toUpperCase();
    }
  },

  components: {
    Separator,
    Carousel
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/elements.scss";

.img-holder {
  background-size: cover;
  background-position: center;
  height: 128px;
  width: 128px;
  border-radius: 100%;
}
</style>
