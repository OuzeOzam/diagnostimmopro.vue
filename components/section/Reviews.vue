<template>
  <div class="container mx-auto">
    <div class="flex flex-col justify-center lg:items-end lg:flex-row">
      <div class="flex flex-col justify-center items-center w-full lg:items-start lg:order-2 py-28 px-5 gap-5">
        <h2 class="text-dark-600">Ils nous ont fait confiance</h2>
        <GReviewsCarousel class="text-left" />
        <GReviewsButtons />
      </div>
        <nuxt-img src="/thumb_man.webp" alt="Un homme heureux" provider="cloudinary" class="hidden lg:block object-cover h-full w-1/2"/>
    </div>
  </div>
</template>