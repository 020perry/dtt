<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <router-view/>
</template>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
 
}

.primary-color{
  color: rgb(235, 84, 64)
}
.secondary-color{
  color: rgb(74, 75, 76)
}

.tertiary-color{
  color: rgb(232, 232, 232)
}

.tertiary-color-2{
  color:rgb(195, 195, 195)
}

body{
  background-color: rgb(246, 246, 246);
  overflow-x: hidden;
}

.background-color-2{
  background-color: rgb(255, 255, 255)
}

.text-color{
  color: rgb(0, 0, 0)
}


.text-color-2{
  color: rgb(74, 75, 76)
}

.hyperlink-color{
  color: rgb(6, 123, 194)
}
@media (min-width: 768px) {
  h1 {

    font-weight: bold;
    font-size: 32px;
  }
  h2{

    font-weight: bold;
    font-size: 22px;
  }

  .back-button{

    font-weight: semi-bold;
    font-size: 16px;
  }

  .input-field-title{

    font-weight: semi-bold;
    font-size: 14px;
  }

  .desktop-header-active{

    font-weight: bold;
    font-size: 18px;
  }
  .desktop-header-inactive{

    font-weight: medium;
    font-size: 18px;
  }

  .empty-state-message{

    font-weight: medium;
    font-size: 18px;
  }
  .error-message{

    font-weight: medium-italic;
    font-size: 14px;
  }
  .listing-information{

    font-weight: Semi-bold;
    font-size: 16px;
  }
  .body-text{

    font-weight: regular;
    font-size: 18px;
  }
  .input-field{

    font-weight: regular;
    font-size: 14px;
  }

  button{

    font-weight: bold;
    font-size: 18px;
  }
}


@media (max-width: 767px) {
  h1 {

    font-weight: bold;
    font-size: 18px;
  }
  h2{

    font-weight: bold;
    font-size: 14px;
  }
  .back-button{

    font-weight: semi-bold;
    font-size: 16px;
  }

  .input-field-title{

    font-weight: semi-bold;
    font-size: 12px;
  }
  .empty-state-message{

    font-weight: medium;
    font-size: 14px;
  }

  .error-message{

    font-weight: medium-italic;
    font-size: 12px;
  }

  .listing-information{

    font-weight: Semi-bold;
    font-size: 12px;
  }


  .body-text{

    font-weight: regular;
    font-size: 12px;
  }
  .input-field{

    font-weight: regular;
    font-size: 12px;
  }

  button{

    font-weight: bold;
    font-size: 12px;
  }
}



nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
