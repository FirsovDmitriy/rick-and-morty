<template>
  <div class="preloader">
    <div class="preloader__content">
      <div class="preloader__item"></div>
      <div class="preloader__item"></div>
      <div class="preloader__item"></div>
      <div class="preloader__item"></div>
    </div>
  </div>
</template>

<style scoped>
.preloader {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
}

.preloader__content {
  position: relative;
  width: 100px;
  height: 100px;
  margin: 0 auto;
  animation: animation-roller 2s linear infinite;
}

.preloader__item {
  position: absolute;
  width: 20px;
  height: 20px;
  background: #000;
  border-radius: 50%;
}

.preloader__item:nth-child(1) {
  top: 0;
}

.preloader__item:nth-child(2) {
  top: 0;
  right: 0;
}

.preloader__item:nth-child(3) {
  left: 0;
  bottom: 0;
}

.preloader__item:nth-child(4) {
  bottom: 0;
  right: 0;
}

@keyframes animation-roller {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
