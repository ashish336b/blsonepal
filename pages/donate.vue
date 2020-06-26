<template>
  <div>
    <Cover current="Donate" image="http://via.placeholder.com/1920x350" />
    <div class="container py-5 my-5">
      <div class="row">
        <div class="col-12 col-lg-8 offset-lg-2">
          <div class="card py-5 px-4 shadow">
            <div class="card-body">
              <h3>Donation Details</h3>
              <br />
              <h6>How Much Would You Like To Donate?</h6>
              <br />
              <div class="row donation">
                <div class="col-6 col-sm-3 mb-3">
                  <div class="card">
                    <div class="card-body d-flex justify-content-around">
                      <i class="las la-check-circle"></i>
                      $100
                    </div>
                  </div>
                </div>
                <div class="col-6 col-sm-3 mb-3">
                  <div class="card">
                    <div class="card-body d-flex justify-content-around">
                      <i class="las la-circle-notch"></i>
                      $100
                    </div>
                  </div>
                </div>
                <div class="col-6 col-sm-3 mb-3">
                  <div class="card">
                    <div class="card-body d-flex justify-content-around">
                      <i class="las la-circle-notch"></i>
                      $100
                    </div>
                  </div>
                </div>
                <div class="col-6 col-sm-3 mb-3">
                  <input
                    class="form-control is-radiusless py-4 mb-4"
                    type="email"
                    placeholder="-- Enter Amount --"
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
                  <button class="btn btn-info btn-lg is-radiusless px-4">DONATE</button>
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

export default {
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