<template>
  <div>
    <div class="modal fade show" tabindex="-1" role="dialog" id="preview">
      <div class="modal-dialog modal-dialog-centered modal-xl">
        <div class="modal-content is-borderless">
          <div class="modal-header is-borderless">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <i class="las la-times"></i>
            </button>
          </div>
          <div
            class="modal-body d-flex align-items-center justify-content-center flex-column text-white"
          >
            <img :src="image" class="img-fluid" />
            <p class="py-3">Modal body text goes here.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["image"]
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/elements.scss";

.modal-content {
  background: transparent;
}

button {
  &:focus {
    outline: none;
  }
  i {
    font-size: 24px;
    font-weight: bold;
    color: #fff;
  }
}
</style>