<template>
  <div class="filter-container">
    <button
      v-bind:class="{ active: selectedOption === 'price' }"
      v-on:click="filterBy('price')"
      class="filter-button button-price"
    >
      Price
    </button>
    <button
      v-bind:class="{ active: selectedOption === 'size' }"
      v-on:click="filterBy('size')"
      class="filter-button button-size"
    >
      Size
    </button>
  </div>
</template>

<style>
.filter-container {
  display: flex; /* position the buttons next to each other */
}

.filter-button {
  /* set the default background color of the buttons */
  border: none; /* remove the border from the buttons */
  color: #fff; /* set the text color of the buttons */
  display: inline-block; /* position the buttons next to each other */
  font-size: 18px; /* set the font size of the buttons */
  padding: 8px; /* add padding to the buttons */
  width: 130px;
  /* border-radius: 5px 5px 5px 5px; */
}

.button-price {
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  background-color: rgb(235, 84, 64);
}

.button-size {
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  background-color: #ccc;
}

.filter-button:hover {
  background-color: #999; /* change the background color of the buttons when hovered over */
}

.filter-button:active {
  background-color: #666; /* change the background color of the buttons when clicked */
}
</style>
<script>
export default {
  name: "FilterBar",
  data() {
    return {
      selectedOption: "price",
      active: false,
    };
  },
  methods: {
    filterBy(property) {
      this.selectedOption = property;
      // Emit the filter event with the property to filter by
      this.$emit("filter", property);
    },
  },
};
</script>
