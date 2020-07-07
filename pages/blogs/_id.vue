<template>
  <div>
    <Preview image="http://via.placeholder.com/1282x720" />
    <div class="container py-5">
      <div class="row">
        <div class="col-12 col-12 col-lg-8 mb-5">
          <div class="card is-radiusless">
            <div class="card-body is-radiusless py-4">
              <h3 class="font-weight-normal">Lorem ipsum dolor sit amet</h3>
              <p class="text-muted">
                <i class="las la-user-tie"></i> By: Admin |
                <i class="las la-calendar"></i> 24 May, 2020
              </p>

              <img src="/images/defaults/blog.jpg" class="img-fluid" width="100%" />

              <p class="mt-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                <br />
                <br />Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
              </p>

              <div class="row mt-4">
                <div class="col-12 col-sm-6 col-md-4 mb-3" v-for="i in 4" :key="i">
                  <!-- <img src="https://via.placeholder.com/610x350" class="img-fluid" /> -->
                  <div
                    class="blog-image p-3"
                    style="background-image: url(/images/defaults/blog.jpg)"
                    @click="gallery"
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
          <h5>LATEST POSTS</h5>
          <hr />

          <div class="card mb-3 is-borderless" v-for="i in 6" :key="i">
            <div class="row no-gutters">
              <div class="col-4 col-md-4">
                <nuxt-link
                  tag="div"
                  class="card-img is-radiusless"
                  style="background-image: url(/images/defaults/blog.jpg)"
                  to="/blogs/help-girls-to-get-education"
                ></nuxt-link>
                <!-- <div
                  class="card-img is-radiusless"
                  style="background-image: url(https://via.placeholder.com/85x60)"
                ></div>-->
              </div>
              <div class="col-8 col-md-8">
                <div class="card-body">
                  <p class="card-text text-muted">
                    <nuxt-link to="/blogs/help-girls-to-get-education">Help girls to get education</nuxt-link>
                    <br />
                    <small class="text-muted">November, 15, 2016</small>
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
  methods: {
    gallery() {
      $("#preview").modal("show");
    }
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