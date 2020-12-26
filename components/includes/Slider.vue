<template>
  <aside @click="$emit('toggle')">
    <ul class="list-group is-radiusless py-4">
      <li class="list-group-item mb-4">
        <img src="/images/logo.png" class="img-fluid" />
      </li>

      <nuxt-link
        to="/"
        tag="li"
        class="list-group-item pl-4 link-item"
        exact-active-class="nuxt-active"
      >
        <span>
          <i class="las la-home"></i>
          HOME
        </span>
      </nuxt-link>

      <nuxt-link
        to="/aboutus"
        tag="li"
        class="list-group-item pl-4 link-item"
        exact-active-class="nuxt-active"
      >
        <span> <i class="las la-sitemap"></i> ABOUT US </span>
      </nuxt-link>

      <li class="list-group-item pl-4 link-item is-borderless">
        <span> <i class="las la-briefcase"></i> PROJECTS </span>
      </li>

      <!-- <nuxt-link
        to="/children"
        tag="li"
        class="list-group-item pl-5 link-item is-borderless"
        exact-active-class="nuxt-active"
      >
        <span>
          <i class="las la-briefcase"></i> Children Profile
        </span>
      </nuxt-link> -->

      <nuxt-link
        to="/volunteering-projects"
        tag="li"
        class="list-group-item pl-5 link-item is-borderless"
        exact-active-class="nuxt-active"
      >
        <span> <i class="las la-briefcase"></i> Volunteering Projects </span>
      </nuxt-link>

      <nuxt-link
        to="/upcoming-projects"
        tag="li"
        class="list-group-item pl-5 link-item"
        exact-active-class="nuxt-active"
      >
        <span> <i class="las la-briefcase"></i> Upcoming Projects </span>
      </nuxt-link>

      <nuxt-link
        to="/events"
        tag="li"
        class="list-group-item pl-4 link-item"
        exact-active-class="nuxt-active"
      >
        <span> <i class="las la-newspaper"></i> NEWS &amp; EVENTS </span>
      </nuxt-link>
      <nuxt-link
        to="/blogs"
        tag="li"
        class="list-group-item pl-4 link-item"
        active-class="nuxt-active"
      >
        <span> <i class="las la-rss"></i> BLOGS </span>
      </nuxt-link>
      <nuxt-link
        to="/gallery"
        tag="li"
        class="list-group-item pl-4 link-item"
        exact-active-class="nuxt-active"
      >
        <span> <i class="las la-photo-video"></i> GALLERY </span>
      </nuxt-link>
      <nuxt-link
        to="/contactus"
        tag="li"
        class="list-group-item pl-4 link-item"
        exact-active-class="nuxt-active"
      >
        <span> <i class="las la-phone"></i> CONTACT US </span>
      </nuxt-link>
      <li class="py-3"></li>
      <!-- <nuxt-link to="/donate" tag="li" class="list-group-item pl-4 pb-4">
        <div class="donate">
          <button class="btn btn-lg btn-danger font-weight-bold">DONATE</button>
        </div>
      </nuxt-link> -->

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
  scrollbar-width: none;
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
      font-family: "Roboto Mono", monospace;
      color: rgba(0, 0, 0, 0.8);
    }
    button {
      font-size: 15px;
    }
  }

  .link-item {
    &:hover {
      background-color: #fbfbfb;
    }
    // border-bottom: 1px solid #e3e3e3;
  }
}

.nuxt-active {
  border-left: 4px $secondary solid !important;
  background-color: #fbfbfb;
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

.donate {
  max-width: min-content;
  border: solid 2px red;
  border-radius: 8px;
  padding: 2px;
  .btn {
    padding: 4px 16px;
    margin: 0 !important;
  }
}
</style>
