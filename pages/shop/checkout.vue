<template>
  <div class="container container_spacing">
    <div class="checkout">
      <div class="summary">Order summary <span>({{ items }} items)</span></div>
      <div
        v-for="(product, index) in products"
        :key="`product_${index}`"
        class="item"
      >
        <div class="content">
          <img class="thumbnail" :src="product.thumbnail" alt="" />
          <div class="right-content">
            <div>
              <div class="title">
                {{ product.name }}
              </div>
              <div class="label">£{{ product.price }}</div>
            </div>
            <div class="flex">
              <div class="quantity-wrapper">
                <Button
                  class="btn"
                  :text="'-'"
                  :background="'black'"
                  :text-colour="'white'"
                  :border-radius="'4px'"
                  :height="'20px'"
                  @click="updateQuantity(product.id, 'remove')"
                />
                <div class="quantity">{{ product.quantity }}</div>
                <Button
                  class="btn"
                  :text="'+'"
                  :background="'black'"
                  :text-colour="'white'"
                  :border-radius="'4px'"
                  :height="'20px'"
                  @click="updateQuantity(product.id, 'add')"
                />
              </div>
              <div class="total">£{{ getTotal(product) }}</div>
              <Button
                class="remove"
                :text="'X'"
                :background="'transparent'"
                :border="'1px solid black'"
                :text-colour="'black'"
                :border-radius="'4px'"
                @click="remove(product)"
              />
            </div>
          </div>
        </div>
      <Button
        :text="'Checkout'"
        :background="'black'"
        :text-colour="'white'"
        :width="'100%'"
        class="mt-24 mb-24"
        :height="'40px'"
        @click="checkout"
      />
      </div>
    </div>
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
  computed: {
    getTotal() {
      return (product) => (product.price * product.quantity).toFixed(2);
    },
    items() {
      let amount = 0;
      this.products.forEach(itm => amount += itm.quantity);
      return amount;
    },
  },
  methods: {
    remove(item) {
      this.products = this.products.filter(product => product.id !== item.id);
      localStorage.setItem("jivana_cart", JSON.stringify(this.products));
      this.$nuxt.$emit("updateCart");
    },
    updateQuantity(id, type) {
      const isRemove = type === "remove";
      const { products } = this;

      const product = products.find((product) => product.id === id);

      if (isRemove && product.quantity === 1) return;

      isRemove ? (product.quantity -= 1) : (product.quantity += 1);

      localStorage.setItem("jivana_cart", JSON.stringify(products));

      this.$nuxt.$emit("updateCart");
    },
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