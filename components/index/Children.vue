<template>
  <div class="mb-5 pb-5">
    <div class="container">
      <div class="text-center">
        <h1>
          WE ARE
          <span>HELPING</span>
        </h1>
        <Separator />
        <p class="mb-5">Our charity help those people who have no hope</p>

        <div class="row">
          <div class="col-12">
            <Carousel
              :responsive="{0:{items:1,nav:true} ,768:{items:2,nav:true}, 1200:{items:3,nav:true}}"
            >
              <div v-for="(child,index) in children" :key="index" class="mb-3">
                <div :style="`background-image: url(${child.image})`" class="img-holder mx-auto" />
                <hr class="mx-5" />
                <h6>{{child.name}}</h6>
                <p class="mx-4 mb-4">{{child.description.substr(0, 120)}}...</p>
                <nuxt-link tag="button" to="/donate" class="btn btn-outline-info btn-sm">DONATE</nuxt-link>
                <nuxt-link
                  tag="button"
                  :to="`/children#card_id_${firstName(child.name)}`"
                  class="btn btn-outline-info btn-sm"
                >MORE ABOUT {{firstName(child.name)}}</nuxt-link>
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
            "Anish Kapari is a 10-year-old boy. His family are without shelter and have a low income. They do not earn enough to cover their daily expenses. They want to send their son to school but cannot, due to a lack of financial support. Anish wants to go to school. He wants to become a social worker. We are waiting for your sponsorship.",
          image: "/images/children/anish.jpg"
        },
        {
          name: "Dil Kumar Kapari",
          description:
            "Dil Kumar Kapari is a talented boy. His parents don't earn enough to send him to school. He is from a large family and his parents cannot buy books, pencils and other necessities. His parents are appealing to you. Please help Dil Kumar Kapari. He is waiting for your support.",
          image: "/images/children/dil.jpg"
        },
        {
          name: "Firoj Kapari",
          description:
            "Firoj Kapari is a talented boy. He has never had the chance to go to school because his family cannot afford it. In future, Firoj wants to become a doctor. He wants to go to school so he can accomplish this goal in the future. He likes to dance, play football and swim. He needs your kind assistance. Help him go to school.",
          image: "/images/children/firoz.jpg"
        },
        {
          name: "Mane",
          description:
            "Mane is a 7-year-old boy who is homeless. His father's income is very low and does not cover daily expenses. Mane lives with his family in temporary shelter (tents). His father cannot cover his education expenses, but really wants to send his son to school. They are appealing for a sponsor to help give Mane a bright future. We are waiting to hear from you.",
          image: "/images/children/mane.jpg"
        },
        {
          name: "Rupesh",
          description:
            "Rupesh is a talented boy who lives with his mother, father and four  siblings in a very poor community in Baktipur Sarlahi. His life is very difficult as his parents are unemployed. His parents are doing their best to provide for their children, but they do not make enough to meet their daily needs. Rupesh loves playing football with his friends. His favorite subject in school is math and his favorite color is red. He loves his parents when he grows up, his plan is to become a police officer. He is waiting for a sponsor.",
          image: "/images/children/rupesh.jpg"
        },
        {
          name: "Sandesh Kapari",
          description:
            "Sandesh Kapari is 12 years old. He is an active young boy who had to stop going to school because his family faced financial difficulties. His father is a village labourer and his income does not cover basic needs for everyday life. His parents are appealing to you. Please assist their son as an education sponsor.",
          image: "/images/children/sandesh.jpg"
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