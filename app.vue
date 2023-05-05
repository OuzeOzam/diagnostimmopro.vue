<template>
  <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
</template>
<style lang="sass">
  html
    @apply bg-light-300 text-dark-600 text-left hyphens-auto

  p, ul, li
    @apply text-xl

  h1
    @apply font-['Merriweather'] font-black text-4xl leading-[2.7rem] w-full hyphens-none text-center
  
  h2
    @apply font-['Merriweather'] font-black text-3xl leading-10 w-full 

  h3
    @apply font-bold text-2xl w-full

  // .section
  //   @apply py-8 px-5 flex flex-col justify-center items-center gap-5 lg:items-start

  // .desktop
  //   @apply lg:flex container mx-auto px-4
</style>