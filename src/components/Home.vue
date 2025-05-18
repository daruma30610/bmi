<template>
  <div class="app">
    <header>
      <h1>BMI計算アプリ</h1>
    </header>
    
    <main>
      <BmiForm />
      <BmiResult />
    </main>
    
    <footer>
      <p>© 2025 BMI計算アプリ</p>
    </footer>
  </div>
</template>

<script setup>
import BmiForm from './BmiForm.vue';
import BmiResult from './BmiResult.vue';
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Helvetica Neue', Arial, sans-serif;
  line-height: 1.6;
  color: #333;
  background-color: #f0f2f5;
}

.app {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

header {
  text-align: center;
  margin-bottom: 30px;
  padding-bottom: 20px;
  border-bottom: 1px solid #eee;
}

h1 {
  color: #4a6cf7;
}

main {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

footer {
  margin-top: 40px;
  text-align: center;
  color: #888;
  font-size: 14px;
  padding-top: 20px;
  border-top: 1px solid #eee;
}

@media (min-width: 768px) {
  main {
    flex-direction: row;
    align-items: flex-start;
  }
  
  main > * {
    flex: 1;
  }
}
</style>