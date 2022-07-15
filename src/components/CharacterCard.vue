<template>
  <div class="character">
    <div class="character__img-wrapper">
      <!-- <img :src="character.image" alt="" class="character__img"> -->
      img
    </div>
    <div class="character__content-wrapper">
      <div class="character__row">
        <a href="#" class="character__title"> {{ character.name }} </a>
        <div class="character__status">
          <span class="character__status-icon"></span>
          <p class="chracter__text"> {{ character.status }} - {{ character.species }} </p>
        </div>
      </div>
      <div class="character__row">
        <p class="character__text character__text--gray">Last known location:</p>
        <a href="#" class="character__link" _target="blank">
          {{ character.location.name }}
        </a>
      </div>
      <div class="character__row">
        <p class="character__text character__text--gray">Last known location:</p>
        <a href="#" class="character__link" _target="blank">
          {{  }}
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'character-card',

  props: {
    character: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.character {
  display: flex;
}
.character__content-wrapper {
  padding: 10px;
}
.character__row:not(:last-child) {
  margin-bottom: 16px;
}
</style>
