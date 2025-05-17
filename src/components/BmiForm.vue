<template>
  <div class="bmi-form">
    <h2>BMI計算フォーム</h2>
    <div class="form-group">
      <label for="height">身長 (cm)</label>
      <input 
        id="height" 
        type="number" 
        min="100" 
        max="250"
        v-model="heightInput"
        @input="updateHeight"
      />
    </div>
    
    <div class="form-group">
      <label for="weight">体重 (kg)</label>
      <input 
        id="weight" 
        type="number" 
        min="30" 
        max="200"
        v-model="weightInput"
        @input="updateWeight"
      />
    </div>
    
    <button @click="reset" class="reset-button">リセット</button>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useBmiStore } from '../stores/bmiStore';

const bmiStore = useBmiStore();

const heightInput = ref(bmiStore.height.toString());
const weightInput = ref(bmiStore.weight.toString());

// ストアの値が変更されたとき、入力値も更新
watch(() => bmiStore.height, (newHeight) => {
  heightInput.value = newHeight.toString();
});

watch(() => bmiStore.weight, (newWeight) => {
  weightInput.value = newWeight.toString();
});

// 入力値をストアに反映
function updateHeight() {
  if (heightInput.value && !isNaN(heightInput.value)) {
    bmiStore.updateHeight(heightInput.value);
  }
}

function updateWeight() {
  if (weightInput.value && !isNaN(weightInput.value)) {
    bmiStore.updateWeight(weightInput.value);
  }
}

function reset() {
  bmiStore.reset();
}
</script>

<style scoped>
.bmi-form {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
}

.reset-button {
  background-color: #ff6b6b;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;
}

.reset-button:hover {
  background-color: #ff5252;
}
</style>