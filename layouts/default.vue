<template>
  <div>
    <Header />
    <Navigation />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/includes/Header";
import Navigation from "@/components/includes/Navigation";
import Footer from "@/components/includes/Footer";

export default {
  components: {
    Header,
    Navigation,
    Footer
  }
};
</script>

<style>
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
</style>
