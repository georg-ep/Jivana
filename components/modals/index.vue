<template>
  <div>
    <Auth :show="modal && modal.type === 'auth' && modal.show" />
    <Product
      :show="modal && modal.type === 'product-overview' && modal.show"
      :product="modal && modal.data"
    />
  </div>
</template>

<script>
import Auth from "~/components/modals/Auth.vue";
import Product from "~/components/modals/Product.vue";
export default {
  name: "Modals",
  components: {
    Auth,
    Product,
  },
  computed: {
    modal() {
      return this.$store.getters.modal;
    },
  },
};
</script>