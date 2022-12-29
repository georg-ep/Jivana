<template>
  <div>
    <Banner />
    <div class="menu" :class="showMenu ? 'menu_show' : 'menu_hide'">
      <div
        v-for="(item, index) in navItems"
        :key="`item_${index}`"
        class="menu_item"
        @click="navRoute(item)"
      >
        {{ item.label }}
      </div>
      <div class="flex center nav-auth">
        <Button
          class="mr-8"
          :text="'Login'"
          :height="'30px'"
          :text-colour="'white'"
          :background="'transparent'"
          :border="'1px solid white'"
          @click="showAuth('login')"
        />
        <Button
          :text="'Sign up'"
          :height="'30px'"
          @click="showAuth('register')"
        />
      </div>
      <div class="flex center w-100 mt-24">
        <img class="cart" src="~/assets/icons/white-shopping-cart.svg" alt="" />
      </div>
    </div>
    <div class="nav" :class="{ 'nav_fill-bg': showMenu }" :style="navStyles">
      <div class="flex space-between links container align-center">
        <div class="flex align-center">
          <img
            @click="showMenu = !showMenu"
            class="burger-menu hide-desktop pointer"
            :src="burgerSource"
            alt=""
          />
          <img
            class="logo pointer"
            src="~/assets/images/logo.jpeg"
            alt="logo"
          />
          <div class="flex hide-mobile">
            <div
              @click="$router.push(`/${item.route}`)"
              class="item pointer flex"
              v-for="(item, index) in navItems"
              :key="`item_${index}`"
            >
              <div
                class="nav-link"
                v-if="!item.links"
                :class="{ selected: isSelected(item) }"
              >
                {{ item.label }}
              </div>
              <DropdownLink v-else :item="item" />
            </div>
          </div>
        </div>
        <div class="flex center nav-auth hide-mobile">
          <!-- <Button
            class="mr-8"
            :text="'Login'"
            :height="'30px'"
            :text-colour="'white'"
            :background="'transparent'"
            :border="'1px solid white'"
            @click="showAuth('login')"
          />
          <Button
            :text="'Sign up'"
            :height="'30px'"
            @click="showAuth('register')"
          /> -->
          <div class="cart">
            <img
              class="cart_icon pointer"
              @click="toCart"
              src="~/assets/icons/white-shopping-cart.svg"
              alt=""
            />
            <div v-if="cartSize" class="cart_size">
              {{ cartSize }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Nav",
  props: {
    absolute: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      search: "",
      showMenu: false,
      navItems: [
        {
          label: "Home",
          route: "",
          name: "index",
        },
        {
          label: "Shop",
          route: "shop",
          name: "shop",
          links: [
            {
              label: "Jivana Spices",
            },
            {
              label: "Jivana Spice Blends",
            },
            {
              label: "Pulses Lentils & Rice",
            },
            {
              label: "Jivana Lentil Boxes",
            },
            {
              label: "Gifts Coming Soon",
            },
          ],
        },
        {
          label: "Our Story",
          route: "our-story",
          name: "story",
        },
        {
          label: "Eco",
          route: "eco",
          name: "eco",
        },
        {
          label: "Contact",
          route: "contact",
          name: "contact",
        },
      ],
      cartSize: 0,
    };
  },
  mounted() {
    this.$nuxt.$on("updateCart", () => this.fetchCart());
    this.fetchCart();
  },
  computed: {
    isSelected() {
      return (item) => item.name === this.$route.name;
    },
    navStyles() {
      const styles = {
        position: "relative",
        background: "black",
      };

      if (this.absolute) {
        styles.position = "absolute";
        styles.background = "rgba($color: black, $alpha: 0.5)";
      }

      return styles;
    },
    burgerSource() {
      return this.showMenu
        ? require("~/assets/icons/white-close.svg")
        : require("~/assets/icons/white-burger-menu.svg");
    },
  },
  methods: {
    toCart() {
      this.$router.push("/shop/checkout/");
    },
    fetchCart() {
      if (localStorage.getItem("jivana_cart")) {
        const products = JSON.parse(localStorage.getItem("jivana_cart"));
        let items = 0;
        products.forEach((product) => (items += product.quantity));
        this.cartSize = items;
      }
    },
    navRoute(item) {
      this.$router.push(`/${item.route}`);
      setTimeout(() => (this.showMenu = false), 500);
    },
    async showAuth(type) {
      await this.$store.commit("setModal", {
        show: true,
        type: "auth",
      });
      this.$router.replace({ query: { ...this.$route.query, auth: type } });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/components/nav.scss";
</style>