<template>
  <div class="nested">
    <div class="nested-box1">
      <img v-bind:src="house.image" />
    </div>
    <div class="nested-box2">
      <ul>
        <div
          style="display: flex; flex-direction: column; align-items: flex-start"
        >
          <li class="listing-information text-color" style="font-weight: bold">
            {{ house.location.street }}
          </li>
          <li class="listing-information text-color-2">$ {{ house.price }}</li>
          <li class="listing-information text-color-2">
            {{ house.location.zip + " " + house.location.city }}
          </li>
        </div>
        <div style="display: flex">
          <li>
            <img class="item-icon" src="@/assets/ic_bed@3x.png" />
            {{ house.rooms.bedrooms }}
            <img class="item-icon" src="@/assets/ic_bath@3x.png" />
            {{ house.rooms.bathrooms }}
            <img class="item-icon" src="@/assets/ic_size@3x.png" />
            {{ house.size }}
          </li>
        </div>
      </ul>
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
        <img class="item-icon" src="@/assets/ic_edit@3x.png" />
        <img class="item-icon" src="@/assets/ic_delete@3x.png" />
      </div>
    </div>
  </div>
</template>
<style scoped>
.wrapper {
  display: grid;
  grid-template-columns: 170px 50 170px;
  grid-template-rows: repeat(10, 10%);
  grid-gap: 1em;
  justify-items: stretch;
  align-items: stretch;
}

.box1 {
  /*align-self:start;*/
  grid-column: 1/15;
  grid-row: 1/12;
}

.box2 {
  /*align-self:end;*/
  grid-column: 2/15;
  grid-row: 1;
  display: grid;
  margin-left: 117px;
  padding-right: 100px;
}

/* .box3 {
  grid-column: 13;
  grid-row: 1;
  display: grid;
  justify-content: space-around;
  align-items: CENTER;

} */

.box4 {
  margin-top: 15px;
  grid-column: 2/15;
  grid-row: 2;
  margin-left: 117px;
  margin-bottom: 100px;
  display: grid;
  margin-right: 198px;
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
  grid-template-columns: 20% 20% 45% 15%;
  grid-template-rows: repeat(10, 15%);
  align-content: center;
}

.nested > .nested-box1 {
  grid-column: 1;
  grid-row: 3/8;
  display: grid;
  padding-left: 20px;
  padding-top: 5px;
}

.nested-box1 > img {
  width: 180px;
  height: 130px;
  border-radius: 5px;
  overflow: hidden;
}

.nested > .nested-box2 {
  grid-column: 2;
  grid-row: 3/8;
  padding-top: 5px;
  display: grid;
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
</style>

<script>
// import NavBar from "@/components/NavBar.vue";
// import ButtonCreateNew from "@/components/ButtonCreateNew.vue";
// import SearchBar from "@/components/SearchBar.vue";
// import FilterBar from "@/components/FilterBar.vue";
import { mapState, mapActions, mapGetters } from "vuex";
export default {
  name: "HomeOverview",
  components: {
    // NavBar,
    // ButtonCreateNew,
    // SearchBar,
    // FilterBar,
  },
  computed: {
    ...mapState(["houses"]),
    ...mapGetters(["currentHouse", "houses"]),
    house() {
      return this.currentHouse;
    },
  },
  methods: {
    ...mapActions(["fetchHouses"]),
  },
  created() {
    this.fetchHouses();
  },
};
</script>
