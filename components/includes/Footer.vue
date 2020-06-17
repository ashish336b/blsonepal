<template>
  <footer class="pt-5">
    <div class="container">
      <div class="row">
        <div class="col-12 col-lg-4 mb-5">
          <h5>ABOUT US</h5>
          <hr class="mt-1" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium labore placeat provident recusandae distinctio dolorem natus.</p>
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
              <a href="#">
                <i class="las la-angle-right"></i> Causes
              </a>
            </li>
            <li>
              <a href="#">
                <i class="las la-angle-right"></i> Projects
              </a>
            </li>
            <li>
              <a href="#">
                <i class="las la-angle-right"></i> Gallery
              </a>
            </li>
            <li>
              <a href="#">
                <i class="las la-angle-right"></i> Terms of use
              </a>
            </li>
            <li>
              <a href="#">
                <i class="las la-angle-right"></i> Legal disclaimer
              </a>
            </li>
            <li>
              <a href="#">
                <i class="las la-angle-right"></i> Privacy policy
              </a>
            </li>
          </ul>
        </div>

        <div class="col-12 col-lg-4 mb-5">
          <h5>CONTACT US</h5>
          <hr class="mt-1" />
          <ul class="list-group">
            <li>
              Phone :
              <a href="#">+977 98510 91049</a>
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