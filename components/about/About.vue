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
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Adipisci, suscipit veritatis ea perferendis quis temporibus saepe
              iusto asperiores nesciunt sapiente quisquam, enim quo quos
              corporis vitae vero atque totam numquam?
            </i>
          </b>

          <br />
          <br />Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam
          reprehenderit libero facilis quas incidunt nobis ducimus praesentium
          perspiciatis tempore nisi. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Laborum saepe hic, quaerat quo eius nobis aliquid
          omnis aspernatur minima asperiores?!SECTION - Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Ipsa, ab accusantium. Repellat
          deleniti cumque earum eum reprehenderit, sed odio mollitia.
        </p>
      </div>
      <div
        class="col-12 col-lg-6 px-3 text-center py-5 d-flex align-items-center justify-content-center"
      >
        <!-- <div
          class="image-holder"
          :style="`background-image: url(http://via.placeholder.com/476x431)`"
        ></div>-->
        <img src="/images/logo.jpg" class="img-fluid" />
      </div>
    </div>
    <div class="row mt-2">
      <div class="col-12">
        <p class="text-justify">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi quidem
          sit rerum suscipit, animi voluptate adipisci deserunt incidunt eaque
          qui itaque, laboriosam quam nulla quo, iure earum molestias numquam
          ullam facilis. Minus, dolorem. Quasi sit soluta quas, ducimus, hic
          dolore quae, saepe sint rerum odio animi voluptas placeat ipsam
          cumque.
        </p>
        <br />
        <nuxt-link
          to="/contactus"
          tag="button"
          class="btn btn-outline-info mb-5"
          >BECOME A MEMBER</nuxt-link
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
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae fugiat
            in incidunt placeat ut quo quaerat aliquid praesentium dignissimos
            error?
            <ol>
              <li>Lorem, ipsum dolor.</li>
              <li>Lorem, ipsum dolor.</li>
              <li>Lorem, ipsum dolor.</li>
              <li>Lorem, ipsum dolor.</li>
              <li>Lorem, ipsum dolor.</li>
            </ol>
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea,
            suscipit nisi! Itaque reprehenderit debitis libero earum consectetur
            quaerat vero similique!
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea,
            suscipit nisi! Itaque reprehenderit debitis libero earum consectetur
            quaerat vero similique!
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea,
            suscipit nisi! Itaque reprehenderit debitis libero earum consectetur
            quaerat vero similique!
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea,
            suscipit nisi! Itaque reprehenderit debitis libero earum consectetur
            quaerat vero similique!
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
          <li>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga
            obcaecati officiis natus ad cumque tenetur consectetur neque
            voluptatum perspiciatis odio, quis fugit est saepe delectus
            sapiente, quae cum omnis reiciendis modi eveniet quibusdam.
            Inventore accusantium eos at, error tempore vel!
          </li>
          <li>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga
            obcaecati officiis natus ad cumque tenetur consectetur neque
            voluptatum perspiciatis odio, quis fugit est saepe delectus
            sapiente, quae cum omnis reiciendis modi eveniet quibusdam.
            Inventore accusantium eos at, error tempore vel!
          </li>
        </ul>

        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero modi,
          culpa similique aperiam cum reiciendis deserunt officiis sunt magni
          assumenda! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Tempora sit ex vero animi, illo commodi non facere ipsa reiciendis
          officiis necessitatibus consequatur. Voluptatibus, quas non tempora
          amet ipsam commodi rerum quis tempore molestias repellat officia minus
          numquam vero eius reprehenderit assumenda incidunt et autem. Excepturi
          molestias placeat dolorem quod quasi?
          <br />
          <br />Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Asperiores eveniet ducimus inventore nobis at architecto neque ratione
          dignissimos repellendus quibusdam ipsa vel non reprehenderit quo
          praesentium rerum, rem iure voluptas nisi voluptatum. Voluptas
          sapiente dolores voluptates voluptatibus neque obcaecati quam?
          <br />
          <br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
          error quam dolorem exercitationem, sequi dolorum consectetur impedit
          eaque quae unde tempore iusto sed fuga culpa soluta aut architecto
          aspernatur ducimus ipsum! Nam nemo voluptas quod recusandae explicabo
          blanditiis dolorem. Eligendi?
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Separator from "@/components/UI/Separator";

export default {
  components: {
    Separator,
  },
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