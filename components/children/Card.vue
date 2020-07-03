<template>
  <div class="row mb-5">
    <span :id="cardId"></span>
    <div class="col-12 col-md-5 mb-4">
      <div class="image" style="background-image:url(https://via.placeholder.com/370x250)">
        <div class="date d-flex align-items-center justify-content-center">
          <h6 class="text-white mb-0">24 MAY, 2020</h6>
        </div>
      </div>
    </div>
    <div class="col-12 col-md-7">
      <h5 class="text-uppercase">ZAFARI JAMITH</h5>

      <p>
        <i class="las la-map-marker"></i>
        New Jorgia
      </p>

      <p>Anish Kapari is a 10-year-old boy. His family are without shelter and have a low income. They do not earn enough to cover their daily expenses. They want to send their son to school but cannot, due to a lack of financial support. Anish wants to go to school. He wants to become a social worker. We are waiting for your sponsorship.</p>

      <button class="btn btn-outline-info btn-sm">DONATE FOR ZAFARI JAMITH</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["cardId"]
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/elements.scss";

.image {
  width: 100%;
  height: 256px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

i {
  font-size: 16px;
  color: $primary;
}

.date {
  width: 128px;
  height: 70px;
  position: absolute;
  margin-left: 15px;
  background-color: #0aaac0;
  top: 0;
  left: 0;
  z-index: 2;
}

span {
  position: relative;
  top: -128px;
}
</style>