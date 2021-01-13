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
          <input
            class="form-control is-radiusless py-4 mb-4"
            :class="errors.get('name') ? 'is-invalid' : ''"
            type="text"
            placeholder="Your Name"
            v-model="Name"
          />
          <div class="invalid-feedback">{{ errors.get("name") }}</div>
        </div>
        <div class="col-12 col-md-4">
          <label class="mb-3">EMAIL</label>
          <br />
          <input
            class="form-control is-radiusless py-4 mb-4"
            :class="errors.get('email') ? 'is-invalid' : ''"
            type="email"
            placeholder="Your Email"
            v-model="Email"
          />
          <div class="invalid-feedback">{{ errors.get("email") }}</div>
        </div>
        <div class="col-12 col-md-4">
          <label class="mb-3">PHONE</label>
          <br />
          <input
            class="form-control is-radiusless py-4 mb-4"
            :class="errors.get('phone') ? 'is-invalid' : ''"
            type="text"
            placeholder="Your Phone (Eg: +977 9851091049)"
            v-model="Phone"
          />
          <div class="invalid-feedback">{{ errors.get("phone") }}</div>
        </div>

        <div class="col-12">
          <label class="mb-3">MESSAGE</label>
          <br />
          <textarea
            class="form-control is-radiusless py-4 px-4 mb-4"
            :class="errors.get('message') ? 'is-invalid' : ''"
            placeholder="Message"
            rows="8"
            v-model="Message"
          ></textarea>
          <div class="invalid-feedback">{{ errors.get("message") }}</div>
        </div>

        <div class="col-12">
          <button
            class="btn px-4 py-2 btn-outline-darker font-weight-bold mr-2"
            :disabled="busy"
            @click="sendMessage"
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
          <button
            class="btn px-4 py-2 btn-outline-darker font-weight-bold"
            @click="resetForm"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Separator from "@/components/UI/Separator";
import Swal from "sweetalert2";
class ErrorsClass {
  constructor() {
    this.errors = {};
  }
  get(field) {
    if (this.errors[field]) {
      return this.errors[field][0];
    }
  }
  record(errors) {
    this.errors = errors.errors;
  }
  reset() {
    this.errors = {};
  }
}
export default {
  components: {
    Separator
  },
  data() {
    return {
      Name: "",
      Email: "",
      Phone: "",
      Message: "",
      errors: new ErrorsClass(),
      busy: false
    };
  },
  methods: {
    sendMessage() {
      let data = {
        Name: this.Name,
        Email: this.Email,
        Phone: this.Phone,
        Message: this.Message
      };
      this.busy = true;
      this.$axios
        .post("/contacts", data)
        .then(res => {
          if (res.status == 200) {
            this.errors.reset();
            this.resetForm();
            Swal.fire({
              title: "",
              html: `<b>Dear ${data.name}</b>, 
              <br><b>Thank you for contacting us.</b><br>
              We've recieved your message and will respond to you very soon. For urgent inquiries, please call us at:
              <br>
              <br>+977 9843684612
              <br>+977 01 5639746
              <br>
              <br>
              Thank you,<br>
              Lorem Ipusm
              `,
              icon: "success"
            }).then(result => {
              if (result) {
                this.$router.push("/");
              }
            });
          }
        })
        .catch(err => {
          this.errors.record(err.response.data);
        })
        .finally(() => {
          this.busy = false;
        });
    },
    resetForm() {
      this.Name = "";
      this.Email = "";
      this.Phone = "";
      this.Message = "";
    }
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
.invalid-feedback {
  margin-top: -14px;
  margin-bottom: 8px;
}
</style>
