<template>
  <NavBar />
  <body class="background-color" v-if="!isSmallScreen">
    <div class="wrapper">
      <div class="box box1">
        <div
          style="display: flex; justify-content: flex-start; margin-left: 100px"
        >
          <button
            @click="backToOverview"
            style="border: none; background-color: transparent"
          >
            <h2 class="backToView" style="display: flex">
              <img src="@/assets/ic_back_grey@3x.png" alt="image description" />
              Back to overview
            </h2>
          </button>
        </div>
        <div class="box box2" v-if="house.id">
          <img
            class="img-house"
            style="width: 100%"
            v-bind:src="house.image"
            alt="House image"
          />

          <h1 style="margin-left: 50px">
            {{ house.location.street }}
          </h1>

          <p class="text-color-2 listing-information">
            <img src="@/assets/ic_location@3x.png" />
            {{ house.location.zip + " " + house.location.city }}
          </p>
          <div style="margin-left: 50px; display: flex">
            <p
              class="text-color-2 listing-information"
              style="margin-right: 10px"
            >
              <img src="@/assets/ic_price@3x.png" alt="Euro image" />
              {{ house.price }}
            </p>

            <p
              class="text-color-2 listing-information"
              style="margin-right: 10px"
            >
              <img src="@/assets/ic_size@3x.png" alt="Size image" />
              {{ house.size + " m²" }}
            </p>

            <p
              class="text-color-2 listing-information"
              style="margin-right: 10px"
            >
              <img
                src="@/assets/ic_construction_date@3x.png"
                alt="Construction image"
              />
              Built in {{ house.constructionYear }}
            </p>
          </div>
          <div style="margin-left: 50px; display: flex">
            <p
              class="text-color-2 listing-information"
              style="margin-right: 10px"
            >
              <img src="@/assets/ic_bed@3x.png" alt="Bath image" />
              {{ house.rooms.bedrooms }}
            </p>

            <p
              class="text-color-2 listing-information"
              style="margin-right: 10px"
            >
              <img src="@/assets/ic_bath@3x.png" alt="Size image" />
              {{ house.rooms.bathrooms }}
            </p>

            <p
              class="text-color-2 listing-information"
              style="margin-right: 10px"
            >
              <img src="@/assets/ic_garage@3x.png" alt="Construction image" />
              {{ boolToString }}
            </p>
          </div>
          <p
            class="text-color-2 listing-information"
            style="text-align: center"
          >
            {{ house.description }}
          </p>
        </div>
      </div>
      <div class="box box4" v-if="house.id && house.madeByMe">
        <div
          style="display: flex; align-items: center; justify-content: flex-end"
        >
          <router-link :to="{ name: 'HouseEdit', params: { id: house.id } }">
            <button
              style="
                background-color: transparent;
                border: none;
                position: sticky;
                margin-top: 35px;
                margin-right: 10px;
              "
            >
              <img src="@/assets/ic_edit@3x.png" alt="Edit image" />
            </button>
          </router-link>
          <button
            style="
              background-color: transparent;
              border: none;
              position: sticky;
              margin-top: 35px;
              margin-right: 10px;
            "
            @click="deleteHouse"
          >
            <img src="@/assets/ic_delete@3x.png" alt="Delete image" />
          </button>
        </div>
      </div>
    </div>
  </body>

  <body class="background-color" v-if="isSmallScreen">
    <div class="wrapper-mobile">
      <div class="box box1">
        <div style="display: flex; justify-content: flex-start">
          <button
            @click="backToOverview"
            style="border: none; background-color: transparent"
          >
            <h2 class="backToView" style="display: flex">
              <img src="@/assets/ic_back_grey@3x.png" alt="image description" />
              Back to overview
            </h2>
          </button>
        </div>
        <div class="box2-mobile" v-if="house.id">
          <img
            class="img-house"
            style="width: 100%"
            v-bind:src="house.image"
            alt="House image"
          />

          <h1 style="margin-left: 50px">
            {{ house.location.street }}
          </h1>

          <p class="text-color-2 listing-information">
            <img src="@/assets/ic_location@3x.png" />
            {{ house.location.zip + " " + house.location.city }}
          </p>
          <div style="margin-left: 50px; display: flex">
            <p
              class="text-color-2 listing-information"
              style="margin-right: 10px"
            >
              <img src="@/assets/ic_price@3x.png" alt="Euro image" />
              {{ house.price }}
            </p>

            <p
              class="text-color-2 listing-information"
              style="margin-right: 10px"
            >
              <img src="@/assets/ic_size@3x.png" alt="Size image" />
              {{ house.size + " m²" }}
            </p>

            <p
              class="text-color-2 listing-information"
              style="margin-right: 10px"
            >
              <img
                src="@/assets/ic_construction_date@3x.png"
                alt="Construction image"
              />
              Built in {{ house.constructionYear }}
            </p>
          </div>
          <div style="margin-left: 50px; display: flex">
            <p
              class="text-color-2 listing-information"
              style="margin-right: 10px"
            >
              <img src="@/assets/ic_bed@3x.png" alt="Bath image" />
              {{ house.rooms.bedrooms }}
            </p>

            <p
              class="text-color-2 listing-information"
              style="margin-right: 10px"
            >
              <img src="@/assets/ic_bath@3x.png" alt="Size image" />
              {{ house.rooms.bathrooms }}
            </p>

            <p
              class="text-color-2 listing-information"
              style="margin-right: 10px"
            >
              <img src="@/assets/ic_garage@3x.png" alt="Construction image" />
              {{ boolToString }}
            </p>
          </div>
          <p class="text-color-2 listing-information" style="text-align: start">
            {{ house.description }}
          </p>
        </div>
      </div>
      <div class="box box4" v-if="house.id && house.madeByMe">
        <div
          style="display: flex; align-items: center; justify-content: flex-end"
        >
          <router-link :to="{ name: 'HouseEdit', params: { id: house.id } }">
            <button
              style="
                background-color: transparent;
                border: none;
                position: sticky;
                margin-top: 35px;
                margin-right: 10px;
              "
            >
              <img src="@/assets/ic_edit@3x.png" alt="Edit image" />
            </button>
          </router-link>
          <button
            style="
              background-color: transparent;
              border: none;
              position: sticky;
              margin-top: 35px;
              margin-right: 10px;
            "
            @click="deleteHouse"
          >
            <img src="@/assets/ic_delete@3x.png" alt="Delete image" />
          </button>
        </div>
      </div>
    </div>
  </body>
