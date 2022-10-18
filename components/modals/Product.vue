<template>
  <Scaffold :type="'product'" :background="'#00000070'" :show="show">
    <div class="container">
      <div class="product flex">
        <img class="image" src="~/assets/images/store-images/1.jpeg" alt="" />
        <div class="product_details">
          <div class="title mb-12">Some product name</div>
          <div class="label">Price</div>
          <div class="price mb-24">£333333</div>
          <div class="label">Quantity</div>
          <div class="field-wrapper">
            <Input
              class="mb-12"
              :model.sync="quantity"
              :border="'1px solid black'"
              :text-colour="'black'"
              :type="'number'"
            />
          </div>
          <div @click="select()">Here is a test</div>
          <select id="select" hidden>
            <option value="test">Test</option>
          </select>
          <Button
            :text="'Add to cart'"
            :backgroun="'transparent'"
            :border="'1px solid #0058E1'"
            :text-colour="'#0058E1'"
            :height="'30px'"
          />
          <div class="underline mt-24">View more details</div>
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
    };
  },
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    select() {
      document.getElementById("select").click();
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/scss/components/modals/product";
@import "~/assets/scss/pages/product-detail";
</style>