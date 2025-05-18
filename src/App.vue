<template>
  <div class="app">
    <header>
      <h1>BMI計算アプリ</h1>
      <nav>
        <router-link to="/">ホーム</router-link> |
        <router-link to="/overview">概要</router-link>
      </nav>
    </header>
    <main>
      <router-view />
    </main>
    <footer>
      <p>© 2025 BMI計算アプリ</p>
    </footer>
  </div>
</template>

<script setup>
// 既存の import は不要
</script>

<style>
/* ...既存のスタイル... */
nav {
  margin-top: 10px;
  margin-bottom: 10px;
}
nav a {
  color: #4a6cf7;
  text-decoration: none;
  margin: 0 8px;
}
nav a.router-link-exact-active {
  font-weight: bold;
  text-decoration: underline;
}
</style>