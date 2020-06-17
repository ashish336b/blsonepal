<template>
  <section>
    <div class="bg-transparent-dark py-5">
      <div class="container py-5">
        <div class="text-center mb-5">
          <h1>
            HOW CAN YOU
            <span>HELP US?</span>
          </h1>
          <p
            class="mb-5"
          >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin imperdiet interdum erat, a pulvinar nibh sodales ac. Pellentesque quis augue non nunc sagittis rutrum.</p>
        </div>

        <div class="row">
          <div class="col-12 col-md-4">
            <h4 class="mb-3">DONATOR</h4>
            <p>Lorem ipsum dolor sit amet, risus adipiscing elit. Praesent laoreet condimentum quam, sit amet congue risus lobortis quis.</p>
            <button class="btn btn-outline-white mt-2">LEARN MORE</button>
          </div>
          <div class="col-12 col-md-4">
            <h4 class="mb-3">FUNDRISING</h4>
            <p>Lorem ipsum dolor sit amet, risus adipiscing elit. Praesent laoreet condimentum quam, sit amet congue risus lobortis quis.</p>
            <button class="btn btn-outline-white mt-2">LEARN MORE</button>
          </div>
          <div class="col-12 col-md-4">
            <h4 class="mb-3">VOLUNTEER</h4>
            <p>Lorem ipsum dolor sit amet, risus adipiscing elit. Praesent laoreet condimentum quam, sit amet congue risus lobortis quis.</p>
            <button class="btn btn-outline-white mt-2">LEARN MORE</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import "@/assets/scss/elements.scss";

section {
  background-image: url(https://via.placeholder.com/1920x530);
  background-position: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  color: #fff;
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