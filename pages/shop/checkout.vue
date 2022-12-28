<template>
  <div class="container container_spacing">
    <div
      v-for="(product, index) in products"
      :key="`product_${index}`"
      class="item"
    >
      <img class="thumbnail" :src="product.thumbnail" alt="" />
      <div class="right-content">
        <div class="title">
          {{ product.name }}
        </div>
        <div class="label">Quantity</div>
        <div>{{ product.quantity }}</div>
      </div>
    </div>
    <Button
      :text="'Checkout'"
      :background="'black'"
      :text-colour="'white'"
      :width="'100%'"
      class="mt-24"
      :height="'40px'"
      @click="checkout"
    />
  </div>
</template>

<script>
import Client from "shopify-buy";

export default {
  name: "CheckoutPage",
  data() {
    return {
      products: [],
    };
  },
  mounted() {
    this.products = JSON.parse(localStorage.getItem("jivana_cart"));
  },
  methods: {
    async checkout() {
      const client = Client.buildClient({
        domain: "jivana-spices.myshopify.com",
        storefrontAccessToken: "a690ca678ddc3b84bbbf089ce89b81e3",
      });
      const shopifyCheckout = await client.checkout.create();
      let products = JSON.parse(localStorage.getItem("jivana_cart"));
      let line_items = [];
      products.forEach((item) =>
        line_items.push({
          variantId: item.id,
          quantity: item.quantity,
        })
      );

      try {
        await client.checkout.addLineItems(shopifyCheckout.id, line_items);
      } catch (e) {
        console.log(e);
        return;
      }
      window.location.replace(shopifyCheckout.webUrl);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/scss/pages/checkout.scss";
</style>