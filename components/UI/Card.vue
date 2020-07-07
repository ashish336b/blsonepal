<template>
  <div class="card is-radiusless">
    <!-- <img src="https://via.placeholder.com/370x200" class="card-img-top is-radiusless" /> -->
    <div class="card-img">
      <div class="date d-flex align-items-center justify-content-center">
        <h6 class="text-white mb-0">{{ cardItem.updated_at_day_month }}</h6>
      </div>
      <div
        class="card-img-top is-radiusless"
        :style="`background-image: url(${photoUrl()})`"
      />
    </div>

    <div class="card-body is-radiusless py-4">
      <p class="card-title">{{ (cardItem.title) }}</p>
      <p class="card-text">
        {{ stripHtml(cardItem.content) }}
      </p>
    </div>

    <div class="card-footer bg-white pt-0">
      <nuxt-link
        tag="button"
        :to="(type==='post') ? `/blogs/${cardItem.slug}` : `/upcoming-projects/${cardItem.slug}`"
        class="btn btn-sm btn-outline-info mb-3"
      >Read More ...</nuxt-link>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['cardItem', 'type'],
    methods: {

      stripTitle(title) {
        if(title.length > 24) {
          title = title.substring(0, 24) + ' ...';
        }
        return title;
      },

      stripHtml(html){
         let doc = new DOMParser().parseFromString(html, 'text/html');
         let content = doc.body.textContent || "";
         if(content.length > 100) {
            content = content.substring(0, 100) + ' ...';
         }
         return content;
      },

      photoUrl() {
        if(this.cardItem.photos.length > 0) {
          return this.cardItem.photos[0].photo_url;
        }
        else return (this.type==='post') ?
          '/images/defaults/blog.jpg'
          : '/images/defaults/project.jpg';
      }
    }
  }
</script>

<style scoped lang="scss">
@import "@/assets/scss/elements.scss";
.card {
  display: flex;
  height: 100%;
  .card-text {
    height: 64px !important;
    overflow: hidden;
  }
  .card-title {
    font-size: 18px;
    font-weight: 500;
  }

  .card-img-top {
    transition: 64ms;
    height: 220px;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }

  .card-img {
    overflow: hidden;
  }
  transition: 128ms;

  &:hover {
    transition: 256ms;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
    .card-img-top {
      transition: 128ms;
      transform: scale(1.15);
    }
  }
}

.date {
  width: 74px;
  height: 70px;
  position: absolute;
  background-color: #0aaac0;
  top: 0;
  left: 0;
  z-index: 2;
}

.card-footer {
  border-top: 0px;
}
</style>