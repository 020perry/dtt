<template>
  <NavBar />
  <div v-if="!isSmallScreen">
    <div class="box box2" v-if="house.id">
      <div
        style="
          display: flex;
          justify-content: space-between;
          align-items: center;
        "
      >
        <h1>Houses</h1>
        <ButtonCreateNew />
      </div>
    </div>

    <div class="box box4">
      <div
        if
        style="
          display: flex;
          justify-content: space-between;
          align-items: center;
        "
      >
        <SearchBar v-on:search="handleSearch" v-on:reset="resetSearch" />
        <FilterBar v-on:filter="handleFilter" />
      </div>
    </div>
    <h2 v-if="searchActive">{{ searchResults.length }} results found</h2>

    <div
      class="wrapper no-style"
      v-for="house in displayedHouses"
      :key="house.id"
    >
      <div class="nested">
        <div class="nested-box1">
          <router-link :to="{ name: 'HouseShow', params: { id: house.id } }">
            <img v-bind:src="house.image" />
          </router-link>
        </div>
        <div class="nested-box2">
          <router-link
            as="span"
            :to="{ name: 'HouseShow', params: { id: house.id } }"
          >
            <ul>
              <div
                style="
                  display: flex;
                  flex-direction: column;
                  align-items: flex-start;
                "
              >
                <li
                  class="listing-information text-color"
                  style="font-weight: bold"
                >
                  {{ house.location.street }}
                </li>
                <li class="listing-information text-color-2">
                  $ {{ house.price }}
                </li>
                <li class="listing-information text-color-2">
                  {{ house.location.zip + " " + house.location.city }}
                </li>
              </div>
              <div style="display: flex; align-items: center">
                <li style="display: flex; align-items: center">
                  <img class="item-icon" src="@/assets/ic_bed@3x.png" />
                  {{ house.rooms.bedrooms }}
                  &nbsp; &nbsp;
                  <img class="item-icon" src="@/assets/ic_bath@3x.png" />
                  {{ house.rooms.bathrooms }}
                  &nbsp; &nbsp;
                  <img class="item-icon" src="@/assets/ic_size@3x.png" />
                  {{ house.size }}
                </li>
              </div>
            </ul>
          </router-link>
        </div>
        <div class="nested-box4" v-if="house.id && house.madeByMe">
          <div
            style="
              display: flex;
              align-items: flex-start;
              justify-content: flex-end;
              margin-right: 10px;
            "
          >
            <div>
              <!-- <div v-if="house.madeByMe"> -->
              <router-link
                :to="{ name: 'HouseEdit', params: { id: house.id } }"
              >
                <img class="item-icon" src="@/assets/ic_edit@3x.png" />
              </router-link>

              <img
                @click="deleteHouse(house.id)"
                class="item-icon"
                src="@/assets/ic_delete@3x.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div v-if="isSmallScreen">
    <div class="container">
      <div></div>
      <div>
        <h1>Houses</h1>
      </div>
      <div>
        <ButtonCreateNew />
      </div>
    </div>
    <SearchBar
      style="margin-top: 10px"
      v-on:search="handleSearch"
      v-on:reset="resetSearch"
    />
    <FilterBar
      style="margin-top: 10px; width: 100%; justify-content: center"
      v-on:filter="handleFilter"
    />
    <h2 style="display: flex" v-if="searchActive">
      {{ searchResults.length }} results found
    </h2>

    <div
      class="wrapper-mobile"
      v-for="house in displayedHouses"
      :key="house.id"
    >
      <div class="nested-mobile">
        <div class="nested-box1-mobile">
          <router-link :to="{ name: 'HouseShow', params: { id: house.id } }">
            <img v-bind:src="house.image" />
          </router-link>
        </div>
        <div class="nested-box2">
          <router-link
            as="span"
            :to="{ name: 'HouseShow', params: { id: house.id } }"
          >
            <ul>
              <div
                style="
                  display: flex;
                  flex-direction: column;
                  align-items: flex-start;
                "
              >
                <li
                  class="listing-information text-color"
                  style="font-weight: bold"
                >
                  {{ house.location.street }}
                </li>
                <li class="listing-information text-color-2">
                  $ {{ house.price }}
                </li>
                <li class="listing-information text-color-2">
                  {{ house.location.zip + " " + house.location.city }}
                </li>
              </div>
              <div style="display: flex; align-items: center">
                <li style="display: flex; align-items: center">
                  <img class="item-icon" src="@/assets/ic_bed@3x.png" />
                  {{ house.rooms.bedrooms }}
                  &nbsp; &nbsp;
                  <img class="item-icon" src="@/assets/ic_bath@3x.png" />
                  {{ house.rooms.bathrooms }}
                  &nbsp; &nbsp;
                  <img class="item-icon" src="@/assets/ic_size@3x.png" />
                  {{ house.size }}
                </li>
              </div>
            </ul>
          </router-link>
        </div>
        <div class="nested-box4">
          <div
            style="
              display: flex;
              align-items: flex-start;
              justify-content: flex-end;
              margin-right: 10px;
            "
          >
            <div>
              <!-- <div v-if="house.madeByMe"> -->
              <router-link
                :to="{ name: 'HouseEdit', params: { id: house.id } }"
              >
                <img class="item-icon" src="@/assets/ic_edit@3x.png" />
              </router-link>

              <img
                @click="deleteHouse(house.id)"
                class="item-icon"
                src="@/assets/ic_delete@3x.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import ButtonCreateNew from "@/components/ButtonCreateNew.vue";
