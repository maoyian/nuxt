<template>
  <div>
    events page
    <button class="bg-red-500 hover:bg-red-700">Button</button>
    Counter: {{ counter }} <button @click="counter++">+</button>
    <button @click="counter--">-</button>
    Color: {{ color }}
  </div>
</template>
<script setup>
definePageMeta({
  layout: "custom",
});
// const counter = useState("counter", () => Math.random() * 10);
const counter = useCounter()
const color = useColor()

import { useCounterStore} from '@/stores/myStore'
const store = useCounterStore()
console.log(store, 'sss')

const res = await $fetch('/api/hello')
console.log(res, 'res')
</script>