<template>
  <div class="row mt-4">
    <div class="col-12 col-md-4">
      <div class="card text-center py-5 is-radiusless">
        <h1 class="display-4 mb-3">
          <i class="las la-map-marked"></i>
        </h1>
        <h4 class="mb-3">ADDRESS</h4>
        <p>
          Kusunti -13,
          <br />Lalitpur, Nepal
        </p>
      </div>
    </div>
    <div class="col-12 col-md-4">
      <div class="card text-center py-5 is-radiusless">
        <h1 class="display-4 mb-3">
          <i class="las la-phone"></i>
        </h1>
        <h4 class="mb-3">CALL US</h4>
        <p>
          <a href="tel:+977 98510 91049">+977 98510 91049</a>
          <br />
          <a href="tel:+977 98510 91049">+977 98510 91049</a>
        </p>
      </div>
    </div>
    <div class="col-12 col-md-4">
      <div class="card text-center py-5 is-radiusless">
        <h1 class="display-4 mb-3">
          <i class="las la-envelope"></i>
        </h1>
        <h4 class="mb-3">EMAIL US</h4>
        <p>
          <a href="mailto:blsonepal@gmail.com">blsonepal@gmail.com</a>
          <br />
          <a href="mailto:blsonepal@gmail.com">blsonepal@gmail.com</a>
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/scss/elements.scss";
p {
  a {
    color: $dark;
  }
}
.card {
  transition: 150ms;

  &:hover {
    h1,
    h4,
    p,
    a {
      color: $primary;
      transition: 250ms;
    }
    border-color: $primary;

    transition: 250ms;
  }
}

iframe {
  display: block;
}
</style>