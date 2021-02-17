<template>
  <footer class="pt-5">
    <div class="container">
      <div class="row">
        <div class="col-12 col-lg-4 mb-5">
          <h5>ABOUT US</h5>
          <hr class="mt-1" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            provident dolores rerum sapiente non hic delectus quo iusto?
            Debitis, cumque.
          </p>
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
          <h5>OUR PROJECTS</h5>
          <hr class="mt-1" />
          <ul class="list-group">
            <!-- EMPTY -->
            <li>
              <a href="#"
                >Please update with our projects, events and confirm you
                presence.</a
              >
            </li>
            <!-- ELSE -->
            <!-- <li>
              <a href="#">
                <i class="las la-angle-right"></i> Education for all
              </a>
            </li>-->
          </ul>
        </div>

        <div class="col-6 col-lg-3 mb-5">
          <h5>QUICK LINKS</h5>
          <hr class="mt-1" />
          <ul class="list-group">
            <li>
              <nuxt-link to="/blogs">
                <i class="las la-angle-right"></i> About Us
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/blogs">
                <i class="las la-angle-right"></i> Blogs
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/blogs">
                <i class="las la-angle-right"></i> Contact Us
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/blogs">
                <i class="las la-angle-right"></i> Teams
              </nuxt-link>
            </li>
          </ul>
        </div>

        <div class="col-12 col-lg-3 mb-5 contact">
          <h5>CONTACT US</h5>
          <hr class="mt-1" />
          <ul class="list-group">
            <li>
              <i class="las la-phone"></i>
              <a href="tel:+977015185419">+977 01 5185419</a>,
            </li>
            <li class="mb-3 ml-4">
              <a href="tel:+9779851091049">+977 98510 91049</a>
            </li>

            <li>
              <i class="las la-envelope"></i>
              <a href="mailto:info@gmail.com">info@gmail.com</a>,
            </li>
            <li class="mb-3 ml-4">
              <a href="mailto:info@gmail.com">info@gmail.com</a>
            </li>
            <li>
              <i class="las la-map-marked"></i> P.O. Box #3547, Balkot -13,
              Bhaktpur, Nepal
            </li>
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

.contact {
  i {
    font-size: 20px;
    color: $primary;
  }
}
</style>