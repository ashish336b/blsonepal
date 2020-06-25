<template>
  <div id="scroller" class="d-none" @click="scrollToTop">
    <i class="las la-angle-up"></i>
  </div>
</template>

<script>
const debounce = (func, delay) => {
  var timeout;

  return function() {
    var ctx = this;
    var args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(function() {
      func.apply(ctx, args);
    }, delay);
  };
};

window.addEventListener(
  "scroll",
  debounce(function(e) {
    const scroller = document.getElementById("scroller");
    if (document.documentElement.scrollTop > 512) {
      if (!scroller.classList.contains("animate__fadeIn")) {
        scroller.className =
          "animate__animated animate__fadeIn animate__faster";
      }
    } else {
      if (!scroller.classList.contains("animate__fadeOut")) {
        scroller.className =
          "animate__animated animate__fadeOut animate__faster";
      }
    }
  }, 128)
);

export default {
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  }
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/elements.scss";
#scroller {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 8px;
  right: 8px;
  width: 38px;
  height: 38px;
  background-color: $primary;
  cursor: pointer;
  i {
    font-size: 24px;
    color: #fff;
  }
}
</style>