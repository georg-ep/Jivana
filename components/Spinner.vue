<template>
  <div class="lds-ripple">
    <div :style="{ border: `4px solid ${colour}` }"></div>
    <div :style="{ border: `4px solid ${colour}` }"></div>
  </div>
</template>

<script>
export default {
  name: "Spinner",
  props: {
    colour: {
      type: String,
      default: "white",
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/scss/components/spinner.scss";
</style>