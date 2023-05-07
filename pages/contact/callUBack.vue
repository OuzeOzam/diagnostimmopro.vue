<template>
  <SectionHeader>
    <template v-slot:header>
    Demandez à vous <span class="text-lemon">faire rappeler</span>
    </template>
    <template v-slot:subtitle>
      Si vous avez des questions, ou êtes à la recherche d’un accompagnement, notre équipe d’experts sera ravie de vous suivre dans vos démarches. N’hésitez pas à nous contacter.
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
      <nuxt-img class="hero-image" src="/lady-thinking.webp" alt="Femme heureuse de nous contacter" provider="cloudinary" />
    </template>
  </SectionHeader>
  <div class="bg-light-300">
    <FormCallBackIFrame />
  </div>
  <div class="bg-light-100">
    <SectionReviews />
  </div>
</template>
<script setup lang="ts">
const title = ref("Faites vous rappeler | Diagnotimmopro | Le meilleur service de diagnostic immobilier")
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