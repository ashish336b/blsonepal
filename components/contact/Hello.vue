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
          <button class="btn px-4 py-2 btn-outline-darker font-weight-bold mr-2">Send your Message</button>
          <button class="btn px-4 py-2 btn-outline-darker font-weight-bold">Reset</button>
        </div>
      </div>
    </div>
  </section>
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