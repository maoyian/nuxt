import { Head } from '../.nuxt/components';
<template>
  <div>
    <Head>
      <Style type="text/css" children="#__nuxt { background-color: green; }" />
    </Head>
    products:
    <div v-if="pending">pending...</div>
    <div v-else>
      <div v-for="item in products" :key="item.id">{{ item.name }}</div>
    </div>
  </div>
</template>

<script setup>
// useFetch 同步调用
// useLazyFetch 异步调用
// const { data: products, pending } = await useFetch("/api/products", {
//     transform: _products => _products.data
// });
const { data: products, pending } = await useLazyFetch("/api/products");
console.log(products.value);
useHead({
  title: "products",
  meta: [
    {
      name: "description",
      content: "this is products desc",
    },
  ],
  script: [
    {
      children: 'console.log("hello")',
    },
  ],
});
</script>