<template>
  <section class="py-5">
    <div class="container py-5">
      <div class="row">
        <div class="col-12 text-center">
          <h1 class="mb-0">
            SAY
            <span>HELLO</span>
          </h1>
          <Separator />
          <br />
        </div>
        <div class="col-12 col-md-4">
          <label class="mb-3">NAME</label>
          <br />
          <input class="form-control is-radiusless py-4 mb-4" type="text" placeholder="Your Name" />
        </div>
        <div class="col-12 col-md-4">
          <label class="mb-3">EMAIL</label>
          <br />
          <input class="form-control is-radiusless py-4 mb-4" type="email" placeholder="Your Email" />
        </div>
        <div class="col-12 col-md-4">
          <label class="mb-3">PHONE</label>
          <br />
          <input
            class="form-control is-radiusless py-4 mb-4"
            type="number"
            placeholder="Your Phone"
          />
        </div>

        <div class="col-12">
          <label class="mb-3">MESSAGE</label>
          <br />
          <textarea
            class="form-control is-radiusless py-4 px-4 mb-4"
            placeholder="Message"
            rows="8"
          ></textarea>
        </div>

        <div class="col-12">
          <button
            class="btn px-4 py-2 btn-outline-darker font-weight-bold mr-2"
            :disabled="busy"
            @click="send"
          >
            <!--  -->
            <div class="d-flex align-items-center">
              <span
                class="spinner-border spinner-border-sm mr-2"
                role="status"
                aria-hidden="true"
                v-if="busy"
              ></span>
              Send your Message
            </div>
          </button>
          <button class="btn px-4 py-2 btn-outline-darker font-weight-bold">Reset</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Separator from "@/components/UI/Separator";
import Swal from "sweetalert2";

export default {
  data() {
    return {
      busy: true
    };
  },
  methods: {
    send() {
      this.busy = true;
      Swal.fire({
        title: "",
        html: `<b>Dear John Doe</b>, 
        <br><b>Thank you for contacting us.</b><br>
        We've recieved your message and will respond to you very soon. For urgent inquiries, please call us at:
        <br>
        <br>+977 98510 91049
        <br>+977 01 5185419
        <br>
        <br>
        Thank you,<br>
        Better Life Social Organization Nepal.
        `,
        icon: "success"
      }).then(result => {
        if (result) {
          this.$router.push("/");
        }
      });
    }
  },
  components: {
    Separator
  }
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/elements.scss";
section {
  background-color: $card;
}
label {
  font-size: 18px;
  font-weight: 300;
}

input,
textarea {
  border: solid 2px $card;
  &:focus {
    box-shadow: none;
    border: solid 2px $dark;
  }
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield;
}

button {
  font-size: 13px;
}
</style>