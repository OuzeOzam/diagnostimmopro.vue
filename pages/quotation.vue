<template>
  <div class="contain">
    <div class="section">
      <div class="content">
        <FormQuotationIFrame />
        <div class="flex flex-col justify-center items-center gap-1 w-full">
          <ButtonBlockInline to="tel:+33660393750">Une question ? Contactez-nous</ButtonBlockInline>
          <p class="text-base">Par téléphone au 06.60.39.37.50</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const title = ref("Devis gratuit | Diagnotimmopro | Le meilleur service de diagnostic immobilier")
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