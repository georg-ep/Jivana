<template>
  <div class="items" :class="showDropdown ? 'items_visible' : 'items_hidden'">
    <div v-for="(item, index) in items" :key="`item_${index}`" class="item">
      {{ item }}
    </div>
  </div>
</template>

<script>
export default {
  name: "InputItems",
  props: {
    model: {
      type: String,
      required: true,
    },
    items: {
      type: Array,
      required: true,
    },
  },
  computed: {
    showDropdown() {
      return this.items && this.model;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/components/input";
</style>