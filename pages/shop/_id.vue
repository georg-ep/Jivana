<template>
  <div class="container container_spacing">
    <div class="product-detail">
      <div class="product-detail_row mb-24">
        <img class="image" src="~/assets/images/store-images/1.jpeg" alt="" />
        <div class="product-detail_details">
          <div class="title">Product Name</div>
          <div class="price mb-24">£600</div>
          <div class="label">Quantity</div>
          <div class="buttons-wrapper mb-24">
            <Button
              v-for="(i, index) in quantities"
              :key="`quantity_${index}`"
              :width="'40px'"
              :height="'40px'"
              :text="i"
              :background="
                selected(index, 'quantity') ? 'black' : 'transparent'
              "
              :border="'1px solid black'"
              :text-colour="selected(index, 'quantity') ? 'white' : 'black'"
              :border-radius="'4px'"
              @click="select(index, 'quantity')"
            />
          </div>
          <div class="label">Serving Size (People)</div>
          <div class="buttons-wrapper mb-24">
            <Button
              v-for="(i, index) in servingSizes"
              :key="`serving_${index}`"
              :width="'40px'"
              :height="'40px'"
              :text="i"
              :background="selected(index, 'serving') ? 'black' : 'transparent'"
              :border="'1px solid black'"
              :text-colour="selected(index, 'serving') ? 'white' : 'black'"
              :border-radius="'4px'"
              @click="select(index, 'serving')"
            />
          </div>
          <div class="flex space-between align-center add-to-cart">
            <div class="total">
              <div class="label">Total</div>
              <div>£9999.99</div>
            </div>
            <Button
              :text="'Add to cart'"
              :background="'black'"
              :border="'1px solid black'"
              :text-colour="'white'"
              :height="'40px'"
              :border-radius="'4px'"
            />
          </div>
        </div>
      </div>
      <div class="section mb-24">
        <div class="subtitle">What's it all about?</div>
        <div class="description">
          A delicious, hearty meal, based on a recipe from our time spent in the
          Middle East, this dish is deeply aromatic and flavoursome, as well as
          being heathly, full of protein and nutrients. Tarka dal is one of the
          most popular lentil dishes, with tarka being onions, tomatoes and
          spices, which are then added to the lentils, or dal. Suitable for a
          vegan and vegetarian diet.
        </div>
      </div>
      <div class="section">
        <div class="subtitle">What's included?</div>
        <div class="description mb-8">
          Basmati rice, red split lentils, moong dal (split yellow lentils), all
          spices (turmeric, ground ginger, ground garlic, MUSTARD seeds, nigella
          (onion) seeds, curry leaves, whole dried chillis, salt, Jivana garam
          masala), recipe card. All portions are pre-measured so there is zero
          waste.
        </div>
        <div class="description mb-8">
          Meal Box Price per person for: 2 servings = £4 each, 4 servings =
          £3.75 each, 6 servings = £3.50 each, 8 servings = £3.25.
        </div>
        <div class="description mb-8">Fresh ingredients not included.</div>
        <div class="description">All packaging is recycled and recyclable.</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductDetailPage",
  data() {
    return {
      quantity: 1,
      quantities: [1, 2, 3, 4, 5, 6, 7, 8],
      serving: 0,
      servingSizes: [1, 2, 3, 4, 5, 6, 7, 8],
    };
  },
  computed: {
    selected() {
      return (idx, key) => this[key] === idx;
    },
  },
  methods: {
    select(idx, key) {
      this[key] = idx;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/scss/pages/product-detail";
</style>