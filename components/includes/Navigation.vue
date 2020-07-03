<template>
  <div class="bg-white sticky-top shadow-sm">
    <div class="container">
      <nav class="navbar navbar-expand-lg navbar-light sticky-top">
        <nuxt-link to="/" class="navbar-brand">
          <img src="/images/logo.jpg" height="64" alt loading="lazy" class="d-none d-lg-block" />
          <img src="/images/logo.jpg" height="48" alt loading="lazy" class="d-block d-lg-none" />
        </nuxt-link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          @click="$emit('toggle')"
        >
          <!--           data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"-->
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item mx-4">
              <!-- <a class="nav-link p-0 py-1 active" href="#">Home</a> -->
              <nuxt-link class="nav-link p-0 py-1" to="/" exact-active-class="active">Home</nuxt-link>
            </li>
            <li class="nav-item mx-4">
              <nuxt-link
                class="nav-link p-0 py-1"
                to="/aboutus"
                exact-active-class="active"
              >About Us</nuxt-link>
            </li>
            <!-- <li class="nav-item mx-4">
              <a class="nav-link p-0 py-1" href="#">Projects</a>
            </li>-->
            <li class="nav-item mx-4 dropdown">
              <a
                class="nav-link dropdown-toggle p-0 py-1"
                href="#"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >Projects</a>
              <div class="dropdown-menu is-radiusless">
                <nuxt-link class="dropdown-item" to="/children">Children Profile</nuxt-link>
                <nuxt-link class="dropdown-item" to="/volunteering-projects">Volunteering Projects</nuxt-link>
                <nuxt-link class="dropdown-item" to="/upcoming-projects">Upcoming Projects</nuxt-link>
              </div>
            </li>
            <li class="nav-item mx-4">
              <nuxt-link class="nav-link p-0 py-1" to="/events" exact-active-class="active">Events</nuxt-link>
            </li>
            <li class="nav-item mx-4">
              <nuxt-link class="nav-link p-0 py-1" to="/blogs" active-class="active">Blogs</nuxt-link>
            </li>
            <li class="nav-item mx-4">
              <nuxt-link class="nav-link p-0 py-1" to="/gallery" exact-active-class="active">Gallery</nuxt-link>
            </li>
            <li class="nav-item mx-4">
              <nuxt-link
                class="nav-link p-0 py-1"
                to="/contactus"
                exact-active-class="active"
              >Contact Us</nuxt-link>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <!-- <button class="btn btn-outline-success my-2 my-sm-0 is-radiusless" type="submit">DONATE</button> -->
            <nuxt-link
              tag="button"
              to="/donate"
              class="btn btn-outline-success my-2 my-sm-0 is-radiusless"
              type="submit"
            >DONATE</nuxt-link>
          </form>
        </div>
      </nav>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/elements.scss";

.navbar-nav {
  margin-right: 64px;
  .nav-item {
    .nav-link {
      font-weight: 500;
      font-family: "Raleway", sans-serif;
      border-bottom: 2px solid #fff;
      &:hover {
        color: $primary;
        border-bottom: 2px solid $primary;
      }
    }

    .active {
      border-bottom: 2px solid $primary;
    }
  }
}

.dropdown-item {
  color: $dark;
  font-weight: 500;
  font-family: "Raleway", sans-serif;
  &:focus,
  &:active {
    background-color: #f8f9fa;
  }
}

@media screen and(min-width: 992px) and(max-width: 1200px) {
  .navbar-nav {
    margin-right: 8px;
  }
}

.navbar-toggler {
  border: 0px !important;
  &:focus,
  &:active {
    box-shadow: none;
    outline: none;
  }
}

@keyframes slideUp {
  from {
    transform: translateY(64px);
    opacity: 0;
  }

  to {
    transform: translateY(0px);
    opacity: 1;
  }
}

.dropdown-menu.show {
  animation: slideUp 500ms;
}
</style>