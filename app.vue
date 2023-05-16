import { NuxtLink } from './.nuxt/components';

<template>
  <div>
    <NuxtLayout>
      <!-- <NuxtPage/> -->
      app
      <header>
        <ul class="flex space-x-2">
          <li class="underline hover:bg-red-400">
            <NuxtLink to="/">home</NuxtLink>
          </li>
          <li class="underline hover:font-extralight">
            <NuxtLink to="/events">events</NuxtLink>
          </li>
        </ul>
      </header>
      <NuxtPage></NuxtPage>
    </NuxtLayout>
  </div>
</template>
