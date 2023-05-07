<template>
  <SectionHeader>
    <template v-slot:header>
      Comment notre service de diagnostic immobilier <span class="text-lemon">fonctionne</span>&#160;?
    </template>
    <template v-slot:subtitle>
      Découvrez notre méthode de travail efficace pour vos diagnostics immobiliers.
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
      <nuxt-img class="mt-12 object-fill w-full lg:absolute lg:max-w-2xl xl:max-w-4xl 2xl:max-w-7xl lg:bottom-0 lg:-right-0" src="/thinking_man.webp" alt="Voiture qui voyage" provider="cloudinary" />
    </template>
  </SectionHeader>
  <div class="bg-dark-600">
    <SectionHowItWorks />
  </div>
  <div class="bg-light-100">
    <SectionReviews />
  </div>
  <SectionWantContactUs />
</template>
<script setup lang="ts">
const title = ref("Comment ça marche | Diagnotimmopro | Le meilleur service de diagnostic immobilier")
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