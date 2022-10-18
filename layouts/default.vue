<template>
  <div style="position: relative">
    <Modals />
    <Nav />
    <nuxt style="position: relative" id="body" />
    <Footer />
  </div>
</template>

<script>
export default {
  name: "DefaultLayout",
  computed: {
    modal() {
      return this.$store.getters.modal;
    },
  },
};
</script>