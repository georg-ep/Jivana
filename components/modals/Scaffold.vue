<template>
  <div
    :style="styles"
    class="scaffold"
    :class="show ? 'scaffold_active' : 'scaffold_inactive'"
  >
    <img
      class="close pointer"
      :class="{ close_visible: show }"
      @click="close"
      src="~/assets/icons/white-close.svg"
      alt=""
    />
    <div class="content" :class="{ content_visible: show }">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "Scaffold",
  props: {
    type: {
      type: String,
      required: true,
    },
    background: {
      type: String,
      default: "black",
    },
    show: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    styles() {
      return {
        background: this.background,
      };
    },
  },
  methods: {
    async close() {
      if (this.type === "auth") {
        setTimeout(
          () => this.$router.replace({ ...this.$route.query, auth: null }),
          200
        );
      }
      await this.$store.commit("setModal", null);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/scss/components/modals/scaffold";
</style>