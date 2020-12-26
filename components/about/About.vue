<template>
  <div>
    <div class="row">
      <div class="col-12 col-lg-6">
        <div class="text-center mb-4">
          <h1>
            ABOUT
            <span>US</span>
          </h1>
          <Separator />
        </div>
        <p class="text-justify">
          <b>
            <i>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
              voluptatibus aliquid deleniti quaerat quibusdam distinctio esse
              maiores, reprehenderit et voluptatem, veritatis consequatur
              dolorem id dolores excepturi corrupti necessitatibus vero
              doloribus!
            </i>
          </b>

          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa deleniti
          illum similique quos harum. Veritatis aperiam soluta error tenetur
          porro quo eos laborum consequuntur, nesciunt dolorem nostrum numquam
          molestias? Assumenda.
        </p>
      </div>
      <div
        class="col-12 col-lg-6 px-3 text-center py-5 d-flex align-items-center justify-content-center"
      >
        <!-- <div
          class="image-holder"
          :style="`background-image: url(http://via.placeholder.com/476x431)`"
        ></div> -->
        <img src="http://via.placeholder.com/476x431" class="img-fluid" />
      </div>
    </div>
    <div class="row mt-2">
      <div class="col-12">
        <p class="text-justify">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero beatae
          vitae repellendus mollitia sequi, iste eos pariatur quia, consequuntur
          rem illo atque assumenda ad cumque! Ex nemo placeat excepturi. Esse?
        </p>
        <br />
        <nuxt-link
          to="/contactus"
          tag="button"
          class="btn btn-outline-info mb-5"
          >BECOME A VOLUNTEER</nuxt-link
        >
      </div>
    </div>

    <div class="row my-4">
      <div class="col-12">
        <div class="text-center mb-4">
          <h1>
            OUR
            <span>OBJECTIVES</span>
          </h1>
          <Separator />
        </div>
        <ul>
          <li v-for="i in 6" :key="i">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit amet
            accusantium aperiam, impedit explicabo quis asperiores nihil
            consequatur animi recusandae sapiente magnam, eveniet nemo. Ea
            architecto beatae corporis pariatur eligendi.
          </li>
        </ul>
        We are grateful for the tireless efforts of our volunteer staff and
        junior volunteers in the community. If you see an opportunity to provide
        support, please contact us. Join us - give your support in cash or kind
        today.
      </div>
    </div>

    <div class="row my-5 py-5">
      <div class="col-12">
        <div class="text-center mb-4">
          <h1>
            OUR
            <span>VISION &amp; MISSION</span>
          </h1>
          <Separator />
        </div>
        <ul>
          <li v-for="i in 6" :key="i">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit amet
            accusantium aperiam, impedit explicabo quis asperiores nihil
            consequatur animi recusandae sapiente magnam, eveniet nemo. Ea
            architecto beatae corporis pariatur eligendi.
          </li>
        </ul>

        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
          facilis, accusamus eius laborum deserunt iusto molestiae saepe sequi
          magnam autem ut aliquam cupiditate perspiciatis et obcaecati debitis a
          asperiores ullam.
          <br />
          <br />
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos
          exercitationem quas dolorem nemo vitae quam at voluptatum, similique
          illum tempore. Molestias aperiam dolorum maiores nisi ratione
          blanditiis cumque reiciendis distinctio.
          <br />
          <br />Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Molestiae praesentium odit quibusdam suscipit odio earum, distinctio
          repudiandae eveniet nobis accusantium sed tempore voluptatum assumenda
          impedit corrupti eos, laudantium ducimus accusamus.
        </p>
      </div>
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

.image-holder {
  height: 512px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

ul {
  list-style-type: square;
}
</style>
