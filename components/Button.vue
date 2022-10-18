<template>
  <div @click="$emit('click')" :style="styles" class="button-wrapper pointer">
    <div class="text">{{ text }}</div>
  </div>
</template>

<script>
export default {
  name: "Button",
  props: {
    border: {
      type: String,
      default: "none",
    },
    background: {
      type: String,
      default: "white",
    },
    fontSize: {
      type: String,
      default: "16px",
    },
    borderRadius: {
      type: String,
      default: "0",
    },
    textColour: {
      type: String,
      default: "black",
    },
    width: {
      type: String,
      default: "auto",
    },
    height: {
      type: String,
      default: "auto",
    },
    text: {
      type: [String, Number],
      default: "",
    },
  },
  computed: {
    styles() {
      return {
        border: this.border,
        background: this.background,
        height: this.height,
        "font-size": this.fontSize,
        color: this.textColour,
        width: this.width,
        "border-radius": this.borderRadius,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/scss/components/button";
</style>