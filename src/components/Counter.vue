<script setup lang="ts">
import useCounter from '../composables/useCounter';
import StepInput from './StepInput.vue';

const { step, counter, increment, decrement, reset, changeStep } = useCounter()

</script>

<template>
  <div class="container">
    <StepInput v-model="step" @update:model-value="changeStep" />

    <button class="btn">
      <i class="icon fas fa-chevron-up" @click="increment"></i>
    </button>
    <div class="counter">
      <div class="counter--value">{{ counter }}</div>
    </div>
    <button class="btn">
      <i class="icon fas fa-chevron-down" @click="decrement"></i>
    </button>

    <button class="btn btn-rounded" @click="reset">Reset</button>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.counter {
  min-width: 5rem;
  height: 5rem;
  border-radius: 2rem;
  background-color: crimson;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.5rem;
  overflow: hidden;
}
.counter--value {
  color: #fff;
  font-size: 3.5rem;
}

.btn {
  background: none;
  border: none;
  padding: 2rem;
  text-transform: uppercase;
}
.btn-rounded {
  border: 1px solid black;
  border-radius: 1rem;
}
.icon {
  font-size: 5rem;
}
</style>
