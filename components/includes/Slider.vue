<template>
  <aside @click="$emit('toggle')">
    <ul class="list-group is-radiusless py-4">
      <li class="list-group-item mb-4">
        <img src="/images/logo.jpg" class="img-fluid" />
      </li>

      <nuxt-link to="/" tag="li" class="list-group-item pl-4 link-item">
        <span>
          <i class="las la-home"></i>
          Home
        </span>
      </nuxt-link>

      <nuxt-link to="/aboutus" tag="li" class="list-group-item pl-4 link-item">
        <span>
          <i class="las la-sitemap"></i> About Us
        </span>
      </nuxt-link>

      <li class="list-group-item pl-4 link-item is-borderless">
        <span>
          <i class="las la-briefcase"></i> Projects
        </span>
      </li>

      <nuxt-link
        to="/volunteering-projects"
        tag="li"
        class="list-group-item pl-5 link-item is-borderless"
      >
        <span>
          <i class="las la-briefcase"></i> Volunteering Projects
        </span>
      </nuxt-link>

      <nuxt-link to="/upcoming-projects" tag="li" class="list-group-item pl-5 link-item">
        <span>
          <i class="las la-briefcase"></i> Upcoming Projects
        </span>
      </nuxt-link>

      <nuxt-link to="/events" tag="li" class="list-group-item pl-4 link-item">
        <span>
          <i class="las la-newspaper"></i> Events
        </span>
      </nuxt-link>
      <nuxt-link to="/blogs" tag="li" class="list-group-item pl-4 link-item">
        <span>
          <i class="las la-rss"></i> Blogs
        </span>
      </nuxt-link>
      <nuxt-link to="/gallery" tag="li" class="list-group-item pl-4 link-item">
        <span>
          <i class="las la-photo-video"></i> Gallery
        </span>
      </nuxt-link>
      <nuxt-link to="/contactus" tag="li" class="list-group-item pl-4">
        <span>
          <i class="las la-phone"></i> Contact Us
        </span>
      </nuxt-link>
      <li class="py-3"></li>
      <nuxt-link to="/donate" tag="li" class="list-group-item pl-4 pb-4">
        <button class="btn btn-success is-radiusless">Donate</button>
      </nuxt-link>
      <li class="py-3"></li>
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
  &::-webkit-scrollbar {
    display: none !important;
  }
  -ms-overflow-style: none;
}

ul {
  height: 100%;
  background-color: #fff;
  li {
    background-color: #fff;
    border: 0;
    cursor: pointer;
    span {
      font-size: 15px;
      font-weight: 500;
      color: $dark;
    }
    button {
      font-size: 15px;
    }
  }

  .link-item {
    border-bottom: 1px solid #e3e3e3;
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

