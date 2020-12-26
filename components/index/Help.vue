<template>
  <section>
    <div class="bg-transparent-darker py-5">
      <div class="container py-5">
        <div class="text-center mb-5">
          <h1>HOW CAN YOU HELP US?</h1>
          <p class="mb-5">
            In order for us to carry out this valuable work we are in urgent
            need of donations.
          </p>
        </div>

        <div class="row">
          <div class="col-12 col-md-4">
            <h4 class="mb-3">DONATOR</h4>
            <p>
              People like you give what you can to your favorite projects; you
              feel great when you get updates about how your money is put to
              work by us.
            </p>
            <nuxt-link
              to="/aboutus"
              tag="button"
              class="btn btn-outline-white mt-2"
              >LEARN MORE</nuxt-link
            >
          </div>
          <div class="col-12 col-md-4">
            <h4 class="mb-3">VOLUNTEER</h4>
            <p>
              Be a volunteer and reap the reward: If you want to help the
              poorest, you are in the right place here. Join our team and let us
              work together.
            </p>
            <nuxt-link
              to="/aboutus"
              tag="button"
              class="btn btn-outline-white mt-2"
              >LEARN MORE</nuxt-link
            >
          </div>
          <div class="col-12 col-md-4">
            <h4 class="mb-3">ADVOCATE</h4>
            <p>
              Defend and speak up on behalf of the vulnerable and suffering!
              Together, we can intercede on behalf of those who are suffering,
              without protection.
            </p>
            <nuxt-link
              to="/aboutus"
              tag="button"
              class="btn btn-outline-white mt-2"
              >LEARN MORE</nuxt-link
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import "@/assets/scss/elements.scss";

section {
  // 1920x530
  background-image: url(http://via.placeholder.com/1024x283);
  // background-image: url("/images/cover.jpg");
  background-position: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  color: #fff;
}

h1 {
  color: #fff;
}

.bg-transparent-darker {
  background-color: rgba(0, 0, 0, 0.8);
}

@media screen and(max-width: 767px ) {
  .col-12 {
    text-align: center;
    &:nth-child(1),
    &:nth-child(2) {
      margin-bottom: 64px;
    }
  }
}
</style>
