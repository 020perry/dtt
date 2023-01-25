<template>
  <NavBar />

  <div class="wrapper" v-if="!isSmallScreen">
    <div class="box box1">
      <form class="submission-form" @submit.prevent="updateHouse">
        <div
          @click="backToOverview"
          style="
            display: flex;
            align-items: center;
            cursor: pointer;
            width: 300px;
          "
        >
          <img src="@/assets/ic_back_grey@3x.png" alt="image description" />
          <h2 style="margin-left: 10px">Back to overview</h2>
        </div>
        <h1>Edit listing</h1>
        <label for="streetName">Street name*</label>
        <input
          type="text"
          required
          id="streetName"
          v-model="formData.streetName"
        />
        <div style="display: grid; margin: 5px; justify-content: space-between">
          <div class="house-number-cell-left">
            <label for="houseNumber">House number*</label>
            <input
              type="text"
              id="houseNumber"
              v-model="formData.houseNumber"
            />
          </div>
          <div class="house-number-cell-right ml-3">
            <label for="numberAddition">Addition (optional)</label>
            <input
              type="text"
              id="numberAddition"
              v-model="formData.numberAddition"
            />
          </div>
        </div>

        <label for="postalCode">Postal code*</label>
        <input type="text" id="postalCode" v-model="formData.postalCode" />
        <label for="city">City*</label>

        <input type="text" id="city" v-model="formData.city" />
        <div class="container">
          <label for="image">Upload picture (Png or Jpg)*</label>
          <input
            type="file"
            ref="image"
            accept="image/*"
            @change="previewImage"
          />
          <img v-if="house.image" ref="preview" :src="house.image" />
          <img v-else ref="preview" :src="previewUrl" />
        </div>
        <label for="price">Price*</label>
        <input type="text" id="price" v-model="formData.price" />

        <div style="display: grid; margin: 5px; justify-content: space-between">
          <div class="house-number-cell-left">
            <label for="size">Size*</label>
            <input type="text" id="size" v-model="formData.size" />
          </div>

          <div class="house-number-cell-right">
            <label for="garage"> Garage*</label>
            <select name="garage" id="garage" v-model="formData.hasGarage">
              <option value="true">Ja</option>
              <option value="false">Nee</option>
            </select>
          </div>
        </div>
        <div style="display: grid; margin: 5px; justify-content: space-between">
          <div class="house-number-cell-left">
            <label for="bedrooms">Bedrooms*</label>
            <input type="text" id="bedrooms" v-model="formData.bedrooms" />
          </div>
          <div class="house-number-cell-right">
            <label for="bathrooms">Bathrooms*</label>
            <input type="text" id="bathrooms" v-model="formData.bathrooms" />
          </div>
        </div>

        <label for="constructionYear">Construction date*</label>
        <input
          type="text"
          id="constructionYear"
          v-model="formData.constructionYear"
        />
        <label for="description">Description*</label>
        <textarea type="text" id="description" v-model="formData.description" />
        <div>
          <button class="sendBtn">Save</button>
        </div>
      </form>
    </div>
  </div>

  <div class="wrapper-mobile" v-if="isSmallScreen">
    <div class="box box1">
      <form class="submission-form" @submit.prevent="updateHouse">
        <div
          @click="backToOverview"
          style="
            display: flex;
            align-items: center;
            cursor: pointer;
            width: 300px;
          "
        >
          <img src="@/assets/ic_back_grey@3x.png" alt="image description" />
          <h2 style="margin-left: 10px">Back to overview</h2>
        </div>
        <h1>Edit listing</h1>
        <label for="streetName">Street name*</label>
        <input
          type="text"
          required
          id="streetName"
          v-model="formData.streetName"
        />
        <div style="display: grid; margin: 5px; justify-content: space-between">
          <div class="house-number-cell-left">
            <label for="houseNumber">House number*</label>
            <input
              type="text"
              id="houseNumber"
              v-model="formData.houseNumber"
            />
          </div>
          <div class="house-number-cell-right ml-3">
            <label for="numberAddition">Addition (optional)</label>
            <input
              type="text"
              id="numberAddition"
              v-model="formData.numberAddition"
            />
          </div>
        </div>

        <label for="postalCode">Postal code*</label>
        <input type="text" id="postalCode" v-model="formData.postalCode" />
        <label for="city">City*</label>

        <input type="text" id="city" v-model="formData.city" />
        <div class="container">
          <label for="image">Upload picture (Png or Jpg)*</label>
          <input
            type="file"
            ref="image"
            accept="image/*"
            @change="previewImage"
          />
          <img v-if="house.image" ref="preview" :src="house.image" />
          <img v-else ref="preview" :src="previewUrl" />
        </div>
        <label for="price">Price*</label>
        <input type="text" id="price" v-model="formData.price" />

        <div style="display: grid; margin: 5px; justify-content: space-between">
          <div class="house-number-cell-left">
            <label for="size">Size*</label>
            <input type="text" id="size" v-model="formData.size" />
          </div>

          <div class="house-number-cell-right">
            <label for="garage"> Garage*</label>
            <select name="garage" id="garage" v-model="formData.hasGarage">
              <option value="true">Ja</option>
              <option value="false">Nee</option>
            </select>
          </div>
        </div>
        <div style="display: grid; margin: 5px; justify-content: space-between">
          <div class="house-number-cell-left">
            <label for="bedrooms">Bedrooms*</label>
            <input type="text" id="bedrooms" v-model="formData.bedrooms" />
          </div>
          <div class="house-number-cell-right">
            <label for="bathrooms">Bathrooms*</label>
            <input type="text" id="bathrooms" v-model="formData.bathrooms" />
          </div>
        </div>

        <label for="constructionYear">Construction date*</label>
        <input
          type="text"
          id="constructionYear"
          v-model="formData.constructionYear"
        />
        <label for="description">Description*</label>
        <textarea type="text" id="description" v-model="formData.description" />
        <div>
          <button class="sendBtn">Save</button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import NavBar from "@/components/NavBar.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    NavBar,
  },
  data() {
    return {
      isSmallScreen: false,
      formData: {
        streetName: "",
        houseNumber: "",
        numberAddition: "",
        postalCode: "",
        city: "",
        picture: "",
        price: "",
        size: "",
        hasGarage: "",
        bedrooms: "",
        bathrooms: "",
        constructionYear: "",
        description: "",
      },
      previewUrl: "",
    };
  },
  mounted() {
    window.addEventListener("resize", this.checkScreenSize);
    this.checkScreenSize();
    this.$store.dispatch("fetchHouses");
    // nexttick is used to make sure the data is loaded before the page is rendered
    this.$nextTick(() => {
      if (this.$route.params.id) {
        this.$store.commit("setCurrentHouse", this.$route.params.id);
      }
    });
  },
  watch: {
    currentHouse() {
      // If the current house is not made by the user, redirect to the HouseOverview page
      if (!this.house.madeByMe) {
        this.$router.push({ name: "HouseOverview" });
      }
      //   update the form data when the current house changes
      this.formData.streetName = this.house.location.street;
      this.formData.houseNumber = this.house.houseNumber ?? "";
      this.formData.numberAddition = this.house.numberAddition ?? "";
      this.formData.postalCode = this.house.location.zip;
      this.formData.city = this.house.location.city;
      this.formData.picture = this.house.picture;
      this.formData.price = this.house.price;
      this.formData.size = this.house.size;
      this.formData.hasGarage = this.house.hasGarage;
      this.formData.bedrooms = this.house.rooms.bedrooms;
      this.formData.bathrooms = this.house.rooms.bathrooms;
      this.formData.constructionYear = this.house.constructionYear;
      this.formData.description = this.house.description;
      this.formData.houseId = this.house.id;
    },
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

  methods: {
    checkScreenSize() {
      this.isSmallScreen = window.innerWidth <= 800;
    },
    updateHouse() {
      this.$store.dispatch("updateListing", this.formData).then((res) => {
        // console.log("new House created", res);
        this.$router.push({ name: "HouseShow", params: { id: res.id } });
      });
    },
    backToOverview() {
      this.$router.push("/");
    },
    previewImage() {
      const file = this.$refs.image.files[0];
      this.$store
        .dispatch("uploadImage", {
          image: file,
          houseId: this.house.id,
        })
        .then(() => {
          const reader = new FileReader();
          reader.addEventListener("load", () => {
            this.previewUrl = reader.result;
          });
          reader.readAsDataURL(file);
        });
    },
  },
};
</script>
<style scoped>
* {
  box-sizing: border-box;
}
.wrapper {
  display: grid;
  grid-template-columns: 50% 40% 10%;
  background-image: url(@/assets/img_background@3x.png);
  z-index: 1;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  text-align: left;
  margin-left: 20px;

  /*
      grid-column-gap:1em;
      grid-row-gap:1em;
      */
  grid-gap: 1em;
}