import SearchBar from "@/components/SearchBar.vue";
import FilterBar from "@/components/FilterBar.vue";
import { mapState, mapActions, mapGetters } from "vuex";
export default {
  name: "HomeOverview",
  data() {
    return {
      searchActive: false,
      query: "",
      searchResults: [],
      selectedHouse: "",
      isSmallScreen: false,
    };
  },
  components: {
    NavBar,
    ButtonCreateNew,
    SearchBar,
    FilterBar,
  },
  mounted() {
    window.addEventListener("resize", this.checkScreenSize);
    this.checkScreenSize();
  },
  computed: {
    ...mapState(["houses"]),
    ...mapGetters(["currentHouse", "houses"]),
    house() {
      return this.currentHouse;
    },
    houses() {
      return this.$store.state.houses;
    },
    filteredHouses() {
      return this.houses.filter((house) => {
        return house.location.city
          .toLowerCase()
          .includes(this.query.toLowerCase());
      });
    },

    displayedHouses: function () {
      // Return the full list of houses if the query is an empty string
      if (this.searchActive) {
        return this.searchResults;
      } else {
        return this.houses;
      }
      // Otherwise, return the filtered houses
      // return this.filteredHouses;
    },
  },
  methods: {
    checkScreenSize() {
      this.isSmallScreen = window.innerWidth <= 800;
    },
    editHouse(house) {
      this.$router.push({
        name: "H",
        params: {
          house: house,
        },
      });
    },
    ...mapActions(["fetchHouses"]),
    // handleSearch(results) {
    //   this.searchActive = true;
    //   this.searchResults = results;
    // },
    resetSearch() {
      // Reset the search query and search results
      // this.query = '';
      // this.searchResults = [];
      this.query = "";
      this.searchResults = [];
      this.searchActive = false;
    },
    handleSearch(results) {
      // this.searchResults = results;
      this.searchResults = results;
      this.searchActive = true;
    },
    search() {
      // Perform the search and emit the search event with the results
      // const results = this.performSearch(this.query);
      // this.$emit('search', results);
      const results = this.performSearch(this.query);
      this.$emit("search", results);
      this.$parent.searchResults = results;
    },

    performSearch(query) {
      // Perform the search and return the results
      // This could involve calling an API or searching a local data source
      // In this example, we'll use the houses from the Vuex store
      return this.houses.filter((house) => {
        // Check if the lowercase version of the location of the house includes the lowercase query string
        return house.location.city.toLowerCase().includes(query.toLowerCase());
      });
    },

    handleFilter(property) {
      // Filter the displayed houses by the property
      this.filteredHouses = this.displayedHouses.sort((a, b) => {
        if (a[property] < b[property]) {
          return -1;
        }
        if (a[property] > b[property]) {
          return 1;
        }
        return 0;
      });
    },
    deleteHouse(houseId) {
      // alert('are you sure you want to delete this house?')
      const confirmation = confirm(
        "Are you sure you want to delete this house?"
      );
      if (confirmation) {
        this.$store.dispatch("deleteHouse", houseId);
      }
      //   this.$store.dispatch("deleteHouse", this.house.id);
    },
  },
  created() {
    this.fetchHouses();
  },
};
</script>
<style scoped>
.wrapper {
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto;
  grid-gap: 1em;
  margin-left: 118px;
  margin-right: 100px;
}

