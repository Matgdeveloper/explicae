<script setup>
import { RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <div class="header-bar">
      <div class="container-lg d-flex align-items-center">
        <nav class="d-flex align-items-center justify-content-between w-100">
          <ul>
            <li>
              <img src="./assets/explicae.svg" alt="" />
            </li>
          </ul>
          <ul class="d-flex align-items-center justify-content-center">
            <li class="me-5">Home</li>
            <li>About</li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
  <section class="s-hero">
    <div class="container-lg">
      <RouterView />
    </div>
  </section>
</template>

<style scoped lang="scss">
* {
  list-style: none;
  font-family: 'Poppins', sans-serif;
}

.header-bar {
  background-color: #333;
}

ul {
  margin-bottom: 0px;
  padding-left: 0px;
  color: #f6f6f6;
}

.s-hero {
  background-image: url('./assets/background.svg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 100vh;
  width: 100%;
  margin: 0;
  padding: 0;
}
</style>
