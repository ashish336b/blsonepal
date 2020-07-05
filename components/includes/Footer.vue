<template>
  <footer class="pt-5">
    <div class="container">
      <div class="row">
        <div class="col-12 col-lg-4 mb-5">
          <h5>ABOUT US</h5>
          <hr class="mt-1" />
          <p>Better Life (BLSO) is a social organization based in Nepal, dedicated to bringing help to needy people. BLSO’s operating philosophy is non-political, non-religious and non-governmental.</p>
          <br />

          <h5>FOLLOW US</h5>
          <hr class="mt-1" />
          <ul class="list-group list-group-horizontal social">
            <li>
              <a href="#">
                <i class="lab la-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="lab la-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="lab la-instagram"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="lab la-linkedin-in"></i>
              </a>
            </li>
          </ul>
        </div>

        <div class="col-6 col-lg-2 mb-5">
          <h5>OUR PROJECT</h5>
          <hr class="mt-1" />
          <ul class="list-group">
            <li>
              <a href="#">
                <i class="las la-angle-right"></i> Water Surve
              </a>
            </li>
            <li>
              <a href="#">
                <i class="las la-angle-right"></i> Education for all
              </a>
            </li>
            <li>
              <a href="#">
                <i class="las la-angle-right"></i> Treatment
              </a>
            </li>
            <li>
              <a href="#">
                <i class="las la-angle-right"></i> Food Serving
              </a>
            </li>
            <li>
              <a href="#">
                <i class="las la-angle-right"></i> Cloth
              </a>
            </li>
            <li>
              <a href="#">
                <i class="las la-angle-right"></i> Selter Project
              </a>
            </li>
          </ul>
        </div>

        <div class="col-6 col-lg-2 mb-5">
          <h5>QUICK LINKS</h5>
          <hr class="mt-1" />
          <ul class="list-group">
            <li>
              <nuxt-link to="/gallery">
                <i class="las la-angle-right"></i> Children Profile
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/volunteering-projects">
                <i class="las la-angle-right"></i> Volunteering Projects
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/upcoming-projects">
                <i class="las la-angle-right"></i> Upcoming Projects
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/events">
                <i class="las la-angle-right"></i> Events
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/blogs">
                <i class="las la-angle-right"></i> Blogs
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/gallery">
                <i class="las la-angle-right"></i> Gallery
              </nuxt-link>
            </li>
          </ul>
        </div>

        <div class="col-12 col-lg-4 mb-5">
          <h5>CONTACT US</h5>
          <hr class="mt-1" />
          <ul class="list-group">
            <li>
              Phone :
              <a href="tel:+9779851091049">+977 98510 91049</a>
            </li>
            <li>
              Phone :
              <a href="tel:+977015185419">+977 01 5185419</a>
            </li>
            <li>
              Email :
              <a href="#">blsonepal@gmail.com</a>
            </li>
            <li>Address : Kusunti -13, Lalitpur, Nepal</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="copyright p-3 text-center">
      <p class="m-0">
        Copyright 2020, All rights reserved. Crafted with
        <i class="las la-heart"></i>
        <b>theGimmickBox</b>
      </p>
    </div>
  </footer>
</template>

<style scoped lang="scss">
@import "@/assets/scss/elements.scss";
footer {
  background-color: $dark;
  color: #fff;
}

hr {
  border-color: $primary;
  border-width: 3px;
  width: 32px;
}

li {
  padding-block: 4px;
}

.social {
  .la-facebook-f {
    font-size: 20px;
    padding: 6px;
  }
  i {
    font-size: 24px;
    border: 1px solid #fff;
    padding: 4px;
    margin-right: 8px;

    &:hover {
      color: $primary;
      border-color: $primary;
    }
  }
}

.copyright {
  background-color: $darker;
  i {
    color: #ff0000;
  }
}
</style>