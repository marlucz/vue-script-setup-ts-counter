import { ref, Ref } from "vue";

const counter: Ref<number> = ref(0);

interface CounterReturn {
  step: Ref<number>;
  counter: Ref<number>;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
  changeStep: (value: number) => void;
}

const useCounter = (): CounterReturn => {
  const step: Ref<number> = ref(1);

  const increment = (): void => {
    counter.value += step.value;
  };

  const decrement = (): void => {
    counter.value -= step.value;
  };

  const reset = (): void => {
    counter.value = 0;
  };

  const changeStep = (value: number): void => {
    step.value = value;
  };

  return {
    step,
    counter,
    increment,
    decrement,
    reset,
    changeStep,
  };
};

export default useCounter;
