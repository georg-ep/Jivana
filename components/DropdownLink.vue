<template>
  <div class="link-wrapper" :ref="_uid">
    <div class="dropdown-link flex align-center">
      <div>{{ item.label }}</div>
      <img
        :class="{ rotated: showDropdown }"
        class="dropdown-icon"
        src="~/assets/icons/white-chevron-down.svg"
        alt=""
      />
    </div>
    <div
      class="dropdown"
      :class="showDropdown ? 'dropdown_visible' : 'dropdown_hidden'"
    >
      <div class="links">
        <div
          v-for="(link, index) in item.links"
          :key="`link_${index}`"
          class="link"
        >
          {{ link.label }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DropdownLink",
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      showDropdown: false,
    };
  },
  mounted() {
    const dropdown = this.$refs[this._uid];
    dropdown.addEventListener("mouseover", () => (this.showDropdown = true));
    dropdown.addEventListener("mouseleave", () => (this.showDropdown = false));
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/scss/components/dropdown-link";
</style>