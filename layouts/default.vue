<template>
  <div>
    <Loader v-if="$store.getters.isLoading" />
    <Header />
    <Navigation @toggle="toggle=!toggle" />
    <nuxt />
    <Footer />

    <div class="backdrop d-md-block d-lg-none" @click="toggle=!toggle" v-if="toggle"></div>

    <transition
      enter-active-class="animate__animated animate__slideInLeft animate__faster"
      leave-active-class="animate__animated animate__slideOutLeft animate__faster"
    >
      <Slider @toggle="toggle=!toggle" v-if="toggle" class="d-md-block d-lg-none" />
    </transition>
    <Scroll />
  </div>
</template>

<script>
import Loader from "@/components/UI/Loader";
import Header from "@/components/includes/Header";
import Navigation from "@/components/includes/Navigation";
import Footer from "@/components/includes/Footer";
import Slider from "@/components/includes/Slider";
import Scroll from "@/components/UI/Scroll";

export default {
  data() {
    return {
      toggle: false
    };
  },
  components: {
    Loader,
    Header,
    Navigation,
    Footer,
    Slider,
    Scroll
  },

  // Set & Unset CSS Loader
  created() {
    this.$store.commit("set");
    setTimeout(() => {
      this.$store.commit("unset");
    }, 1024);
  },

  // Set & Unset CSS Loader [Every Route]
  watch: {
    $route() {
      this.$store.commit("set");
      setTimeout(() => {
        this.$store.commit("unset");
      }, 1024);
    }
  }
};
</script>

<style>
@import "@/assets/scss/animate.scss";

html {
  font-family: "Lato", sans-serif;
  font-size: 14px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Raleway", sans-serif;
  font-weight: 700;
}

ul {
  list-style-type: none;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1024;
  background-color: rgba(0, 0, 0, 0.6);
}

.page-enter-active,
.page-leave-active {
  transition: all 128ms;
}
.page-enter,
.page-leave-active {
  opacity: 0.1;
}
</style>
