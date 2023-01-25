<template>
  <!-- Navbar container -->
  <div class="navbar-mobile">
    <!-- Navbar logo 1 -->
    <div class="logo-mobile" v-if="isSmallScreen">
      <router-link to="/">
        <img
          src="../assets/ic_mobile_navigarion_home_active@3x.png"
          alt="Logo"
        />
      </router-link>
    </div>

    <!-- Navbar logo 2 -->
    <div class="logo-mobile" v-if="isSmallScreen">
      <a href="#">
        <router-link to="/about">
          <img src="../assets/ic_mobile_navigarion_info@3x.png" alt="Logo" />
        </router-link>
      </a>
    </div>
  </div>

  <div class="navbar" v-if="!isSmallScreen">
    <!-- Navbar links -->
    <div class="logo">
      <a href="#" v-if="!isSmallScreen">
        <img
          src="../assets/img_logo_dtt@3x.png"
          alt="Logo"
          style="width: 100px ;"
        />
      </a>
    </div>
    <router-link
      :to="{ name: 'HomeOverview' }"
      :exact-active-class="activeLink"
      v-if="!isSmallScreen"
      class="nav-link"
      >Home</router-link
    >
    <router-link
      :to="{ name: 'about' }"
      :exact-active-class="activeLink"
      v-if="!isSmallScreen"
      class="nav-link"
      >About</router-link
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      isSmallScreen: false,
      activeLink: "nav-active",
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
  },
  computed: {},
};
</script>

<style scoped>
.nav-active {
  background-color: yellow;
}
.nav-active-small {
  background-color: yellow;
}

/* Define the navbar container */
.navbar {
  display: flex;
  align-items: center;
  background-color: white;
  padding: 25px 100px;
  width: 92, 5%;
}

/* Define the navbar logo */
.navbar .logo {
  font-size: 22px;
  font-weight: bold;
  margin-left: 17px;
}

/* Define the navbar logo link */
.navbar .logo a.router-ling-exact-active {
  color: green;
}

/* Define the navbar links  */
.navbar a {
  color: black;
  text-decoration: none;
  font-size: 18px;
  margin-right: 20px;
  float: left;
}

/* Define the navbar toggle button (for smaller screens) */
.navbar .toggle-button {
  display: none;
  cursor: pointer;
}

/* Define the navbar links when the toggle button is shown (for smaller screens) */
.navbar .toggle-button + a {
  display: none;
}

/* Responsive layout - show the toggle button and hide the links on smaller screens */
@media only screen and (max-width: 800px) {
  .navbar-mobile {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-around;
    background-color: white;
  }
  .navbar .links {
    display: none;
  }
  .navbar .toggle-button {
    display: block;
  }
}
.navbar-mobile img {
  margin-top: 5px;
  width: 30px;
  height: 30px;
}
.navbar-mobile .logo-mobile {
  display: flex;
  font-size: 22px;
  font-weight: bold;
}

/* Responsive layout - show the links as PNG icons and hide the toggle button on smaller screens */
.navbar .active {
  display: flex;
  justify-content: space-between;
}

/* Responsive layout - show the link PNG icons and hide the toggle button when the toggle button is clicked (for smaller screens) */
.navbar .active a {
  display: block;
  width: 50px;
  height: 50px;

  background-size: contain;
  background-repeat: no-repeat;
}
</style>