</template>

<script>
import { mapGetters } from "vuex";
import NavBar from "@/components/NavBar.vue";
export default {
  data() {
    return {
      isSmallScreen: window.innerWidth < 800,
    };
  },
  components: {
    NavBar,
  },

  computed: {
    ...mapGetters(["currentHouse", "houses"]),
    house() {
      return this.currentHouse;
    },
    boolToString() {
      return this.house.hasGarage ? "Yes" : "No";
    },
  },
  async mounted() {
    await this.$store.dispatch("fetchHouses");
    // nexttick is used to make sure the data is loaded before the page is rendered
    this.$nextTick(() => {
      if (this.$route.params.id) {
        this.$store.commit("setCurrentHouse", this.$route.params.id);
      }
    });
  },
  methods: {
    deleteHouse() {
      const confirmation = confirm(
        "Are you sure you want to delete this house?"
      );
      if (confirmation) {
        this.$store.dispatch("deleteHouse", this.house.id);
      }
      this.$router.push({ name: "HomeOverview" });
    },
    edit() {
      this.$router.push({ name: "edit", params: { houseId: this.house.id } });
    },
    backToOverview() {
      this.$router.push("/");
    },
  },
};
</script>
<style scoped>
h2 img {
  width: 30px;
}
.header-position {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.wrapper {
  display: grid;
  grid-template-columns: 10% 20% 20% 20% 30%;
  grid-template-rows: 20% 20% 20% 20% 20%;
  grid-gap: 1em;
  justify-items: stretch;
  align-items: stretch;
  margin-left: 100px;
}

.box1 {
  /*align-self:start;*/
  grid-column: 1/4;
  grid-row: 1;
  border-radius: 5px;
}

.backToView {
  display: flex;
  align-items: center;
  cursor: pointer;
  text-align: start;
  justify-content: flex-start;
  margin-top: 50px;
  flex-direction: row;
}

.box2 {
  display: grid;
  margin-left: 100px;
  /*align-self:end;*/
  grid-column: 2/6;
  grid-row: 1/3;
  background-color: white;
  justify-items: start;
  border-radius: 5px;
}

/* .box2 > img {
  width: 875px;
  height: 550px;
}

.house-image {
  width: 100%;
  height: 100%;
} */

.box2 > h2 {
  margin-top: 50px;
  margin-left: 50px;
}

.box2 > p {
  margin-left: 50px;
}

p > img {
  width: 20px;
  height: 20px;
}
.box3 {
  /*justify-self:end;*/
  display: grid;
  grid-column: 2/4;
  grid-row: 3/6;
  background-color: white;
}

.box4 {
  grid-column: 3;
  grid-row: 3;
  display: grid;
}
.box5 {
  grid-column: 4;
  grid-row: 3;
  display: grid;
  background-color: black;
}
button > img {
  width: 20px;
  height: 20px;
}
@media (max-width: 800px) {
  .wrapper-mobile {
    display: grid;
    grid-gap: 1em;
    justify-items: stretch;
    align-items: stretch;
    margin-bottom: 40px;
  }
  .box2-mobile {
    display: grid;

    /*align-self:end;*/
    grid-column: 2/6;
    grid-row: 1/3;
    background-color: white;
    justify-items: start;
    border-radius: 5px;
  }
}
</style>
