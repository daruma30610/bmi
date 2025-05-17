import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useBmiStore = defineStore('bmi', () => {
  // ステートの定義
  const height = ref(170) // 初期値：170cm
  const weight = ref(60)  // 初期値：60kg
  
  // BMI計算のコンピューテッド
  const bmi = computed(() => {
    const heightInMeters = height.value / 100
    return (weight.value / (heightInMeters * heightInMeters)).toFixed(1)
  })
  
  // BMI判定のコンピューテッド
  const bmiCategory = computed(() => {
    const bmiValue = parseFloat(bmi.value)
    
    if (bmiValue < 18.5) {
      return { category: '低体重（痩せ型）', color: 'blue' }
    } else if (bmiValue < 25) {
      return { category: '普通体重', color: 'green' }
    } else if (bmiValue < 30) {
      return { category: '肥満（1度）', color: 'orange' }
    } else if (bmiValue < 35) {
      return { category: '肥満（2度）', color: 'red' }
    } else if (bmiValue < 40) {
      return { category: '肥満（3度）', color: 'darkred' }
    } else {
      return { category: '肥満（4度）', color: 'purple' }
    }
  })
  
  // アクション
  function updateHeight(newHeight) {
    height.value = parseFloat(newHeight)
  }
  
  function updateWeight(newWeight) {
    weight.value = parseFloat(newWeight)
  }
  
  function reset() {
    height.value = 170
    weight.value = 60
  }
  
  return {
    height,
    weight,
    bmi,
    bmiCategory,
    updateHeight,
    updateWeight,
    reset
  }
})