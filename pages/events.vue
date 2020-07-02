<template>
  <div>
    <Cover image="http://via.placeholder.com/1920x350" current="Events" />
    <div class="container py-5 my-5">
      <Card v-for="(event, i) in events.slice(itemsPerPage* (pagination.current-1), itemsPerPage*pagination.current)" :key="event.id" :event="event" />

      <div class="row">
        <div class="col-12 my-3">
          <nav>
            <ul class="pagination ml-auto">
              <li class="page-item mr-1"
                :class="{'disabled': !pagination.previous}">
                <a class="page-link is-radiusless"
                  @click="paginate(pagination.previous)"
                  href="#">
                  <i class="las la-angle-double-left"></i>
                </a>
              </li>
              <li class="page-item mx-1"
              v-for="page in pagination.range"
              :key="page"
              :class="{'active': pagination.current == page}" @click="paginate(page)">
                <a class="page-link px-3" href="#">{{ page }}</a>
              </li>
              <li class="page-item ml-1"
                :class="{'disabled': !pagination.next}">
                <a class="page-link is-radiusless"
                  @click="paginate(pagination.next)"
                  href="#">
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
import Card from "@/components/events/Card";
import paginate from "@/pages/blogs/paginate";

export default {
  components: {
    Cover,
    Card
  },

  data() {
    return {
      events: [],
      itemsPerPage: 12,
      pagination: {},
      currentPage: 1,
    }
  },

  mounted() {
    this.$store.commit('set');
    this.$axios.get('api/webui/events')
      .then(res => {
        this.events = res.data.data;
        this.paginate(this.currentPage);
      })
      .catch(err => {
        console.log(err);
      })
      .finally(err => {
        this.$store.commit('unset');
      });
  },

  methods: {
    paginate(current) {
      this.pagination = paginate({
        per: this.itemsPerPage,
        limit: 5,
        total: this.events.length,
        current,
      });
    }
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/elements.scss";

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

  .active {
    a {
      border-color: $primary;
      background: $primary;
      color: #fff;
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