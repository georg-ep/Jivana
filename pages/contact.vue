<template>
  <div class="container container_spacing">
    <div class="contact">
      <div class="title mb-24">Contact Us</div>
      <div class="mb-8">
        We welcome your comments and questions about our products, our site, and
        us.
      </div>
      <div class="mb-8">
        For larger quantities of spices, delivery information, or anything else,
        please contact us via phone, email, or social media.
      </div>
      <div class="mb-24">We will answer as soon as we can.</div>
      <div class="form">
        <div class="title mb-12">Get in touch</div>
        <div class="flex input-row w-100 gap-10 mb-12">
          <Input
            class="w-100"
            :background="'transparent'"
            :border="'1px solid black'"
            :text-colour="'black'"
            :placeholder="'First name'"
          />
          <Input
            class="w-100"
            :background="'transparent'"
            :border="'1px solid black'"
            :text-colour="'black'"
            :placeholder="'Surname'"
          />
        </div>
        <div class="flex input-row w-100 gap-10 mb-12">
          <Input
            class="w-100"
            :background="'transparent'"
            :border="'1px solid black'"
            :text-colour="'black'"
            :placeholder="'Email'"
          />
          <Input
            class="w-100"
            :background="'transparent'"
            :border="'1px solid black'"
            :text-colour="'black'"
            :placeholder="'Phone number'"
          />
        </div>
        <Input
          class="w-100 mb-24"
          :background="'transparent'"
          :textarea="true"
          :height="'100px'"
          :border="'1px solid black'"
          :text-colour="'black'"
          :placeholder="'Message'"
        />
        <Button
          :text="'Submit'"
          :background="'black'"
          :text-colour="'white'"
          :width="'100%'"
          :height="'30px'"
          :border-radius="'4px'"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactPage",
};
</script>

<style lang="scss" scoped>
@import "~/assets/scss/pages/contact";
</style>