<template>
  <div class="contain">
    <div class="section">
      <div class="content basis-8/12">
        <h2 class="text-dark-600 text-center">Ils nous ont fait confiance</h2>
        <GReviewsCarousel class="text-left" />
        <div class="flex flex-col justify-center w-full gap-5 md:flex-row">
          <GReviewsButtons />
        </div>
      </div>
      <!-- <div>
        <nuxt-img src="/thumb_man.webp" alt="Un homme heureux" provider="cloudinary"
          class="hidden lg:block object-cover h-full w-full basis-6/12" />
      </div> -->
    </div>
  </div>
</template>