.box-nav {
  grid-column: 1/3;
  grid-row: 1;
  z-index: 2;
}
.wrapper > div {
  background: transparent;
  padding: 1em;
}
.wrapper > div:nth-child(odd) {
  background: transparent;
}
.submission-form {
  max-width: 500px;
  margin: 2rem auto;
  padding: 2rem;
  border-radius: 5px;
}
label {
  display: block;
  padding: 1rem 0 0.25rem;
  text-transform: uppercase;
  font-size: 14px;
}
input,
textarea {
  display: block;
  width: 100%;
  border: 2px solid transparent;
  padding: 0.5rem;
  font-size: 18px;
  border-radius: 5px;
}

.sendBtn {
  border: 0px;
  background: #e74c3c;
  padding: 1rem;
  color: white;
  width: 100%;
  border-radius: 5px;
  text-transform: uppercase;
  cursor: pointer;
  transition: 0.3s background ease;
  align-items: flex-end;
  align-content: flex-end;
  margin-top: 1rem;
}
.sendBtn:hover {
  background: #343050;
}
.house-number-cell-left {
  display: grid;
  grid-column: 1;
  margin-right: 5px;
}
.house-number-cell-right {
  display: grid;
  grid-column: 2;
  align-items: end;
}

select {
  width: 207px;
  height: 40px;
  border-radius: 5px;
  border: transparent;
  padding: 0.5rem;
}

img {
  width: 30px;
}

.container img {
  object-fit: contain;
  border: 5px dashed #ccc;
  border-radius: 5px;
  width: 150px;
  height: 100px;
}
@media only screen and (max-width: 800px) {
  .wrapper-mobile {
    display: grid;
    grid-template-columns: 1fr;
  }
}
</style>
