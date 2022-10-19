<template>
  <div :ref="_uid" class="product pointer">
    <div class="image-container">
      <img
        @click="handleClick"
        v-if="product.images[0]"
        :src="product.images[0].src"
        alt=""
        :class="imageLoaded ? 'image_show' : 'image_hide'"
        @load="loadImage"
      />
      <div v-else>Upload Image</div>
      <Spinner v-if="product.images.length && !imageLoaded" />
    </div>
    <div
      @click="quickView"
      class="quick-view"
      :class="{ 'quick-view_active': hover }"
    >
      Quick View
    </div>
    <div @click="handleClick" class="description">
      <div class="name">{{ product.title }}</div>
      <div class="type">{{ product.productType }}</div>
      <div class="price">£{{ getPrice }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Product",
  data() {
    return {
      hover: false,
      imageLoaded: false,
    };
  },
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  mounted() {
    if (window.innerWidth > 1000) {
      const product = this.$refs[this._uid];
      product.addEventListener("mouseover", () => (this.hover = true));
      product.addEventListener("mouseleave", () => (this.hover = false));
    }
    console.log(this.product);
  },
  computed: {
    getPrice() {
      return Number(this.product.variants[0].price.amount).toFixed(2);
    },
  },
  methods: {
    loadImage() {
      setTimeout(() => (this.imageLoaded = true), 200);
    },
    quickView() {
      this.$store.commit("setModal", {
        type: "product-overview",
        show: true,
        data: this.product,
      });
    },
    handleClick() {
      const sid = this.product.id;
      const lastIdx = sid.lastIndexOf("/");
      const id = sid.slice(lastIdx + 1);
      this.$router.push(`/shop/${id}`);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/scss/components/product";
</style>