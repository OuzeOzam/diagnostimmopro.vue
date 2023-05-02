<template>
  <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
</template>
<style lang="sass">
  html
    @apply text-dark-600 bg-light-300

  p, ul, li
    @apply text-lg

  h1
    @apply font-['Merriweather'] font-black text-4xl leading-[2.828rem]
  
  h2
    @apply font-['Merriweather'] font-black text-3xl leading-10

  h3
    @apply font-bold text-2xl

  .section
    @apply py-16 px-6 flex flex-col justify-center items-center gap-5
</style>