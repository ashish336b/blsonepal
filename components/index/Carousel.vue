<template>
  <div>
  <div  v-if="carousels.length > 0" id="carousel" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
      <li v-for="(carousel,id) in carousels" :key="carousel.id" data-target="#carousel" :data-slide-to="id" :class="(id===0) ? 'active': ''"></li>
      <!-- <li data-target="#carousel" data-slide-to="1"></li> -->
    </ol>
    <div class="carousel-inner">
      
      <div v-for="(carousel,id) in carousels" :key="carousel.id" class="carousel-item" :class="(id===0) ? 'active':''" 
        :style="`background-image: url(${carousel.photo_url});`">
        <div class="item d-flex">
          <div class="jumbotron mb-0 align-items-center d-flex align-items-center">
            <div class="container text-white">
              <h1>{{ carousel.title }}</h1>
              <p
                class="lead"
              >{{ carousel.content }}</p>
              <br />
              <a class="btn btn-outline-white mr-2" href="#" role="button">DONATE NOW</a>
              <a class="btn btn-outline-white" href="#" role="button">LEARN MORE</a>
            </div>
          </div>
        </div>
      </div>

    </div>
    <a class="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
      <i class="las la-angle-left"></i>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carousel" role="button" data-slide="next">
      <i class="las la-angle-right"></i>
      <span class="sr-only">Next</span>
    </a>
  </div>


  <div v-else id="carousel" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
      <li data-target="#carousel" data-slide-to="0" class="active"></li>
      <li data-target="#carousel" data-slide-to="1"></li>
      <li data-target="#carousel" data-slide-to="2"></li>
    </ol>
    <div class="carousel-inner">
      <div
        class="carousel-item active"
        :style="`background-image: url(/images/carousels/carousel001.jpg)`"
      >
        <div class="item d-flex">
          <div class="jumbotron mb-0 align-items-center d-flex align-items-center">
            <div class="container text-white">
              <h1>WE CAN HELP SOMEONE!</h1>
              <p
                class="lead"
              >This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
              <br />
              <nuxt-link
                to="/donate"
                class="btn btn-outline-white mr-2"
                href="#"
                role="button"
              >DONATE NOW</nuxt-link>
              <nuxt-link
                to="/aboutus"
                class="btn btn-outline-white"
                href="#"
                role="button"
              >LEARN MORE</nuxt-link>
            </div>
          </div>
        </div>
      </div>
      <div
        class="carousel-item"
        :style="`background-image: url(/images/carousels/carousel002.jpg)`"
      >
        <div class="item d-flex">
          <div class="jumbotron mb-0 align-items-center d-flex align-items-center">
            <div class="container text-white">
              <h1>WE CAN HELP SOMEONE!</h1>
              <p
                class="lead"
              >This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
              <br />
              <nuxt-link
                to="/donate"
                class="btn btn-outline-white mr-2"
                href="#"
                role="button"
              >DONATE NOW</nuxt-link>
              <nuxt-link
                to="/aboutus"
                class="btn btn-outline-white"
                href="#"
                role="button"
              >LEARN MORE</nuxt-link>
            </div>
          </div>
        </div>
      </div>
      <div
        class="carousel-item"
        :style="`background-image: url(/images/carousels/carousel003.jpg)`"
      >
        <div class="item d-flex">
          <div class="jumbotron mb-0 align-items-center d-flex align-items-center">
            <div class="container text-white">
              <h1>WE CAN HELP SOMEONE!</h1>
              <p
                class="lead"
              >This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
              <br />
              <nuxt-link
                to="/donate"
                class="btn btn-outline-white mr-2"
                href="#"
                role="button"
              >DONATE NOW</nuxt-link>
              <nuxt-link
                to="/aboutus"
                class="btn btn-outline-white"
                href="#"
                role="button"
              >LEARN MORE</nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <a class="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
      <i class="las la-angle-left"></i>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carousel" role="button" data-slide="next">
      <i class="las la-angle-right"></i>
      <span class="sr-only">Next</span>
    </a>
  </div>
  </div>
</template>

<script>
  export default {
    props: ['carousels']
  }
</script>

<style scoped lang="scss">
@import "@/assets/scss/elements.scss";
i {
  font-size: 32px;
}

.carousel-item {
  width: 100vw;
  height: 512px;
  // 1920x750
  // background-image: url("http://via.placeholder.com/1920x750");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.item {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  .jumbotron {
    background: transparent;
    width: 100%;
    margin-left: 10rem;
    margin-right: 10rem;
  }
}

@media screen and(max-width: 991px) {
  .jumbotron {
    margin-left: 7rem !important;
    margin-right: 7rem !important;
  }
}

@media screen and(max-width: 768px) {
  .carousel-control-prev,
  .carousel-control-next {
    display: none;
  }

  .jumbotron {
    margin-left: 1rem !important;
    margin-right: 1rem !important;
  }
}
</style>