<template>
  <div class="bg-white sticky-top shadow-sm">
    <div class="container">
      <nav class="navbar navbar-expand-lg navbar-light py-3 sticky-top">
        <a class="navbar-brand" href="#">
          <img src="/images/logo_.png" height="32" alt loading="lazy" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
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
            <li class="nav-item mx-4">
              <a class="nav-link p-0 py-1" href="#">Projects</a>
            </li>
            <li class="nav-item mx-4">
              <a class="nav-link p-0 py-1" href="#">Events</a>
            </li>
            <li class="nav-item mx-4">
              <a class="nav-link p-0 py-1" href="#">Blog</a>
            </li>
            <li class="nav-item mx-4">
              <a class="nav-link p-0 py-1" href="#">Gallery</a>
            </li>
            <li class="nav-item mx-4">
              <a class="nav-link p-0 py-1" href="#">Contact Us</a>
            </li>
            <!-- <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >Dropdown</a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
            </li>-->
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <button class="btn btn-outline-success my-2 my-sm-0 is-radiusless" type="submit">DONATE</button>
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
      font-weight: 400;
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

@media screen and(min-width: 992px) and(max-width: 1200px) {
  .navbar-nav {
    margin-right: 8px;
  }
}
</style>