<template>
  <div class="card is-radiusless">
    <!-- <img src="https://via.placeholder.com/370x200" class="card-img-top is-radiusless" /> -->
    <div class="card-img">
      <div class="date d-flex align-items-center justify-content-center">
        <h6 class="text-white mb-0">24 MAY</h6>
      </div>
      <div
        class="card-img-top is-radiusless"
        :style="`background-image: url(/images/defaults/blog.jpg)`"
      />
    </div>

    <div class="card-body is-radiusless py-4">
      <p class="card-title">Lorem ipsum dolor sit amet</p>
      <p
        class="card-text"
      >Lorem ipsum dolor sit amet, consectetur adipicing elit. Nullam feugiat dignissim metus, id vestibulum tellus Cras ante commodo. Lorem ipsum dolor sit amet, consectetur adipicing elit. Nullam feugiat dignissim metus, id vestibulum tellus Cras ante commodo.</p>
    </div>

    <div class="card-footer bg-white pt-0">
      <nuxt-link
        tag="button"
        to="/blogs/lorem-ipsum-dolor-sit"
        class="btn btn-sm btn-outline-info mb-3"
      >Read More ...</nuxt-link>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/scss/elements.scss";
.card {
  display: flex;
  height: 100%;
  .card-text {
    height: 64px !important;
    overflow: hidden;
  }
  .card-title {
    font-size: 18px;
    font-weight: 500;
  }

  .card-img-top {
    transition: 64ms;
    height: 220px;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }

  .card-img {
    overflow: hidden;
  }
  transition: 128ms;

  &:hover {
    transition: 256ms;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
    .card-img-top {
      transition: 128ms;
      transform: scale(1.15);
    }
  }
}

.date {
  width: 74px;
  height: 70px;
  position: absolute;
  background-color: #0aaac0;
  top: 0;
  left: 0;
  z-index: 2;
}

.card-footer {
  border-top: 0px;
}
</style>