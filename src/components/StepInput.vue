<template>
  <div class="input-wrapper">
    <label for="step">Change step:</label>
    <input
      type="number"
      name="step"
      v-model="modelValue"
      @change="$emit('update:modelValue', modelValue)"
    />
  </div>
</template>

<script setup lang="ts">

interface Props {
  modelValue: number,
}

withDefaults(defineProps<Props>(), {
  modelValue: 1,
})

defineEmits<{ (e: 'update:modelValue', step: number): number }>()
</script>

<style scoped>
.input-wrapper {
  display: flex;
}

input {
  margin-left: 1rem;
}
</style>