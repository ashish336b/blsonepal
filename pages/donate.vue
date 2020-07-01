<template>
  <div>
    <Cover current="Donate" image="http://via.placeholder.com/1920x350" />
    <div class="container py-5 my-5">
      <div class="row">
        <div class="col-12 col-lg-8 offset-lg-2">
          <div class="card py-5 px-4 shadow">
            <div class="card-body">
              <h3>How you can donate?</h3>

              <p>You can send donations to us via:</p>

              <table class="table table-borderless">
                <tbody>
                  <tr>
                    <th scope="row" class="pl-0">Bank Name:</th>
                    <td class="pr-0">Nepal Investment Bank Ltd.</td>
                  </tr>
                  <tr>
                    <th scope="row" class="pl-0">Branch:</th>
                    <td class="pr-0">Putalisadak, Kathmandu, Nepal</td>
                  </tr>
                  <tr>
                    <th scope="row" class="pl-0">Account Holder:</th>
                    <td class="pr-0">Better Life Social Organization</td>
                  </tr>
                  <tr>
                    <th scope="row" class="pl-0">Account Number:</th>
                    <td class="pr-0">01201020256278</td>
                  </tr>
                  <tr>
                    <th scope="row" class="pl-0">International Swift Code:</th>
                    <td class="pr-0">NIBLNPKT</td>
                  </tr>
                </tbody>
              </table>

              <br />
              <br />
              <h3>Donation Details</h3>
              <br />
              <h6>How Much Would You Like To Donate?</h6>
              <br />
              <div class="row donation">
                <div class="col-6 col-sm-3 mb-3">
                  <div class="card">
                    <div
                      class="card-body d-flex justify-content-around"
                      @click="check=0; amount=100"
                    >
                      <i class="las la-check-circle" v-if="check==0"></i>
                      <i class="las la-circle-notch" v-else></i>
                      $100
                    </div>
                  </div>
                </div>
                <div class="col-6 col-sm-3 mb-3">
                  <div class="card">
                    <div
                      class="card-body d-flex justify-content-around"
                      @click="check=1; amount=200"
                    >
                      <i class="las la-check-circle" v-if="check==1"></i>
                      <i class="las la-circle-notch" v-else></i>
                      $200
                    </div>
                  </div>
                </div>
                <div class="col-6 col-sm-3 mb-3">
                  <div class="card">
                    <div
                      class="card-body d-flex justify-content-around"
                      @click="check=2; amount=300"
                    >
                      <i class="las la-check-circle" v-if="check==2"></i>
                      <i class="las la-circle-notch" v-else></i>
                      $300
                    </div>
                  </div>
                </div>
                <div class="col-6 col-sm-3 mb-3">
                  <input
                    class="form-control is-radiusless py-4 mb-4"
                    type="email"
                    placeholder="-- Enter Amount --"
                    v-model="custom"
                  />
                </div>
              </div>
              <h6>Would You Like To Make Regular Donations?</h6>
              <br />
              <div class="row">
                <div class="col-12 col-md-6">
                  <label class="mb-2">First Name</label>
                  <br />
                  <input
                    class="form-control is-radiusless py-4 mb-4"
                    type="text"
                    placeholder="Ex. John"
                  />
                </div>

                <div class="col-12 col-md-6">
                  <label class="mb-2">Last Name</label>
                  <br />
                  <input
                    class="form-control is-radiusless py-4 mb-4"
                    type="text"
                    placeholder="Ex. Doe"
                  />
                </div>

                <div class="col-12 col-md-6">
                  <label class="mb-2">Phone Number</label>
                  <br />
                  <input
                    class="form-control is-radiusless py-4 mb-4"
                    type="number"
                    placeholder="Ex. +977 9851091049"
                  />
                </div>

                <div class="col-12 col-md-6">
                  <label class="mb-2">Email</label>
                  <br />
                  <input
                    class="form-control is-radiusless py-4 mb-4"
                    type="email"
                    placeholder="Ex. johndoe@example.org"
                  />
                </div>

                <div class="col-12 col-md-6">
                  <label class="mb-3">Address</label>
                  <br />
                  <textarea
                    class="form-control is-radiusless py-4 px-4 mb-4"
                    placeholder="Ex. Kusunti -13, Lalitpur, Nepal"
                    rows="4"
                  ></textarea>
                </div>

                <div class="col-12 col-md-6">
                  <label class="mb-3">Additional Note</label>
                  <br />
                  <textarea
                    class="form-control is-radiusless py-4 px-4 mb-4"
                    placeholder="Message"
                    rows="4"
                  ></textarea>
                </div>

                <div class="col-12 mt-2">
                  <button class="btn btn-info btn-lg is-radiusless px-4" @click="donate">DONATE</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Cover from "@/components/UI/Cover";
import Swal from "sweetalert2";

export default {
  data() {
    return {
      amount: "",
      check: -1,
      custom: ""
    };
  },

  watch: {
    custom() {
      if (this.custom.length > 0) {
        this.check = -1;
      }
    }
  },

  methods: {
    donate() {
      Swal.fire({
        title: "",
        html: `<b>Dear John Doe</b>, 
        <br>Better Life Social Organization Nepal acknowledges your in-kind-gift valued in the amount of <i>$${
          this.check == -1 ? this.custom : this.amount
        }</i>.
        <br><br>We appreciate your support of our organization in this manner. Thank you for your contribution.
        <br><br>
        Sincerely,<br>
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
    Cover
  }
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/elements.scss";
.card {
  border-radius: 0 !important;
}

input,
textarea {
  background-color: #f1f1f1;
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

.donation {
  .card {
    border: $primary solid 2px;
  }

  i {
    font-size: 18px;
  }
  .card-body {
    padding-top: 10px;
    padding-bottom: 10px;
    &:hover {
      cursor: pointer;
    }
  }

  input {
    border-color: $primary;
    background-color: #fff;
    &:focus {
      box-shadow: none;
      border: solid 2px $dark;
    }
  }
}
</style>