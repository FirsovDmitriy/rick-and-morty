<template>
  <header class="navbar">
    <div class="navbar__content">
      <div class="navbar__logo">Rick And Morty</div>
      <div class="navbar__nav">
        <ul class="navbar__list">
          <li class="navbar__item">
            <router-link to="/">home</router-link>
          </li>
          <li class="navbar__item">
            <router-link to="characters">character</router-link>
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
  padding: 0 20px;
}

.navbar__list {
  display: flex;
}

.navbar__item:not(:last-child) {
  margin-right: 20px;
}
</style>
