<template>
  <div class="row mb-5">
    <div class="col-12 col-md-5 mb-4">
      <div class="image" style="background-image:url(/images/defaults/event.jpg)">
        <div class="date d-flex align-items-center justify-content-center">
          <h6 class="text-white mb-0">24 MAY, 2020</h6>
        </div>
      </div>
    </div>
    <div class="col-12 col-md-7">
      <h5 class="text-uppercase">Event Title Goes Here</h5>

      <p>
        <i class="las la-clock"></i>
        18:30 GMT +5:45 (Nepal Time)
        <i class="las la-map-marker ml-3"></i>
        New Jorgia
      </p>

      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
    </div>
  </div>
</template>

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
</style>