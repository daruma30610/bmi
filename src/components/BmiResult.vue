<template>
  <div class="bmi-result">
    <h2>あなたのBMI</h2>
    <div class="result-display">
      <div class="bmi-value">{{ bmiStore.bmi }}</div>
      <div class="bmi-category" :style="{ color: bmiStore.bmiCategory.color }">
        {{ bmiStore.bmiCategory.category }}
      </div>
    </div>
    
    <div class="bmi-info">
      <h3>BMIとは？</h3>
      <p>
        BMI（Body Mass Index）は体重と身長の関係から算出される、肥満度を表す指標です。
        計算式は「体重(kg) ÷ 身長(m)の2乗」で求められます。
      </p>
      
      <h3>BMI判定基準</h3>
      <ul class="bmi-categories">
        <li><span style="color: blue;">18.5未満</span>: 低体重（痩せ型）</li>
        <li><span style="color: green;">18.5以上25未満</span>: 普通体重</li>
        <li><span style="color: orange;">25以上30未満</span>: 肥満（1度）</li>
        <li><span style="color: red;">30以上35未満</span>: 肥満（2度）</li>
        <li><span style="color: darkred;">35以上40未満</span>: 肥満（3度）</li>
        <li><span style="color: purple;">40以上</span>: 肥満（4度）</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { useBmiStore } from '../stores/bmiStore';

const bmiStore = useBmiStore();
</script>

<style scoped>
.bmi-result {
  max-width: 400px;
  margin: 20px auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.result-display {
  text-align: center;
  margin: 20px 0;
  padding: 15px;
  background-color: #f9f9f9;
  border-radius: 5px;
}

.bmi-value {
  font-size: 48px;
  font-weight: bold;
  margin-bottom: 10px;
}

.bmi-category {
  font-size: 24px;
  font-weight: bold;
}

.bmi-info h3 {
  margin-top: 20px;
  margin-bottom: 10px;
  font-size: 18px;
}

.bmi-categories {
  list-style-type: none;
  padding: 0;
}

.bmi-categories li {
  margin-bottom: 8px;
  padding: 5px;
  border-radius: 3px;
  background-color: #f5f5f5;
}
</style>