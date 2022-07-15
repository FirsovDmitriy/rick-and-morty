<template>
  <header class="navbar">
    <div class="navbar__content">
      <div class="navbar__logo">
        <img src="../assets/Rick_and_Morty_Logo_and_Image.webp" alt="">
      </div>
      <div class="navbar__nav">
        <ul class="navbar__list">
          <li class="navbar__item">
            <router-link class="navbar__link" to="/">home</router-link>
          </li>
          <li class="navbar__item">
            <router-link class="navbar__link" to="characters">character</router-link>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<style scoped>
.navbar__content {
  display: flex;
  align-items: center;
  padding: 30px 20px;
}

.navbar__logo {
  flex: 0 0 141px;
  margin: 0 100px 0 0;
}

.navbar__list {
  display: flex;
}

.navbar__item:not(:last-child) {
  margin-right: 20px;
}

.navbar__link {
  text-transform: uppercase;
}
</style>
