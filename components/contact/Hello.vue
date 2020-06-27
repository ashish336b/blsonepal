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
          <input class="form-control is-radiusless py-4 mb-4"
            :class="errors.get('name') ? 'is-invalid': ''"
            type="text" placeholder="Your Name"
            v-model="name" />
          <div class="invalid-feedback">{{ errors.get('name') }}</div>
        </div>
        <div class="col-12 col-md-4">
          <label class="mb-3">EMAIL</label>
          <br />
          <input class="form-control is-radiusless py-4 mb-4"
            :class="errors.get('email') ? 'is-invalid': ''"
            type="email" placeholder="Your Email" v-model="email" />
          <div class="invalid-feedback">{{ errors.get('email') }}</div>
        </div>
        <div class="col-12 col-md-4">
          <label class="mb-3">PHONE</label>
          <br />
          <input
            class="form-control is-radiusless py-4 mb-4"
            :class="errors.get('phone') ? 'is-invalid': ''"
            type="number"
            placeholder="Your Phone"
            v-model="phone"
          />
          <div class="invalid-feedback">{{ errors.get('phone') }}</div>
        </div>

        <div class="col-12">
          <label class="mb-3">MESSAGE</label>
          <br />
          <textarea
            class="form-control is-radiusless py-4 px-4 mb-4"
            :class="errors.get('message') ? 'is-invalid': ''"
            placeholder="Message"
            rows="8"
            v-model="message"
          ></textarea>
          <div class="invalid-feedback">{{ errors.get('message') }}</div>
        </div>

        <div class="col-12">
          <button class="btn px-4 py-2 btn-outline-darker font-weight-bold mr-2" @click="sendMessage()">Send your Message</button>
          <button class="btn px-4 py-2 btn-outline-darker font-weight-bold">Reset</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Separator from "@/components/UI/Separator";

class ErrorsClass {

  constructor() {
    this.errors = {};
  }

  get(field) {
    if(this.errors[field]) {
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
      name: '',
      email: '',
      phone: '',
      message: '',
      errors: new ErrorsClass(),
    }
  },

  methods: {
    sendMessage() {
      let data = {
        name: this.name,
        email: this.email,
        phone: this.phone,
        message: this.message,
      }

      this.$axios.post('api/webui/sendemail', data)
        .then(res => {
          if(res.status == 200) {
            this.errors.reset();
            this.resetForm();
            alert('Message Successfully Sent !');
          }
        })
        .catch(err => {
          this.errors.record(err.response.data);
        });
    },

    resetForm() {
      this.name = '';
      this.email = '';
      this.phone = '';
      this.message = '';
    },
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