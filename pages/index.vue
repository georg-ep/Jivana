<template>
  <div class="landing">
    <div class="cover-image" />
    <div class="landing-container">
      <div class="landing-container_content">
        <div class="container">
          <div>
            <div class="subtitle">Shop sustainable, high quality spices</div>
            <div class="title mb-24">Jivana Spices</div>
          </div>
          <div class="search-field flex">
            <Input
              :model.sync="search"
              :height="'40px'"
              :items="['test', 'hello', 'how', 'are', 'you', '!!']"
              :text-colour="'black'"
              :placeholder="'What are you looking for'"
              class="flex_1"
            />
            <Button
              :text="'Search'"
              :background="'#617C67'"
              :text-colour="'white'"
              class="ml-8"
              :border-radius="'4px'"
            />
          </div>
          <div class="quick-actions mt-48">
            <Button
              class="button"
              :text="'Our Story'"
              :background="'transparent'"
              :border="'1px solid #617C67'"
              :height="'40px'"
              :border-radius="'4px'"
              :font-size="'20px'"
              :text-colour="'white'"
            />
            <Button
              class="button"
              :text="'Shop Now'"
              :background="'#617C67'"
              :height="'40px'"
              :border-radius="'4px'"
              :font-size="'20px'"
              :text-colour="'white'"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  layout: "landing",
  data() {
    return {
      search: "",
    };
  },
  computed: {
    imgSrc() {
      return (idx) => require(`~/assets/images/store-images/${idx + 1}.jpeg`);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/scss/pages/landing.scss";
</style>
