<template>
  <div class="row py-5 my-5">
    <div class="col-12 text-center">
      <h1>
        WHAT WE
        <span>DO</span>
      </h1>
      <Separator />
      <p
        class="mb-5"
      >BLSO has as its focus community-based projects and brings local and international volunteers together in Nepal</p>
    </div>

    <div
      class="col-12 col-sm-12 col-md-4 what-we-do-container py-4"
      style="background-image: url(/images/causes/education.jpg)"
    >
      <div class="what-we-do text-center mx-4">
        <h5 class="text-white">EDUCATION FOR CHILDREN</h5>
      </div>
    </div>
    <div
      class="col-12 col-sm-12 col-md-4 what-we-do-container py-4"
      style="background-image: url(/images/causes/cause003.jpg)"
    >
      <div class="what-we-do text-center mx-4">
        <h5 class="text-white">HEALTH FOR ALL</h5>
      </div>
    </div>
    <div
      class="col-12 col-sm-12 col-md-4 what-we-do-container py-4"
      style="background-image: url(/images/causes/humanTrafficking.jpg)"
    >
      <div class="what-we-do text-center mx-4">
        <h5 class="text-white">PREVENT HUMAN TRAFFICKING</h5>
      </div>
    </div>
    <div class="col-12">
      <p
        class="mt-5"
      >We have conducted many programs through our organization and are proud of our achievements. Our achievements to date include:</p>
      <ul>
        <li>Distributing clothes, shoes, school bags, school dresses, stationery, toiletries including toothpaste, soaps and other daily necessities.</li>
        <li>Building a team of supporters to make education accessible for the children.</li>
        <li>Providing job training.</li>
        <li>Establishing an awareness program on cleanliness and proper hygiene.</li>
        <li>Supporting agriculture by providing seeds to the farmers.</li>
        <li>Providing financial assistance for medical check-ups and medicines.</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Separator from "@/components/UI/Separator";

export default {
  components: {
    Separator
  }
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/elements.scss";

.what-we-do-container {
  display: table;
  // background-image: url(http://via.placeholder.com/370x300);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  .what-we-do {
    height: 300px;
    background-color: rgba(10, 170, 160, 0.65);
    display: table-cell;
    vertical-align: middle;
  }
}

ul {
  list-style-type: square;
}
</style>