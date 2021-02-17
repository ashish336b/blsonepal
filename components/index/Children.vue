<template>
  <div class="mb-5 pb-5">
    <div class="container">
      <div class="text-center">
        <h1>
          <span>TESTIMONIAL</span>
        </h1>
        <Separator />
        <p class="mb-5">Words From our clients</p>

        <div class="row">
          <div class="col-12">
            <Carousel
              :responsive="{
                0: { items: 1, nav: true },
                768: { items: 2, nav: true },
                1200: { items: 3, nav: true },
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
          name: "Anish Kapari",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, provident repellendus natus hic nobis enim.",
          image: "http://via.placeholder.com/350x190",
        },
        {
          name: "Dil Kumar Kapari",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, provident repellendus natus hic nobis enim.",
          image: "http://via.placeholder.com/350x190",
        },
        {
          name: "Firoj Kapari",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, provident repellendus natus hic nobis enim.",
          image: "http://via.placeholder.com/350x190",
        },
        {
          name: "Mane",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, provident repellendus natus hic nobis enim.",
          image: "http://via.placeholder.com/350x190",
        },
        {
          name: "Rupesh",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, provident repellendus natus hic nobis enim.",
          image: "http://via.placeholder.com/350x190",
        },
        {
          name: "Sandesh Kapari",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, provident repellendus natus hic nobis enim.",
          image: "http://via.placeholder.com/350x190",
        },
      ],
    };
  },

  methods: {
    firstName(name) {
      return name.split(" ")[0].toUpperCase();
    },
  },

  components: {
    Separator,
    Carousel,
  },
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