<template>
  <div>
    <CommonHeader />
    <ContentDoc />
    <select v-model="locale">
      <option value="en">en</option>
      <option value="fr">fr</option>
    </select>
    <p>欢迎:  {{ $t('welcome') }}{{ locale }}</p>
    <div>index page</div>
    assets
    <img src="@/assets/imgs/1.webp" alt="" />
    <img src="/imgs/2.webp" alt="" />
    <IconsBird @click="say" />
    <input type="text" placeholder="txt" v-focus v-model="txt" />
  </div>
</template>
<script setup>
import { useMouse } from "@vueuse/core";
const { locale } = useI18n()
const { $sayHi } = useNuxtApp();
console.log(useNuxtApp());
const { hello } = useUtils();
const { x, y } = useMouse();
hello();
$sayHi("mm");
const say = () => {
  console.log(x.value, y.value);
};
const txt = ref("");
definePageMeta({
  middleware: "check",
});
</script>