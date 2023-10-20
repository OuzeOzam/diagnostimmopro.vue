<template>
  <SectionHeader>
    <template v-slot:header>
    Ils nous ont fait <span class="text-lemon">confiance</span>
    </template>
    <template v-slot:subtitle>
      Découvrez ce que nos clients disent de nos diagnostics immobiliers en parcourant nos avis.
    </template>
    <template v-slot:firstButton>
        <ButtonBlockLemon to="/quotation">Obtenir mon devis</ButtonBlockLemon>
      </template>
      <template v-slot:subFirstButton>C’est gratuit ! Et vous le recevez dans la journée.</template>
      <template v-slot:secondButton>
        <ButtonBlockSecondary to="tel:0660393750">Appelez-nous</ButtonBlockSecondary>
      </template>
      <template v-slot:subSecondButton>Notre numéro : 06.60.39.37.50</template>
    <template v-slot:image>
      <nuxt-img class="md:hidden hero-image" src="/people/diagnostiqueur-professionnel-signalant-que-tout-est-ok.webp" alt="Un professionel faisant un signe que tout va pour le mieux" provider="cloudinary" />
      <nuxt-img class="hidden md:block hero-image" src="/people/large/diagnostiqueur-professionnel-signalant-que-tout-est-ok.webp" alt="Un professionel faisant un signe que tout va pour le mieux" provider="cloudinary" />
    </template>
  </SectionHeader>
  <div class="bg-light-100"><SectionReviews /></div>
  <SectionWantContactUs />
</template>
<script setup lang="ts">
const title = ref("Avis clients | Diagnotimmopro | Le meilleur service de diagnostic immobilier")
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
  ogImage: 'https://res.cloudinary.com/dj5fs1uis/image/upload/f_auto,q_auto/v1682718006/people/client-heureux-de-commander-ses-diagnostics-immobiliers.webp',
  twitterCard: 'summary_large_image',
})
</script>