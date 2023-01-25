<template>
  <div class="search-container">
    <input
      v-model="query"
      v-on:input="search"
      type="text"
      placeholder="Search for a house in a city"
      class="search-input text-color-2"
    />
    <img
      v-if="searchActive"
      src="@/assets/ic_clear@3x.png"
      v-on:click="resetSearch"
      alt="Clickable image"
    />
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "SearchBar",
  data() {
    return {
      query: "",

      searchActive: false,
    };
  },
  computed: {
    ...mapState(["houses"]),
  },
  methods: {
    search() {
      const results = this.performSearch(this.query);
      console.log(results);
      this.$emit("search", results);
      this.searchActive = true; // set search active state to true
    },
    resetSearch() {
      this.query = "";
      this.$emit("reset", this.houses);
      this.searchActive = false; // set search active state to false
    },
    performSearch(query) {
      return this.houses.filter((house) => {
        // Check if the lowercase version of the location of the house includes the lowercase query string
        return house.location.city.toLowerCase().includes(query.toLowerCase());
      });
    },
  },
};
</script>

<style scoped>
.search-container {
  display: flex; /* position the logo and search bar side by side */
  position: relative;
}

.search-input {
  flex: 1; /* take up remaining space in the search container */
  background-image: url("@/assets/ic_search@3x.png"); /* add the logo as the background image for the search bar */
  background-position: 10px center; /* position the logo to the left of the search bar */
  background-size: 20px; /* adjust the size of the logo */
  height: 40px;
  width: 300px;
  background-color: rgb(232, 232, 232);
  opacity: 0.8;
  background-repeat: no-repeat; /* do not repeat the logo */
  border: 1px solid #ccc; /* add a border to the search bar */
  border-radius: 5px;
  padding-left: 40px; /* add padding to the search bar */
}

img {
  width: 20px;
  height: 20px;
  position: absolute;
  z-index: 1;
  cursor: pointer;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
}
</style>
