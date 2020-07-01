<template>
  <header class="text-white">
    <div class="container">
      <div class="row">
        <div class="col-md-4 d-none d-md-block">
          <ul class="list-group list-group-horizontal social">
            <li class="mr-2">Follow Us On:</li>
            <li class="mx-2">
              <a href="#">
                <i class="lab la-facebook-f"></i>
              </a>
            </li>
            <li class="mx-1">
              <a href="#">
                <i class="lab la-twitter"></i>
              </a>
            </li>
            <li class="mx-1">
              <a href="#">
                <i class="lab la-instagram"></i>
              </a>
            </li>
            <li class="mx-1">
              <a href="#">
                <i class="lab la-linkedin-in"></i>
              </a>
            </li>
          </ul>
        </div>

        <div class="col-12 col-sm-6 col-md-4 offset-lg-2 col-lg-3">
          <i class="las la-envelope"></i> Email:
          <a href="#">blsonepal@gmail.com</a>
        </div>

        <div class="col-12 col-sm-6 col-md-4 col-lg-3">
          <i class="las la-phone"></i> Phone:
          <a href="#">+977 98510 91049</a>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
@import "@/assets/scss/elements.scss";
header {
  background-color: $secondary;
  font-size: 13px;
}
.container {
  padding-top: 12px;
  padding-bottom: 12px;
}
i {
  font-size: 16px;
}
ul {
  .la-facebook-f {
    font-size: 14px;
  }
}

a:hover {
  color: #e3e3e3;
}

.col-12 {
  text-align: right;
}

@media screen and(max-width: 768px) {
  .col-12 {
    text-align: center;
  }
}

@media screen and(max-width: 575px) {
  .col-12:last-child {
    margin-top: 4px;
  }
}
</style>