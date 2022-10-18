<template>
  <div>
    <Nav :absolute="true" />
    <nuxt />
    <Footer />
    <Modals />
  </div>
</template>

<script>
export default {
  name: "LandingLayout",
};
</script>