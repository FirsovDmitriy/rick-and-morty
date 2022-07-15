<template>
  <button class="button">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'BaseButtom'
}
</script>

<style scoped>
.button {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 36px;
  padding: 0 16px;
  background-color: transparent;
  outline: 0;
  cursor: pointer;
}
</style>
