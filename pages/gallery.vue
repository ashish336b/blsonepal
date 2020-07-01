<template>
  <div>
    <Preview image="http://via.placeholder.com/1282x720" />
    <Cover current="Gallery" image="http://via.placeholder.com/1920x350" />
    <div class="container py-5 my-5">
      <div class="row">
        <div class="col-12 text-center">
          <h1>
            OUR
            <span>GALLERY</span>
          </h1>
          <Separator />
          <p>
            We create events aiming to pear to the voice for children and gather for support.
            Please update with our events and confirm you presence.
          </p>
        </div>
      </div>

      <div class="row mt-5">
        <div class="col-12 text-center">
          <button class="btn btn-sm btn-info mb-1">Metal</button>
          <button class="btn btn-sm btn-outline-info mb-1">Transition</button>
          <button class="btn btn-sm btn-outline-info mb-1">-ium</button>
          <button class="btn btn-sm btn-outline-info mb-1">Metal</button>
          <button class="btn btn-sm btn-outline-info mb-1">Transition</button>
          <button class="btn btn-sm btn-outline-info mb-1">-ium</button>
          <button class="btn btn-sm btn-outline-info mb-1">Metal</button>
        </div>
      </div>

      <div class="row mt-5" id="grid">
        <div
          class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 col-grid-item"
          v-for="i in 8"
          :key="i"
          @click="gallery"
        >
          <!-- 270x300 -->
          <!-- <img src="http://via.placeholder.com/270x300" class="img-fluid" /> -->
          <div
            class="grid-item p-4"
            :style="`background-image: url(http://via.placeholder.com/270x300)`"
          >
            <div class="d-flex align-items-center justify-content-center">
              <h1 class="display-4 text-white">
                <i class="las la-image"></i>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Isotope from "isotope-layout";
import Cover from "@/components/UI/Cover";
import Separator from "@/components/UI/Separator";
import Preview from "@/components/UI/Preview";

export default {
  data() {
    return {
      isotope: null,
      image: "http://via.placeholder.com/270x300"
    };
  },

  mounted() {
    let gallery = document.getElementById("grid");

    this.isotope = new Isotope(gallery, {
      itemSelector: ".col-grid-item"
    });
  },

  methods: {
    gallery() {
      $("#preview").modal("show");
    }
  },

  components: {
    Cover,
    Separator,
    Preview
  }
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/elements.scss";

.grid-item {
  height: 300px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin-bottom: 12px;
  div {
    width: 100%;
    height: 100%;
    i {
      color: transparent;
    }
  }
  transition: 128px;
  &:hover {
    cursor: pointer;
    div {
      background-color: $primary;
      opacity: 0.6;
      transition: 256ms;
      i {
        color: #fff;
      }
    }
  }
}

.col-grid-item {
  height: 300px;
}

@media screen and (max-width: 425px) {
  .grid-item {
    height: 200px;
  }
  .col-grid-item {
    height: 200px;
  }
}
</style>