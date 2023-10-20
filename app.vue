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
    @apply font-['Merriweather'] font-black text-4xl leading-[2.7rem] xl:text-5xl xl:leading-[3.8rem]  2xl:text-6xl leading-[2.7rem] 2xl:leading-[4.5rem] w-full hyphens-none text-center
  
  h2
    @apply font-['Merriweather'] font-black text-3xl leading-10 w-full xl:text-4xl xl:leading-[2.7rem]

  h3
    @apply font-bold text-2xl w-full

  // .section
  //   @apply py-8 px-5 flex flex-col justify-center items-center gap-5 lg:items-start

  // .desktop
  //   @apply lg:flex container mx-auto px-4

  .contain
    @apply container 2xl:max-w-7xl mx-auto md:px-12

  .section
    @apply flex flex-col justify-center lg:items-end lg:flex-row

  .content
    @apply flex flex-col justify-center items-center w-full lg:min-h-[66vh] lg:items-start py-8 px-5 gap-5

  .hero-image
    @apply mt-12 object-fill w-full lg:w-4/6 lg:absolute lg:bottom-0 lg:-right-0

</style>