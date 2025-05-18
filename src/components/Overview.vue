<template>
  <div class="overview">
    <h2>アプリ概要</h2>
    <p>
      このアプリは、身長と体重からBMI（Body Mass Index）を計算し、健康状態を判定するWebアプリです。
      Vue 3、Pinia、Viteを使用しています。
    </p>
    <router-link to="/">← 戻る</router-link>
  </div>
</template>

<script setup>
// 特にロジックは不要
</script>

<style scoped>
.overview {
  max-width: 600px;
  margin: 40px auto;
  padding: 24px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
}
</style>