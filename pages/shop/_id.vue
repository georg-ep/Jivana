<template>
  <div class="container container_spacing">
    <div v-if="product" class="product-detail">
      <div class="product-detail_row mb-24">
        <img
          class="image"
          v-if="selectedImage"
          :src="selectedImage"
          @click="updateImage"
          alt=""
          :class="imageLoaded ? 'image_show' : 'image_hide'"
          @load="loadImage"
        />
        <div v-else>Upload Image</div>
        <div
          v-if="product.images.length && !imageLoaded"
          class="flex center align-center image"
        >
          <Spinner :colour="'black'" />
        </div>
        <div class="product-detail_details">
          <div class="title mb-24">{{ product.title }}</div>

          <div v-if="hasWeight" class="label">Weight</div>
          <div v-if="hasWeight" class="mb-24">{{ weights[0] }}</div>

          <div class="label">Quantity</div>
          <div class="buttons-wrapper mb-24">
            <Button
              v-for="(i, index) in quantities"
              :key="`quantity_${index}`"
              :width="'40px'"
              :height="'40px'"
              :text="i"
              :background="
                selected(index, 'quantity') ? 'black' : 'transparent'
              "
              :border="'1px solid black'"
              :text-colour="selected(index, 'quantity') ? 'white' : 'black'"
              :border-radius="'4px'"
              @click="select(index, 'quantity')"
            />
          </div>
          <div class="label">Serving Size (People)</div>
          <div class="buttons-wrapper mb-24">
            <Button
              v-for="(i, index) in servingSizes"
              :key="`serving_${index}`"
              :width="'40px'"
              :height="'40px'"
              :text="i"
              :background="selected(index, 'serving') ? 'black' : 'transparent'"
              :border="'1px solid black'"
              :text-colour="selected(index, 'serving') ? 'white' : 'black'"
              :border-radius="'4px'"
              @click="select(index, 'serving')"
            />
          </div>
          <div class="flex space-between align-center add-to-cart">
            <div class="total">
              <div class="label">Total</div>
              <div>£{{ getTotal }}</div>
            </div>
            <Button
              :text="'Add to cart'"
              :background="'black'"
              @click="addToCart"
              :border="'1px solid black'"
              :text-colour="'white'"
              :height="'40px'"
              :border-radius="'4px'"
            />
          </div>
        </div>
      </div>
      <div class="section mb-24">
        <div class="subtitle">What's it all about?</div>
        <div class="description" v-html="product.descriptionHtml" />
        <!-- <div class="description">
          {{ product.descriptionHtml }}
        </div> -->
      </div>
      <!-- <div class="section">
        <div class="subtitle">What's included?</div>
        <div class="description mb-8">
          Basmati rice, red split lentils, moong dal (split yellow lentils), all
          spices (turmeric, ground ginger, ground garlic, MUSTARD seeds, nigella
          (onion) seeds, curry leaves, whole dried chillis, salt, Jivana garam
          masala), recipe card. All portions are pre-measured so there is zero
          waste.
        </div>
        <div class="description mb-8">
          Meal Box Price per person for: 2 servings = £4 each, 4 servings =
          £3.75 each, 6 servings = £3.50 each, 8 servings = £3.25.
        </div>
        <div class="description mb-8">Fresh ingredients not included.</div>
        <div class="description">All packaging is recycled and recyclable.</div>
      </div> -->
    </div>
    <div class="flex align-center w-100 center" v-else>
      <Spinner :colour="'black'" />
    </div>
  </div>
</template>

<script>
import Client from "shopify-buy";

export default {
  name: "ProductDetailPage",
  data() {
    return {
      quantity: 0,
      quantities: [1, 2, 3, 4, 5, 6],
      servingSizes: [],
      serving: 0,
      product: null,
      weights: [],
      imageLoaded: false,
      selectedImage: null,
      imageIndex: 0,
    };
  },
  async mounted() {
    this.client = Client.buildClient({
      domain: "jivana-spices.myshopify.com",
      storefrontAccessToken: "a690ca678ddc3b84bbbf089ce89b81e3",
    });
    const id = `gid://shopify/Product/${this.$route.params.id}`;
    this.product = await this.client.product.fetch(id);
    this.selectedImage = this.product.images[this.imageIndex]?.src;
    const servingRaw = this.product.options.find(
      (obj) => obj.name === "Serving"
    );
    const weightsRaw = this.product.options.find(
      (obj) => obj.name === "Weight"
    );
    if (servingRaw)
      servingRaw.values.forEach((size) => this.servingSizes.push(size.value));
    if (weightsRaw)
      weightsRaw.values.forEach((weight) => this.weights.push(weight.value));
    console.log(this.weights);
    console.log(this.product);
  },

  computed: {
    hasWeight() {
      let hasWeight = false;
      this.product.options.forEach((option) => {
        if (option.name === "Weight") {
          hasWeight = true;
        }
      });
      return hasWeight;
    },
    selected() {
      return (idx, key) => this[key] === idx;
    },
    getPrice() {
      return Number(this.product.variants[0].price.amount).toFixed(2);
    },
    getTotal() {
      return Number(this.getPrice * (this.quantity + 1)).toFixed(2);
    },
    userCart() {
      return localStorage.getItem("jivana_cart");
    },
  },
  methods: {
    addToCart() {
      let products = [];
      if (this.userCart) {
        products = JSON.parse(this.userCart);
      }

      const product = products.find((item) => item.id === this.product.variants[0].id);
      product
        ? (product["quantity"] = this.quantity + 1)
        : products.push({
            id: this.product.variants[0].id,
            name: this.product.title,
            thumbnail: this.product.images[0]?.src,
            quantity: this.quantity + 1,
          });

      localStorage.setItem("jivana_cart", JSON.stringify(products));
      this.$nuxt.$emit("updateCart");
    },
    updateImage() {
      if (this.imageIndex !== this.product.images.length - 1) this.imageIndex++;
      else this.imageIndex = 0;
      console.log(this.product.images.length, this.imageIndex);
      this.selectedImage = this.product.images[this.imageIndex]?.src;
    },
    loadImage() {
      setTimeout(() => (this.imageLoaded = true), 200);
    },
    select(idx, key) {
      this[key] = idx;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/scss/pages/product-detail";
</style>