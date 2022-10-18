<template>
  <div :ref="_uid" class="product pointer">
    <img @click="handleClick" src="~/assets/images/store-images/1.jpeg" alt="" />
    <div @click="quickView" class="quick-view" :class="{ 'quick-view_active': hover }">
      Quick View
    </div>
    <div @click="handleClick" class="description">
      <div class="name">{{ product.title }}</div>
      <div class="price">£{{ product.variants }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Product",
  data() {
    return {
      hover: false,
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
  },
  methods: {
    quickView() {
      this.$store.commit("setModal", {
        type: 'product-overview',
        show: true,
        data: {},
      });
    },
    handleClick() {
      this.$router.push("/shop/product/");
      // TODO: handle button click
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/scss/components/product";
</style>