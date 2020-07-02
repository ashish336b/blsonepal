<template>
  <div class="event">
    <div class="my-4 py-5 bg-transparent-dark">
      <div class="container pt-5 pb-3">
        <div class="row">
          <div class="col-12 col-lg-4 text-white d-flex mb-5">
            <i class="las la-calendar"></i>
            <div class="ml-3">
              <h3>Up comming event</h3>
              <h5 class="text-uppercase">
                {{ (eventTitle === '') ? 'No Events' : eventTitle }}
              </h5>
              <p>{{eventDateString}}</p>
            </div>
          </div>

          <div class="col-12 col-lg-8">
            <div class="container-fluid">
              <div class="row text-white">
                <div class="col-6 col-sm-3 col-md-3 time-card text-center mb-4">
                  <div class="p-1 time-body mb-2 mx-auto d-flex">
                    <div class="d-flex align-items-center w-100 justify-content-center">
                      <h3 class="mb-0">{{days}}</h3>
                    </div>
                  </div>
                  <span>DAYS</span>
                </div>

                <div class="col-6 col-sm-3 col-md-3 time-card text-center mb-4">
                  <div class="p-1 time-body mb-2 mx-auto d-flex">
                    <div class="d-flex align-items-center w-100 justify-content-center">
                      <h3 class="mb-0">{{hours}}</h3>
                    </div>
                  </div>
                  <span>HOURS</span>
                </div>

                <div class="col-6 col-sm-3 col-md-3 time-card text-center mb-4">
                  <div class="p-1 time-body mb-2 mx-auto d-flex">
                    <div class="d-flex align-items-center w-100 justify-content-center">
                      <h3 class="mb-0">{{minutes}}</h3>
                    </div>
                  </div>
                  <span>MINUTES</span>
                </div>

                <div class="col-6 col-sm-3 col-md-3 time-card text-center mb-4">
                  <div class="p-1 time-body mb-2 mx-auto d-flex">
                    <div class="d-flex align-items-center w-100 justify-content-center">
                      <h3 class="mb-0">{{seconds}}</h3>
                    </div>
                  </div>
                  <span>SECONDS</span>
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
export default {
  data() {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      eventTitle: '',
      eventDateString: '',
    };
  },

  mounted() {
    this.$axios.get('api/webui/latestevent')
      .then(res => {
        let data = res.data.data;
        let today = new Date();
        // let eventAt = new Date("2020-07-31");
        // eventAt.setHours(0, 0, 0, 0);
        let eventAt = new Date(data.date_time);

        if(eventAt>today) {
          this.eventTitle = data.title;
          this.eventDateString = data.date_time_string;
        }

        let diff = Math.floor((eventAt - today) / 1000); //ms=>sec

        if (diff > 0) {
          let seconds_in_a_day = 60 * 60 * 24;
          let seconds_in_an_hour = 60 * 60;
          let seconds_in_a_minute = 60;

          this.days = Math.floor(diff / seconds_in_a_day);

          this.hours = Math.floor(
            (diff - this.days * seconds_in_a_day) / seconds_in_an_hour
          );

          this.minutes = Math.floor(
            (diff -
              this.days * seconds_in_a_day -
              this.hours * seconds_in_an_hour) /
              seconds_in_a_minute
          );

          this.seconds = Math.floor(
            diff -
              this.days * seconds_in_a_day -
              this.hours * seconds_in_an_hour -
              this.minutes * seconds_in_a_minute
          );

          setInterval(() => {
            this.seconds--;
            if (this.seconds < 0) {
              this.seconds = 59;
              this.minutes--;
              if (this.minutes < 0) {
                this.minutes = 59;
                this.hours--;
                if (this.hours < 0) {
                  this.days--;
                  if (this.days < 0) {
                    this.days = 0;
                    this.hours = 0;
                    this.minutes = 0;
                    this.seconds = 0;
                  } else {
                    this.hours = 23;
                  }
                }
              }
            }
          }, 1000);
        }

      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/elements.scss";

.event {
  background-image: url(https://via.placeholder.com/1920x250);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

i {
  font-size: 32px;
}

.time-card {
  .time-body {
    border: solid #fff 1px;
    width: 100px;
    height: 100px;

    div {
      background-color: #0aaac0;
    }
  }
  span {
    font-size: 16px;
  }
}
</style>