<template>
  <div>
    <button
      v-if="!isSmallScreen"
      @click="HouseCreate"
      class="button-create-new"
    >
      Create New
    </button>
    <button
      style="
        border: none;
        background-color: transparent;
        color: transparent;
        border: transparent;
        margin-top: 20px;
        margin-left: 50px;
      "
      v-if="isSmallScreen"
      @click="HouseCreate"
      class="button-create-new-mobile"
    >
      <img
        style="
          width: 20px;
          background-color: transparent;
          color: transparent;
          border: transparent;
        "
        src="@/assets/ic_plus_grey@3x.png"
      />
    </button>
  </div>
</template>

<style scoped>
.button-create-new {
  width: 200px;
  background-color: rgb(235, 84, 64);
  font-size: 18px;
  border: 10px solid rgb(235, 84, 64);
  border-radius: 5px;
  color: rgb(255, 255, 255);
  background-image: url("@/assets/ic_plus_white@3x.png"); /* add the logo as the background image for the search bar */
  background-position: 10px center; /* position the logo to the left of the search bar */
  background-size: 20px; /* adjust the size of the logo */
  background-repeat: no-repeat; /* do not repeat the logo */
  padding-left: 40px; /* add padding to the search bar */
  cursor: pointer;
}
</style>

<script>
export default {
  name: "ButtonCreateNew",
  data() {
    return {
      isSmallScreen: false,
    };
  },
  methods: {
    HouseCreate() {
      this.$router.push({ name: "HouseCreate" });
    },
    checkScreenSize() {
      this.isSmallScreen = window.innerWidth <= 800;
    },
  },
  mounted() {
    window.addEventListener("resize", this.checkScreenSize);
    this.checkScreenSize();
  },
};
</script>
