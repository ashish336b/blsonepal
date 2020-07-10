<template>
  <section>
    <div class="bg-transparent-dark">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center py-5 my-5 text-white">
            <h1 class="display-1 font-weight-bold">{{error.statusCode}}</h1>
            <h1 v-if="error.statusCode === 404">Oops! Page Not Found</h1>
            <h1 v-else>An error occurred</h1>
            <p>The page you were looking for could not be found.</p>
            <br />
            <br />
            <nuxt-link to="/" tag="button" class="btn btn-lg btn-outline-white">RETURN HOME</nuxt-link>
          </div>

          <div class="col-12 text-center py-5 mb-5 bg-white">
            <h2>Want to donate? It’s time to show your huminity</h2>
            <br />
            <nuxt-link to="/donate" tag="button" class="btn btn-outline-info btn-lg">DONATE NOW</nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["error"]
};
</script>


<style scoped lang="scss">
@import "@/assets/scss/elements.scss";
h1 {
  color: #fff;
}

h2 {
  color: $dark;
}
section {
  background-image: url("/images/error.jpg");
  background-position: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>