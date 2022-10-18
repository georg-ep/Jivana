<template>
  <Scaffold :show="show" :type="'auth'">
    <div class="container_modal">
      <div class="auth w-100">
        <div class="heading mb-24">{{ modalTitle }}</div>
        <div class="fields w-100">
          <Input
            :background="'transparent'"
            :model.sync="email"
            :border="'1px solid white'"
            class="mb-8"
            :placeholder="'Email'"
          /><Input
            :background="'transparent'"
            :model.sync="password"
            :border="'1px solid white'"
            :placeholder="'Password'"
            class="mb-8"
          /><Input
            v-if="isRegister"
            :background="'transparent'"
            :model.sync="repeatPassword"
            :border="'1px solid white'"
            :placeholder="'Repeat Password'"
            class="mb-8"
          />
          <Button
            :text="modalTitle"
            :width="'100%'"
            :height="'30px'"
            :background="'transparent'"
            :border="'1px solid white'"
            :text-colour="'white'"
            class="mb-24 mt-24"
          />
          <div class="flex center col align-center">
            <div>
              {{ switchAuthText[0] }}
            </div>
            <div class="mt-8 pointer underline" @click="switchAuth">
              {{ switchAuthText[1] }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </Scaffold>
</template>

<script>
import Scaffold from "~/components/modals/Scaffold.vue";
export default {
  name: "Login",
  components: { Scaffold },
  data() {
    return {
      email: "",
      password: "",
      repeatPassword: "",
      auth: "",
    };
  },
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  watch: {
    "$route.query.auth"(val) {
      this.auth = val;
    },
  },
  methods: {
    switchAuth() {
      this.$router.replace({
        query: {
          ...this.$route.query,
          auth: this.isRegister ? "login" : "register",
        },
      });
    },
  },
  computed: {
    isRegister() {
      return this.auth === "register";
    },
    switchAuthText() {
      return this.isRegister
        ? ["Already registered?", "Login here"]
        : ["Don't have an account yet?", "Register here"];
    },
    modalTitle() {
      return this.isRegister ? "Register" : "Login";
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/scss/components/modals/auth";
</style>