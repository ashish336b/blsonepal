<template>
  <div>
    <Cover current="Contact Us" image="" />
    <div class="container py-5 my-5">
      <div class="row">
        <div class="col-12 text-center">
          <h1 class="mb-0">
            KEEP IN
            <span>TOUCH</span>
          </h1>
          <Separator />
          <p>Go for it, don’t hesitate to contact us for donation, volunteering project.</p>
        </div>
      </div>
      <Cards />
    </div>

    <Hello />

    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14135.995796052694!2d85.30684642745528!3d27.655504225012635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb177f078f1cd9%3A0xb514415c5a76afb3!2sKusunti%2C%20Lalitpur%2044700!5e0!3m2!1sen!2snp!4v1592995638762!5m2!1sen!2snp"
        width="100%"
        height="450"
        frameborder="0"
        style="border:0;"
        allowfullscreen
        aria-hidden="false"
        tabindex="0"
      ></iframe>
    </div>
  </div>
</template>

<script>
import Cover from "@/components/UI/Cover.vue";
import Separator from "@/components/UI/Separator.vue";
import Cards from "@/components/contact/Cards.vue";
import Hello from "@/components/contact/Hello.vue";

export default {
  components: {
    Cover,
    Separator,
    Cards,
    Hello
  }
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/elements.scss";
iframe {
  display: block;
}
</style>