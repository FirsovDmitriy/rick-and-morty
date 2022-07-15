<template>
  <div class="character-filter">
    <div class="character-filter__wrapper">
      <div class="character-filter__row">
        <div role="tablist" class="character-filter__tab-bar">
          <div role="tab" class="character-filter__tab">Human</div>
          <div role="tab" class="character-filter__tab">Alien</div>
          <div role="tab" class="character-filter__tab">Humanoid</div>
          <div role="tab" class="character-filter__tab">Poopybutthole</div>
          <div role="tab" class="character-filter__tab">Mythological Creature</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseButton from './ui/BaseButton.vue'
export default {
  name: 'character-filter',

  components: { BaseButton }
}
</script>
