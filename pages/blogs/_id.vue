<template>
  <div>
    <Preview :image="previewImage" />
    <div class="container py-5">
      <div class="row">
        <div class="col-12 col-12 col-lg-8 mb-5">
          <div class="card is-radiusless">
            <div class="card-body is-radiusless py-4">
              <h3 class="font-weight-normal">{{ post.Title }}</h3>
              <p class="text-muted">
                <i class="las la-user-tie"></i> By: Admin |
                <i class="las la-calendar"></i>
                {{ new Date(post.created_at).toDateString() }}
              </p>

              <img
                :src="
                  post.cover
                    ? $axios.defaults.baseURL + post.cover.url
                    : defaultMainPostPhotoUrl
                "
                class="img-fluid"
                width="100%"
              />

              <p class="mt-4" v-html="$md.render(post.content)"></p>

              <!-- <div class="row mt-4">
                <div
                  class="col-12 col-sm-6 col-md-4 mb-3"
                  v-for="photo in post.photos.slice(1)"
                  :key="photo.id"
                >
                  <div
                    class="blog-image p-3"
                    :style="`background-image: url(${photo.photo_url})`"
                    @click="gallery(photo.photo_url)"
                  >
                    <div
                      class="d-flex align-items-center justify-content-center"
                    >
                      <h1 class="display-4 text-white">
                        <i class="las la-image"></i>
                      </h1>
                    </div>
                  </div>
                </div>
              </div> -->
            </div>
          </div>
        </div>

        <div class="col-12 col-12 col-lg-4">
          <h5>LATEST POSTS</h5>
          <hr />

          <div
            class="card mb-3 is-borderless"
            v-for="post in latestPosts.slice(0, 6)"
            :key="post.id"
          >
            <div class="row no-gutters">
              <div class="col-4 col-md-4">
                <nuxt-link
                  tag="div"
                  class="card-img is-radiusless"
                  :style="
                    `background-image: url(${
                      post.cover
                        ? $axios.defaults.baseURL + post.cover.url
                        : defaultLatestPostsPhotoUrl
                    })`
                  "
                  :to="`/blogs/${post.id}`"
                ></nuxt-link>
              </div>
              <div class="col-8 col-md-8">
                <div class="card-body">
                  <p class="card-text text-muted">
                    <nuxt-link :to="`/blogs/${post.id}`">{{
                      stripTitle(post.Title)
                    }}</nuxt-link>
                    <br />
                    <small class="text-muted">{{
                      new Date(post.created_at).toDateString()
                    }}</small>
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
  props: ["id"],
  data() {
    return {
      post: {
        title: "",
        content: "",
        photos: []
      },
      // defaultMainPostPhotoUrl:'https://via.placeholder.com/610x350',
      // defaultLatestPostsPhotoUrl: 'https://via.placeholder.com/85x60',
      // previewImage: 'http://via.placeholder.com/1282x720',
      defaultMainPostPhotoUrl: "/images/defaults/blog.jpg",
      defaultLatestPostsPhotoUrl: "/images/defaults/blog.jpg",
      previewImage: "/images/defaults/blog.jpg",
      latestPosts: []
    };
  },
  methods: {
    gallery(photourl) {
      this.previewImage = photourl;
      $("#preview").modal("show");
    },
    stripTitle(title) {
      if (title.length > 24) {
        title = title.substring(0, 24) + " ...";
      }
      return title;
    }
  },
  mounted() {
    this.$store.commit("set");
    Promise.all([
      this.$axios.get(`/blogs/${this.$route.params.id}`),
      this.$axios.get("/blogs")
    ])
      .then(results => {
        this.post = results[0].data;
        let latestPosts = results[1].data;
        latestPosts = latestPosts.filter(el => el.id != this.$route.params.id);
        this.latestPosts = latestPosts;
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