.box2 {
  /*align-self:end;*/
  grid-column: 2/15;
  grid-row: 1;
  display: grid;
  margin-left: 117px;
  padding-right: 100px;
}

.box4 {
  margin-top: 15px;
  grid-column: 2/15;
  grid-row: 2;
  margin-left: 117px;
  margin-bottom: 50px;
  display: grid;
  margin-right: 100px;
}

.box5 {
  grid-column: 2/15;
  grid-row: 3/6;
  margin-left: 117px;
  margin-bottom: 30px;
  margin-top: 10px;
  background-color: rgb(255, 255, 255);
  display: grid;
  margin-right: 198px;
  border-radius: 5px;
}

.nested {
  display: grid;
  grid-template-columns: 23% 30% 40% 20%;
  background-color: rgb(255, 255, 255);
  grid-template-rows: repeat(10, 15%);
  border-radius: 5px;
  margin-bottom: 10px;
  align-content: center;
  justify-items: start;

  padding-bottom: 15px;
}

.nested > .nested-box1 {
  grid-column: 1;
  grid-row: 3/8;
  display: grid;
  padding-left: 20px;
  padding-top: 5px;
  justify-items: start;
}

.nested-box1 img {
  max-width: 100%;

  overflow: hidden;
}

.nested > .nested-box2 {
  grid-column: 2;
  grid-row: 3/8;
  display: grid;
  align-items: center;
  justify-items: center;
}

.item-icon {
  width: 20px;
  height: 20px;
  border-radius: 5px;
  margin-right: 7px;
  overflow: hidden;
}

.nested > .nested-box3 {
  grid-column: 3;
  grid-row: 1/9;
  display: grid;
}

.nested > .nested-box3 {
  grid-column: 4;
  grid-row: 3/8;
  padding-top: 5px;
  display: grid;
}

.nested > .nested-box4 {
  grid-column: 4;
  grid-row: 3/8;
  padding-top: 5px;
  display: grid;
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

li {
  margin: 7px;
}

h2 {
  margin-left: 117px;
  text-align: left;
}
.no-style {
  color: inherit; /* inherit color from parent element */
  text-decoration: none; /* remove underline */
}
a {
  text-decoration: none;
  color: unset;
}

@media (max-width: 800px) {
  .container {
    display: grid; /* sets the container as a grid container */
    grid-template-columns: repeat(3, 1fr); /* creates 3 equal-width columns */
    grid-gap: 10px; /* adds a gap of 10px between the items */
    align-items: baseline;
  }
  .item-mobile {
    background-color: green;
    display: grid;
    margin-top: 10px;
  }

  .item-mobile img {
    display: grid;
    width: 28%;
    height: 90px;
  }

  .container-mobile {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 10px;
  }

  .wrapper-mobile {
    display: grid;
    grid-template-columns: auto;
    grid-gap: 1em;
    margin-top: 10px;
    margin-bottom: 10px;
    background-color: rgb(255, 255, 255);
    border-radius: 5px;

    /* margin-left: 118px;
  margin-right: 100px; */
  }

  .nested-mobile {
    display: grid;
    grid-template-columns: auto;
    border-radius: 5px;
    padding-bottom: 5px;
  }

  .nested-mobile > .nested-box1 {
    grid-column: 1;
    grid-row: 3/8;
    display: grid;
    padding-left: 20px;
    padding-top: 5px;
  }

  .nested-mobile > .nested-box2 {
    grid-column: 2;
    grid-row: 3/8;
    display: grid;
    align-items: center;
    justify-items: start;
  }

  .item-icon-mobile {
    width: 20px;
    height: 20px;
    border-radius: 5px;
    margin-right: 7px;
    overflow: hidden;
  }
  .nested-mobile > .nested-box4 {
    grid-column: 4;
    grid-row: 3/8;
    padding-top: 5px;
    display: grid;
  }

  .img-mobile {
    width: 100%;
    height: 100%;
    border-radius: 5px;
    overflow: hidden;
  }

  .nested-mobile > .nested-box1-mobile {
    grid-column: 1;
    grid-row: 3/8;
    display: grid;
    padding-left: 20px;
    padding-top: 5px;
  }

  .nested-box1-mobile img {
    width: 100%;
    height: 100%;
    border-radius: 5px;
    overflow: hidden;
  }
}
</style>
