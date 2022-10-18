<template>
  <div class="container container_spacing">
    <div class="shop">
      <div class="shop_search">
        <Input
          class="mb-24"
          :model.sync="search"
          :background="'transparent'"
          :border="'1px solid black'"
          :text-colour="'black'"
          :placeholder="'What are you looking for?'"
        />
      </div>
      <div v-if="products" class="shop_items">
        <Product
          v-for="(product, index) in products"
          :key="`product_${index}`"
          :product="product"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Client from "shopify-buy";

export default {
  name: "ShopPage",
  data() {
    return {
      search: "",
      client: null,
      products: null,
    };
  },
  async mounted() {
    this.client = Client.buildClient({
      domain: "jivana-spices.myshopify.com",
      storefrontAccessToken: "a690ca678ddc3b84bbbf089ce89b81e3",
    });
    this.products = await this.client.product.fetchAll();
    console.log(this.products);
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/scss/pages/shop";
</style>