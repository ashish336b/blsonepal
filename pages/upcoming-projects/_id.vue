<template>
  <div>
    <Preview :image="previewImage" />
    <div class="container py-5">
      <div class="row">
        <div class="col-12 col-12 col-lg-8 mb-5">
          <div class="card is-radiusless">
            <div class="card-body is-radiusless py-4">
              <h3 class="font-weight-normal">{{project.title}}</h3>
              <p class="text-muted">
                <i class="las la-user-tie"></i> By: Admin |
                <i class="las la-calendar"></i> {{ project.created_at }}
              </p>

              <img :src="project.photos[0] ? project.photos[0].photo_url: defaultMainProjectPhotoUrl" class="img-fluid" width="100%" />

              <p class="mt-4" v-html="project.content">
              </p>

              <div class="row mt-4">
                <div class="col-12 col-sm-6 col-md-4 mb-3"
                  v-for="photo in project.photos.slice(1)" :key="photo.id"
                >
                  <!-- <img src="https://via.placeholder.com/610x350" class="img-fluid" /> -->
                  <div
                    class="blog-image p-3"
                    :style="`background-image: url(${photo.photo_url})`"
                    @click="gallery(photo.photo_url)"
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
        </div>

        <div class="col-12 col-12 col-lg-4">
          <h5>LATEST PROJECTS</h5>
          <hr />

          <div class="card mb-3 is-borderless"
            v-for="project in latestProjects.slice(0,6)" :key="project.id"
          >
            <div class="row no-gutters">
              <div class="col-4 col-md-4">
                <nuxt-link
                  tag="div"
                  class="card-img is-radiusless"
                  :style="`background-image: url(${(project.photos[0] ? project.photos[0].photo_url : defaultLatestProjectsPhotoUrl)})`"
                  :to="`/upcoming-projects/${project.slug}`"
                ></nuxt-link>
                <!-- <div
                  class="card-img is-radiusless"
                  style="background-image: url(https://via.placeholder.com/85x60)"
                ></div>-->
              </div>
              <div class="col-8 col-md-8">
                <div class="card-body">
                  <p class="card-text text-muted">
                    <nuxt-link
                      :to="`/upcoming-projects/${project.slug}`"
                    >{{ stripTitle(project.title) }}</nuxt-link>
                    <br />
                    <small class="text-muted">{{ project.created_at }}</small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Preview from "@/components/UI/Preview";

export default {


  data() {
    return {
      project: {
        title: '',
        content: '',
        photos: [],
      },
      // defaultMainProjectPhotoUrl:'https://via.placeholder.com/610x350',
      // defaultLatestProjectsPhotoUrl: 'https://via.placeholder.com/85x60',
      // previewImage: 'http://via.placeholder.com/1282x720',
      defaultMainProjectPhotoUrl: '/images/defaults/project.jpg',
      defaultLatestProjectsPhotoUrl: '/images/defaults/project.jpg',
      previewImage: '/images/defaults/project.jpg',
      latestProjects: [],
    }
  },

  methods: {
    gallery(photourl) {
      this.previewImage = photourl;
      $("#preview").modal("show");
    },

    stripTitle(title) {
      if(title.length > 24) {
        title = title.substring(0, 24) + ' ...';
      }
      return title;
    },
  },

  mounted() {
    this.$store.commit('set');
    this.$axios.get(`api/webui/projects/show/${this.$route.params.id}`)
      .then(res => {
        this.project = res.data.data;
      })
      .catch(err => {
        console.log(err.response);
      });

    // populate latest projects
    this.$axios.get('api/webui/latestprojects')
      .then(res => {
        let latestProjects = res.data.data;
        latestProjects = latestProjects.filter(el => el.slug != this.$route.params.id);
        this.latestProjects = latestProjects;
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => {
        this.$store.commit("unset");
      });
  },

  components: {
    Preview
  }
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/elements.scss";

.text-muted {
  i {
    font-size: 16px;
  }
}

.card-img {
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  &:hover {
    cursor: pointer;
  }
}

.blog-image {
  width: 100%;
  height: 128px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
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

hr {
  border-color: $primary;
  border-width: 3px;
  width: 32px;
}

.card-text {
  a {
    color: #6c757d;
    &:hover {
      color: $primary;
    }
  }
}

@media screen and(max-width: 991px) {
  .card-img {
    width: 100%;
    height: 128px;
  }
}
</style>