<template>
  <div>
    <Cover current="Donate" image="" />
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
                  <tr>
                    <th scope="row" class="pl-0">Other:</th>
                    <td class="pr-0">Money Gram, Western Union etc</td>
                  </tr>
                </tbody>
              </table>
              <img src="/images/donateus.jpg" class="img-fluid my-4" />
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
                    type="text"
                    :class="errors.get('amount') ? 'is-invalid' : ''"
                    placeholder="-- Enter Amount --"
                    v-model="custom"
                  />
                  <div class="invalid-feedback">{{ errors.get('amount') }}</div>
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
                    v-model="fname"
                    :class="errors.get('fname') ? 'is-invalid' : ''"
                    placeholder="Ex. John"
                  />
                  <div class="invalid-feedback">{{ errors.get('fname') }}</div>
                </div>

                <div class="col-12 col-md-6">
                  <label class="mb-2">Last Name</label>
                  <br />
                  <input
                    class="form-control is-radiusless py-4 mb-4"
                    type="text"
                    v-model="lname"
                    :class="errors.get('lname') ? 'is-invalid' : ''"
                    placeholder="Ex. Doe"
                  />
                  <div class="invalid-feedback">{{ errors.get('lname') }}</div>
                </div>

                <div class="col-12 col-md-6">
                  <label class="mb-2">Phone Number</label>
                  <br />
                  <input
                    class="form-control is-radiusless py-4 mb-4"
                    type="text"
                    v-model="phone"
                    :class="errors.get('phone') ? 'is-invalid' : ''"
                    placeholder="Ex. +977 9851091049"
                  />
                  <div class="invalid-feedback">{{ errors.get('phone') }}</div>
                </div>

                <div class="col-12 col-md-6">
                  <label class="mb-2">Email</label>
                  <br />
                  <input
                    class="form-control is-radiusless py-4 mb-4"
                    type="email"
                    v-model="email"
                    :class="errors.get('email') ? 'is-invalid' : ''"
                    placeholder="Ex. johndoe@example.org"
                  />
                  <div class="invalid-feedback">{{ errors.get('email') }}</div>
                </div>

                <div class="col-12 col-md-6">
                  <label class="mb-3">Address</label>
                  <br />
                  <textarea
                    class="form-control is-radiusless py-4 px-4 mb-4"
                    placeholder="Ex. Kusunti -13, Lalitpur, Nepal"
                    rows="4"
                    v-model="address"
                    :class="errors.get('address') ? 'is-invalid' : ''"
                  ></textarea>
                  <div class="invalid-feedback">{{ errors.get('address') }}</div>
                </div>

                <div class="col-12 col-md-6">
                  <label class="mb-3">Additional Note</label>
                  <br />
                  <textarea
                    class="form-control is-radiusless py-4 px-4 mb-4"
                    placeholder="Message"
                    rows="4"
                    v-model="note"
                    :class="errors.get('note') ? 'is-invalid' : ''"
                  ></textarea>
                  <div class="invalid-feedback">{{ errors.get('note') }}</div>
                </div>

                <div class="col-12 mt-2">
                  <button
                    class="btn btn-info btn-lg is-radiusless px-4"
                    @click="sendDonation"
                    :disabled="busy"
                  >
                    <div class="d-flex align-items-center">
                      <span
                        class="spinner-border spinner-border-sm mr-2"
                        role="status"
                        aria-hidden="true"
                        v-if="busy"
                      ></span>
                      DONATE
                    </div>
                  </button>
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
    Cover
  },

  data() {
    return {
      amount: '',
      fname: '',
      lname: '',
      phone: '',
      email: '',
      address: '',
      note: '',
      check: -1,
      custom: "",
      errors: new ErrorsClass(),
      busy: false,
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
    sendDonation() {
      let data = {
        amount: (this.check==-1) ? this.custom : this.amount,
        fname: this.fname,
        lname: this.lname,
        phone: this.phone,
        email: this.email,
        address: this.address,
        note: this.note,
      }

      this.busy = true;

      this.$axios.post('api/webui/storedonation', data)
        .then(res => {
          if(res.status === 200) {
            this.errors.reset();
            this.resetForm();
            
            Swal.fire({
              title: "",
              html: `<b>Dear ${data.fname} ${data.lname}</b>, 
              <br>Better Life Social Organization Nepal acknowledges your in-kind-gift valued in the amount of <i>$${data.amount}</i>.
              <br><br>We appreciate your support of our organization in this manner. Thank you for your contribution.
              <br><br>
              Sincerely,<br>
              Better Life Social Organization Nepal.
              `,
              icon: "success"
            })
            .then(result => {
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
      this.amount = '';
      this.fname = '';
      this.lname = '';
      this.phone = '';
      this.email = '';
      this.address = '';
      this.note = '';
    }
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
.invalid-feedback {
  margin-top: -14px;
  margin-bottom: 8px;
}
</style>