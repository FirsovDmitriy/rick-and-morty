<template>
  <div class="character">
    <div class="character__img-wrapper">
      img
    </div>
    <div class="character__content-wrapper">
      <div class="character__row">
        <a href="#" class="character__title"> {{ character.name }} </a>
      </div>
      <div class="character__row"></div>
      <div class="character__row"></div>
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
</style>
