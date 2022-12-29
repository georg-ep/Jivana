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
              :items="products"
              :item-type="'shopify'"
              :text-colour="'black'"
              :placeholder="'What are you looking for'"
              class="flex_1"
            >
              <template v-slot:dropdown-item="slotProps">
                <div class="dropdown-item" @click="toProduct(slotProps.product)">
                  <img
                    class="image"
                    :src="slotProps.product.images[0]?.src"
                    alt=""
                  />
                  <div class="info">
                    <div class="name">
                      {{ slotProps.product.title }}
                    </div>
                    <div class="price">
                      {{ getPrice(slotProps.product) }}
                    </div>
                  </div>
                </div>
              </template></Input
            >
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
              @click="$router.push('/our-story/')"
            />
            <Button
              class="button"
              :text="'Shop Now'"
              :background="'#617C67'"
              :height="'40px'"
              :border-radius="'4px'"
              :font-size="'20px'"
              :text-colour="'white'"
              @click="$router.push('/shop/')"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Client from "shopify-buy";

export default {
  name: "IndexPage",
  layout: "landing",
  data() {
    return {
      search: "",
      products: null,
    };
  },
  watch: {
    async search(val) {
      if (!this.products) {
        const client = Client.buildClient({
          domain: "jivana-spices.myshopify.com",
          storefrontAccessToken: "a690ca678ddc3b84bbbf089ce89b81e3",
        });
        this.products = await client.product.fetchAll();
      }
    },
  },
  methods: {
    toProduct(product) {
      const idx = product.id.lastIndexOf("/");
      const id = product.id.slice(idx + 1);
      this.$router.push(`/shop/${id}/`);
    }
  },
  computed: {
    getPrice() {
      return (product) => `£${Number(product.variants[0].price.amount).toFixed(2)}`;
    },
    imgSrc() {
      return (idx) => require(`~/assets/images/store-images/${idx + 1}.jpeg`);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/scss/pages/landing.scss";
</style>
