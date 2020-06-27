<template>
  <div>
    <div class="container pb-5 mb-5">
      <div class="row">
        <div class="col-12 text-center">
          <h1>
            WHO
            <span>HELPED US</span>
          </h1>
          <Separator />
        </div>
      </div>
      <br />

      <div class="row">
        <div class="col-6 col-sm-6 col-md-4 col-lg-2 mb-4" v-for="i in 6" :key="i">
          <div class="card is-radiusless shadow-sm">
            <div class="card-body py-4">
              <img src="/images/sponsors/b-logo-one.png" class="img-fluid" />
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
</style>