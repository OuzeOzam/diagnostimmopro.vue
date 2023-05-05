<template>
  <div class="flex flex-col items-center p-5">
    <div class="flex">
      <p class="items-center text-center">Fin du formulaire</p>
    </div>
    <div class="flex justify-center items-center mt-8">
      <h3 class="font-[Merriweather] font-black text-[54px] leading-[58px]  items-center text-center">
        Votre demande est&#160;en cours&#160;de traitement
      </h3>
    </div>
    <div class="flex flex-start mt-5">
      <p class="items-center text-center ">
        Merci de nous avoir contacté pour votre projet. Un expert s’occupe déjà de
        votre demande, vous la recevrez sous 24H.
      </p>
    </div>
  </div>
  <div class="-mt-10 ">
    <nuxt-img class="-mb-[1px]" src="/funny-smiling.webp" provider="cloudinary" />
  </div>

  <div class="flex flex-col justify-center items-center gap-1 max-w-[752px] px-6 mb-5">
    <ButtonBlockTertiary to="tel:+33660393750">Une question ? Contactez-nous</ButtonBlockTertiary>
    <p class="text-base">Par téléphone au 06.60.39.37.50</p>
  </div>

  <div class="flex flex-col justify-center items-center gap-1 max-w-[752px] px-6 mb-15">
    <ButtonBlockSecondary to="/">Retourner à la page d'accueil</ButtonBlockSecondary>
  </div>
</template>
<script setup lang="ts">
const title = ref("Merci | Diagnotimmopro | Le meilleur service de diagnostic immobilier")
const description = ref("Chez Diagnotimmopro, nous offrons le meilleur service de diagnostic immobilier, garanti par des professionnels certifiés. Nous nous engageons à fournir un service de qualité supérieure à des prix compétitifs. Fiers de notre réputation dans le domaine, nous garantissons la sécurité et la santé des occupants de votre bien immobilier.")
useHead({
  title: title,
  meta: [
    { name: 'description', content: description }
  ]
})
useServerSeoMeta({
  title: title,
  ogTitle: title,
  description: description,
  ogDescription: description,
  ogUrl: 'https://diagnostimmopro.com',
  ogType: 'website',
  ogImage: 'https://res.cloudinary.com/dj5fs1uis/image/upload/f_auto,q_auto/v1682718006/phone_man.webp',
  twitterCard: 'summary_large_image',
})
</script>