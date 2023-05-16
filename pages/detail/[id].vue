<script setup>
const route = useRoute()
console.log(route)
const nuxt = useNuxtApp()
console.log(nuxt)
</script>

<template>
    <div>
        自动匹配id
        detail id: {{ $route.params.id }}
    </div>
</template>
