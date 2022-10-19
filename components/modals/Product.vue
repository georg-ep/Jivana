<template>
  <Scaffold :type="'product'" :background="'#00000070'" :show="show">
    <div class="container">
      <div v-if="product" class="product flex">
        <img
          class="image"
          v-if="product.images[0]"
          :src="product.images[0].src"
          :class="imageLoaded ? 'image_show' : 'image_hide'"
          alt=""
          @load="loadImage"
        />
        <div class="product_details">
          <div class="title mb-12">{{ product.title }}</div>
          <div class="label">Price</div>
          <div class="price mb-24">£{{ getPrice }}</div>
          <div class="label">Quantity</div>
          <div class="field-wrapper mb-12">
            <Input
              class="mb-12"
              :model.sync="quantity"
              :border="'1px solid black'"
              :text-colour="'black'"
              :type="'number'"
            />
          </div>
          <Button
            :text="'Add to cart'"
            :backgroun="'transparent'"
            :border="'1px solid #0058E1'"
            :text-colour="'#0058E1'"
            :height="'30px'"
          />
          <div @click="toDetail" class="underline mt-24 pointer">View more details</div>
        </div>
      </div>
    </div>
  </Scaffold>
</template>

<script>
import Scaffold from "~/components/modals/Scaffold.vue";
export default {
  name: "Product",
  components: { Scaffold },
  data() {
    return {
      quantity: "1",
      imageLoaded: false,
    };
  },
  props: {
    product: {
      type: Object,
      required: true,
    },
    show: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    getPrice() {
      return Number(this.product.variants[0].price.amount).toFixed(2);
    },
    productId() {
      const sid = this.product.id;
      const lastIdx = sid.lastIndexOf("/");
      return sid.slice(lastIdx + 1);
    },
  },
  methods: {
    loadImage() {
      this.imageLoaded = true;
    },
    select() {
      document.getElementById("select").click();
    },
    toDetail() {
      this.$store.commit("setModal", null);
      this.$router.push(`/shop/${this.productId}`);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/scss/components/modals/product";
@import "~/assets/scss/pages/product-detail";
</style>