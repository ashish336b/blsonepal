<template>
  <div class="row mb-5">
    <div class="col-12 col-md-5 mb-4">
      <div class="image"
      :style="event.photos[0] ? `background-image:url(${event.photos[0].photo_url})` : `background-image:url('/images/defaults/event.jpg')`">
        <div class="date d-flex align-items-center justify-content-center">
          <h6 class="text-white mb-0">{{ event.date_string }}</h6>
        </div>
      </div>
    </div>
    <div class="col-12 col-md-7">
      <h5 class="text-uppercase">{{ event.title }}</h5>

      <p>
        <i class="las la-clock"></i>
        {{ event.time_string }} GMT +5:45 (Nepal Time)
        <i class="las la-map-marker ml-3"></i>
        {{ event.location }}
      </p>

      <p v-html="event.content"></p>
    </div>
  </div>
</template>
<script>
  export default {
    props: ['event'],
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
</style>