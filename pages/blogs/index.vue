<template>
  <div>
    <Cover current="Our Blog" image="http://via.placeholder.com/1920x350" />
    <div class="container py-5 my-5">
      <div class="row">
        <div class="col-12 col-sm-6 col-md-6 col-lg-4" v-for="post in posts" :key="post.id">
          <Card  :post="post"/>
        </div>
      </div>

      <div class="row">
        <div class="col-12 my-3">
          <nav>
            <ul class="pagination ml-auto">
              <li class="page-item mr-1 disabled">
                <a class="page-link is-radiusless" href="#">
                  <i class="las la-angle-double-left"></i>
                </a>
              </li>
              <li class="page-item mx-1">
                <a class="page-link px-3" href="#">1</a>
              </li>
              <li class="page-item mx-1">
                <a class="page-link px-3" href="#">2</a>
              </li>
              <li class="page-item mx-1">
                <a class="page-link px-3" href="#">3</a>
              </li>
              <li class="page-item ml-1">
                <a class="page-link is-radiusless" href="#">
                  <i class="las la-angle-double-right"></i>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Cover from "@/components/UI/Cover";
import Card from "@/components/UI/Card";
export default {
  components: {
    Cover,
    Card
  },

  data() {
    return {
      posts: [],
    }
  },

  mounted() {
    this.$axios.get('api/webui/blogposts')
      .then(res => {
        this.posts = res.data.data;
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/elements.scss";

.col-12 {
  margin-bottom: 32px;
}

.pagination {
  max-width: min-content;
  .page-item {
    a {
      color: $dark;
    }
    &:hover {
      a {
        transition: 128ms;
        color: #fff;
        background-color: $primary;
      }
    }
  }

  .disabled {
    a {
      color: #ababab;
    }
    &:hover {
      a {
        color: #ababab;
        background-color: #fff;
      }
    }
  }
}
</style>

