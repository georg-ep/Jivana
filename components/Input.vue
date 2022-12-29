<template>
  <div class="dropdown-wrapper">
    <div class="input-wrapper" :style="wrapperStyles">
      <input
        v-if="!textarea"
        :id="_uid"
        v-model="input"
        :style="styles"
        :placeholder="placeholder"
        :type="type"
      />
      <textarea
        :id="id"
        v-model="input"
        :style="styles"
        :placeholder="placeholder"
        v-else
      />
      <div v-if="icon" class="icon-wrapper pointer" :style="iconWrapperStyles">
        <img :style="iconStyles" class="icon" :src="getIcon" alt="search" />
      </div>
    </div>
    <div class="items">
      <div
        v-for="(item, index) in items"
        :key="`item_${index}`"
        :class="{ item_visible: showItem(item) }"
        class="item"
      >
        <slot name="dropdown-item" :product="item" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Input",
  props: {
    model: {
      type: String,
      required: true,
    },
    items: {
      type: Array,
      default: () => [],
    },
    textarea: {
      type: Boolean,
      default: false,
    },
    textColour: {
      type: String,
      default: "white",
    },
    height: {
      type: String,
      default: "30px",
    },
    type: {
      type: String,
      default: "text",
    },
    placeholder: {
      type: String,
      default: "",
    },
    icon: {
      type: String,
      default: "",
    },
    iconSize: {
      type: String,
      default: "16px",
    },
    border: {
      type: String,
      default: "none",
    },
    background: {
      type: String,
      default: "white",
    },
    placeholderTextColour: {
      type: String,
      default: "white",
    },
    iconWrapperSize: {
      type: String,
      default: "30px",
    },
  },
  data() {
    return {
      id: null,
      isActive: false,
    };
  },
  mounted() {
    const input = document.getElementById(this._uid);
    input.addEventListener("focusin", () => (this.isActive = true));
    input.addEventListener("focusout", () => setTimeout(() => (this.isActive = false), 200));
  },
  computed: {
    showItem() {
      return (item) => {
        return (
          this.items &&
          this.isActive &&
          item.title.toLowerCase().includes(this.model.toLowerCase())
        );
      };
    },
    input: {
      get() {
        return this.model;
      },
      set(value) {
        this.$emit("update:model", value);
      },
    },
    iconWrapperStyles() {
      return {
        width: this.iconWrapperSize,
      };
    },
    iconStyles() {
      return {
        height: this.iconSize,
        width: this.iconSize,
      };
    },
    wrapperStyles() {
      const styles = {
        height: this.height,
        "border-radius": "2px",
        border: this.border,
      };
      return styles;
    },
    getIcon() {
      return require(`~/assets/icons/${this.icon}.svg`);
    },
    styles() {
      const activeDropdown = this.isActive && this.items;
      const styles = {
        "border-radius": this.icon
          ? "2px 0 0 2px"
          : activeDropdown
          ? "2px 2px 0 0"
          : "2px",
        background: this.background,
        color: this.textColour,
        resize: "none",
      };
      if (this.textarea) {
        styles["padding-top"] = "6px";
      }
      return styles;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/components/input";
</style>