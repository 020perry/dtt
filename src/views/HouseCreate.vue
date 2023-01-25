<template>
  <NavBar />
  <div class="wrapper" v-if="!isSmallScreen">
    <div class="box box1">
      <form class="submission-form" @submit.prevent="createHouse">
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
        <h1>Create new listing</h1>
        <div class="form-group">
          <label for="streetName">Street name*</label>
          <input
            type="text"
            required
            id="streetName"
            v-model="formData.streetName"
          />
        </div>
        <div style="display: grid; margin: 5px; justify-content: space-between">
          <div class="house-number-cell-left">
            <label for="houseNumber">House number*</label>
            <input
              type="text"
              required
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
        <input
          type="text"
          id="postalCode"
          required
          v-model="formData.postalCode"
        />
        <label for="city">City*</label>

        <input type="text" id="city" required v-model="formData.city" />

        <label for="price">Price*</label>
        <input type="text" id="price" required v-model="formData.price" />

        <div class="container">
          <label for="image">Upload picture (Png or Jpg)*</label>
          <input
            required
            type="file"
            ref="image"
            accept="image/*"
            @change="previewImage"
          />
          <img ref="preview" :src="previewUrl" />
        </div>

        <div style="display: grid; margin: 5px; justify-content: space-between">
          <div class="house-number-cell-left">
            <label for="size">Size*</label>
            <input type="text" id="size" required v-model="formData.size" />
          </div>

          <div class="house-number-cell-right">
            <label for="garage"> Garage*</label>
            <select
              name="garage"
              id="garage"
              required
              v-model="formData.hasGarage"
            >
              <option value="true">Ja</option>
              <option value="false">Nee</option>
            </select>
          </div>
        </div>
        <div style="display: grid; margin: 5px; justify-content: space-between">
          <div class="house-number-cell-left">
            <label for="bedrooms">Bedrooms*</label>
            <input
              type="text"
              required
              id="bedrooms"
              v-model="formData.bedrooms"
            />
          </div>
          <div class="house-number-cell-right">
            <label for="bathrooms">Bathrooms*</label>
            <input
              type="text"
              id="bathrooms"
              required
              v-model="formData.bathrooms"
            />
          </div>
        </div>

        <label for="constructionYear">Construction date*</label>
        <input
          type="text"
          id="constructionYear"
          required
          v-model="formData.constructionYear"
        />
        <label for="description">Description*</label>
        <textarea
          type="text"
          id="description"
          required
          v-model="formData.description"
        />
        <div>
          <button class="sendBtn">Create New House</button>
        </div>
      </form>
    </div>
  </div>
  <div class="wrapper-mobile" v-if="isSmallScreen">
    <div class="box box1">
      <form class="submission-form" @submit.prevent="createHouse">
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
        <h1>Create new listing</h1>
        <div class="form-group">
          <label for="streetName">Street name*</label>
          <input
            type="text"
            required
            id="streetName"
            v-model="formData.streetName"
          />
        </div>
        <div style="display: grid; margin: 5px; justify-content: space-between">
          <div class="house-number-cell-left">
            <label for="houseNumber">House number*</label>
            <input
              type="text"
              required
              id="houseNumber"
              v-model="formData.houseNumber"
            />
          </div>
          <div class="house-number-cell-right">
            <label for="numberAddition">Addition (optional)</label>
            <input
              type="text"
              id="numberAddition"
              v-model="formData.numberAddition"
            />
          </div>
        </div>

        <label for="postalCode">Postal code*</label>
        <input
          type="text"
          id="postalCode"
          required
          v-model="formData.postalCode"
        />
        <label for="city">City*</label>

        <input type="text" id="city" required v-model="formData.city" />

        <label for="price">Price*</label>
        <input type="text" id="price" required v-model="formData.price" />

        <div class="container">
          <label for="image">Upload picture (Png or Jpg)*</label>
          <input
            required
            type="file"
            ref="image"
            accept="image/*"
            @change="previewImage"
          />
          <img ref="preview" :src="previewUrl" />
        </div>

        <div style="display: grid; margin: 5px; justify-content: space-between">
          <div class="house-number-cell-left">
            <label for="size">Size*</label>
            <input type="text" id="size" required v-model="formData.size" />
          </div>

          <div class="house-number-cell-right">
            <label for="garage"> Garage*</label>
            <select
              name="garage"
              id="garage"
              required
              v-model="formData.hasGarage"
            >
              <option value="true">Ja</option>
              <option value="false">Nee</option>
            </select>
          </div>
        </div>
        <div style="display: grid; margin: 5px; justify-content: space-between">
          <div class="house-number-cell-left">
            <label for="bedrooms">Bedrooms*</label>
            <input
              type="text"
              required
              id="bedrooms"
              v-model="formData.bedrooms"
            />
          </div>
          <div class="house-number-cell-right">
            <label for="bathrooms">Bathrooms*</label>
            <input
              type="text"
              id="bathrooms"
              required
              v-model="formData.bathrooms"
            />
          </div>
        </div>

        <label for="constructionYear">Construction date*</label>
        <input
          type="text"
          id="constructionYear"
          required
          v-model="formData.constructionYear"
        />
        <label for="description">Description*</label>
        <textarea
          type="text"
          id="description"
          required
          v-model="formData.description"
        />
        <div>
          <button class="sendBtn">Create New House</button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import NavBar from "@/components/NavBar.vue";
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
        hasGarage: true,
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
  },
  methods: {
    checkScreenSize() {
      this.isSmallScreen = window.innerWidth <= 800;
    },
    async createHouse() {
      // send a request to the server to create a new house with the form data
      const res = await this.$store.dispatch("createHouse", this.formData);
      if (res.id) {
        if (this.$refs.image && this.$refs.image.files[0]) {
          const file = this.$refs.image.files[0];
          await this.$store.dispatch("uploadImage", {
            image: file,
            houseId: res.id,
          });
          // fetch all houses again to update the list
          await this.$store.dispatch("fetchHouses");
        }
        // redirect to the house detail page
        // this.$router.push(`/show/${res.id}`);
        window.location.href = `/show/${res.id}`;
      }
    },
    backToOverview() {
      this.$router.push("/");
    },
    previewImage() {
      const file = this.$refs.image.files[0];
      const reader = new FileReader();

      reader.addEventListener("load", () => {
        this.previewUrl = reader.result;
      });

      reader.readAsDataURL(file);
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
.box-nav {
  grid-column: 1/3;
  grid-row: 1;
  z-index: 2;
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
