<template>
  <SectionHeader>
    <template v-slot:header>
      Fin du formulaire
    </template>
    <template v-slot:subtitle>
      Merci de nous avoir contacté. Un expert s’occupe déjà de votre demande, vous obtiendrez une réponse sous 24H.
    </template>
    <template v-slot:firstButton>
        <ButtonBlockLemon to="/quotation">Vous avez une question ?</ButtonBlockLemon>
      </template>
      <template v-slot:secondButton>
        <ButtonBlockSecondary to="tel:0660393750">Retourner à la page d'accueil</ButtonBlockSecondary>
      </template>
    <template v-slot:image>
      <nuxt-img class="mt-12 object-fill w-full lg:absolute lg:max-w-2xl xl:max-w-4xl 2xl:max-w-7xl lg:bottom-0 lg:-right-0" src="/funny-smiling.webp" alt="Voiture qui voyage" provider="cloudinary" />
    </template>
  </SectionHeader>
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