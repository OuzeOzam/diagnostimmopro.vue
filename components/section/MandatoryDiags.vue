<template>
  <div class="container mx-auto">
    <div class="flex flex-col justify-center lg:items-end lg:flex-row">
      <div class="flex flex-col justify-center items-center w-full lg:items-start py-28 px-5 gap-5">
        <h2 class="text-dark-600">
          Quels sont les diagnostics immobiliers obligatoires&#160;?
        </h2>
        <p>En fonction de votre projet, des diagnostics sont obligatoires. Vérifiez lesquels correspondent
          à votre bien.</p>
        <ButtonBlockTertiary to="/diagnostics/mandatory">Voir les diagnostics obligatoires</ButtonBlockTertiary>
      </div>
      <div class="flex justify-center -mt-20 -z-10 relative w-full">
        <nuxt-img src="/lady-shoulders.webp" alt="Une femme ne savant pas ce que sont les diagnostics obligatoires"
          provider="cloudinary" />
      </div>
    </div>
  </div>
</template>
  