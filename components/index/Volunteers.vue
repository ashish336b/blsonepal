<template>
  <div class="my-5 py-5">
    <div class="container">
      <div class="text-center">
        <h1>
          OUR
          <span>TEAM</span>
        </h1>
        <Separator />
        <p class="mb-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
          reprehenderit.
        </p>

        <div class="row">
          <div
            class="col-6 col-sm-6 col-md-3 col-lg-2 mb-5 d-flex"
            v-for="(volunteer, i) in volunteers"
            :key="i"
          >
            <div class="card is-radiusless is-borderless">
              <!-- 270x350 -->
              <div
                class="overlay d-flex align-items-center justify-content-center"
              >
                <a href="#">
                  <i class="lab la-facebook-f"></i>
                </a>
              </div>
              <!-- <img
                :src="
                  `/images/volunteers/${volunteer.name.replace(/ /g, '_')}.png`
                "
                class="card-img-top is-radiusless is-borderless"
                alt
              /> -->
              <img
                src="http://via.placeholder.com/720x1024"
                class="card-img-top is-radiusless is-borderless"
                alt
              />
              <div class="card-body py-5">
                <!-- <h5 class="card-title d-none d-sm-block">Kritish Dhaubanjar</h5> -->
                <h6 class="card-title">{{ volunteer.name }}</h6>
                <p class="card-text">{{ volunteer.position }}</p>
              </div>
            </div>
          </div>
          <div class="col-6 col-sm-6 col-md-3 col-lg-2 mb-5 d-flex">
            <div class="card is-radiusless is-borderless w-100">
              <!-- 270x350 -->
              <!-- <img class="card-img-top is-radiusless is-borderless" alt /> -->
              <nuxt-link
                tag="div"
                to="/contactus"
                class="card-body more py-5 d-flex flex-column justify-content-center"
              >
                <h5 class="card-title">Join Us</h5>
                <h3>
                  <i class="las la-arrow-right"></i>
                </h3>
                <!-- <h6 class="card-title">{{volunteer.name}}</h6> -->
                <!-- <p class="card-text">{{volunteer.position}}</p> -->
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Separator from "@/components/UI/Separator";

export default {
  data() {
    return {
      volunteers: [
        {
          name: "John Doe",
          position: "Founder"
        },
        {
          name: "John Doe",
          position: "President"
        },
        {
          name: "John Doe",
          position: "Vice President"
        },
        {
          name: "John Doe",
          position: "Secretory"
        },
        {
          name: "John Doe",
          position: "International Programs Coordinator"
        },
        {
          name: "John Doe",
          position: "Program Coordinators"
        },
        {
          name: "John Doe",
          position: "Programs Manager"
        },
        {
          name: "John Doe",
          position: "Office Manager"
        },
        {
          name: "John Doe",
          position: "Incharge Blso"
        },
        {
          name: "John Doe",
          position: "Tours Co-Ordinator"
        },
        {
          name: "John Doe",
          position: "Volunteer Program Supervisor"
        }
      ]
    };
  },
  components: {
    Separator
  }
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/elements.scss";

.card-body {
  background-color: $card;
  .card-text {
    font-size: 13px;
  }
}

.more {
  border: solid 2px #0aaac0;
  cursor: pointer;
}

.overlay {
  position: absolute;
  background-color: $secondary;
  opacity: 0.5;
  width: 100%;
  animation: shrink ease-in 128ms forwards;
  a {
    opacity: 0;
  }
}

@keyframes grow {
  from {
    height: 0%;
  }

  to {
    height: 100%;
  }
}

@keyframes shrink {
  from {
    height: 100%;
  }

  to {
    height: 0%;
  }
}

.card:hover {
  .overlay {
    animation: grow ease-out 256ms forwards;
    a {
      opacity: 1;
    }
  }
}

.la-facebook-f {
  font-size: 20px;
  padding: 6px;
}
i {
  font-size: 24px;
  border: 2px solid #fff;
  padding: 4px;
  margin-right: 8px;

  &:hover {
    color: $dark;
    border-color: $dark;
  }
}
</style>
