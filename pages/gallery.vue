<template>
  <div>
    <Preview :image="previewImage" />
    <Cover current="Gallery" image="" />
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
          <button class="btn btn-sm mb-1"
            :class="(currentFilter === '*') ? 'btn-info': 'btn-outline-info'"
            @click="filterIsotope('*')" style="margin: 0 -4px;">ALL</button>
          <button v-for="(tag, id) in tags" :key="id"
            class="btn btn-sm mb-1 ml-1"
            :class="(currentFilter === tag) ? 'btn-info': 'btn-outline-info'"
            @click="filterIsotope(tag)">{{ tag.toUpperCase() }}</button>
        </div>
      </div>

      <div class="row mt-5" id="grid">
        <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 col-grid-item" 
          :class="`${photo.tags.split(',').map(el => el.trim().replace(/ /g, '-')).join(' ')}`" 
          v-for="photo in photos" :key="photo.id"
          @click="gallery(photo.photo_url)">
          <!-- 270x300 -->
          <!-- <img src="http://via.placeholder.com/270x300" class="img-fluid" /> -->
          <div
            class="grid-item p-4"
            :style="`background-image: url(${photo.photo_url})`"
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
      // image: "http://via.placeholder.com/270x300",
      previewImage: "",
      tags: [],
      photos: [],
      currentFilter: '*',
    };
  },

  mounted() {
    this.$store.commit('set');
    this.$axios.get('api/webui/gallery')
      .then(res => {
        if(res.status === 200) {
          this.tags = res.data.tags;
          this.photos = res.data.photos;
          this.relayoutGallery();
        }
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => {
        this.$store.commit('unset');
      });
  },

  methods: {
    gallery(photourl) {
      this.previewImage = photourl;
      $("#preview").modal("show");
    },

    relayoutGallery() {
      this.$nextTick(() => {
        let gallery = document.getElementById("grid");
        this.isotope = new Isotope(gallery, {
          itemSelector: ".col-grid-item",
        });

      });
    },

    filterIsotope(tag) {
      this.currentFilter = tag;
      tag = tag.trim().replace(/ /g, '-');
      if(tag != '*') {
        tag = `.${tag}`;
      }
      this.isotope.arrange({ filter: tag });
    },
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