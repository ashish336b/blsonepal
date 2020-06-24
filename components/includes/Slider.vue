<template>
  <aside @click="$emit('toggle')">
    <ul class="list-group is-radiusless py-4">
      <li class="list-group-item mb-4">
        <img src="/images/logo_.png" class="img-fluid" />
      </li>

      <li class="list-group-item pl-4">
        <nuxt-link to="/">
          <i class="las la-home"></i>
          Home
        </nuxt-link>
      </li>

      <li class="list-group-item pl-4">
        <nuxt-link to="/">
          <i class="las la-sitemap"></i> About Us
        </nuxt-link>
      </li>
      <li class="list-group-item pl-4">
        <nuxt-link to="/">
          <i class="las la-briefcase"></i> Projects
        </nuxt-link>
      </li>
      <li class="list-group-item pl-4">
        <nuxt-link to="/">
          <i class="las la-newspaper"></i> Events
        </nuxt-link>
      </li>
      <li class="list-group-item pl-4">
        <nuxt-link to="/">
          <i class="las la-rss"></i> Blog
        </nuxt-link>
      </li>
      <li class="list-group-item pl-4">
        <nuxt-link to="/">
          <i class="las la-photo-video"></i> Gallery
        </nuxt-link>
      </li>
      <li class="list-group-item pl-4">
        <nuxt-link to="/">
          <i class="las la-phone"></i> Contact Us
        </nuxt-link>
      </li>
      <li class="list-group-item pl-4 pb-4">
        <button class="btn btn-success is-radiusless">Donate</button>
      </li>
    </ul>
  </aside>
</template>

<style scoped lang="scss">
@import "@/assets/scss/elements.scss";
aside {
  position: fixed;
  overflow-y: scroll;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1024;
  background-color: rgba(0, 0, 0, 0.6);
}

ul {
  //   width: 70vw;
  height: 100%;
  background-color: #fff;
  li {
    background-color: #fff;
    border: 0;
    a {
      font-size: 15px;
      color: $primary;
    }
    button {
      font-size: 16px;
    }
  }
}

@media screen and (max-width: 576px) {
  ul {
    width: 70vw;
  }
}

@media screen and (min-width: 577px) {
  ul {
    width: 50vw;
  }
}

@media screen and (min-width: 768px) {
  ul {
    width: 35vw;
  }
}
</style>

