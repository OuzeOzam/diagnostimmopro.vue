<template>
    <SectionHeader>
      <template v-slot:header>
        Le meilleur service de diagnostic immobilier, <span class="text-lemon">au meilleur prix</span>.
      </template>
      <template v-slot:subtitle>
        <MoleculesIconText class="flex flex-start gap-2.5 text-left" v-for="(item) in items">
          <template v-slot:icon>
            <Icon name="mdi:clipboard-check" size="1.3125em" class="text-primary min-w-[1.3125em] mt-1" />
          </template>
          <template v-slot:label>
            <div v-html="item.text"></div>
          </template>
        </MoleculesIconText>
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
        <nuxt-img src="/phone_man.webp" alt="Un homme commande un diagnostic immobilier sur son téléphone"
          provider="cloudinary" class="object-fill w-full lg:absolute lg:-mb-[60px] lg:max-w-2xl xl:max-w-4xl 2xl:max-w-7xl lg:bottom-0 lg:right-0" />
      </template>
    </SectionHeader>
    <div class="bg-grey-100">
      <SectionReviews />
    </div>
    <SectionMandatoryDiags />
    <SectionHowItWorks />
    <SectionWantContactUs />
</template>



<script lang="ts">
export default {

  data: () => ({
    items: [
      {
        text: `<p class="text-lg">Profitez d’un service <span class="font-bold">humain</span> et <span class="font-bold">réactif</span>. Nous
          répondons à toutes vos questions</p>`

      },
      {
        text: `<p class="text-lg">Votre devis de <span class="font-bold">diagnostic sur mesure</span> vous est <span class="font-bold">envoyé dans la journée</span></p>`
      },
      {
        text: `<p class="text-lg">Vos diagnostics sont réalisés par des <span class="font-bold">professionnels certifiés et expérimentés</span></p>`
      }
    ]
  })
}
</script>
<script setup lang="ts">
const title = ref("Accueil | Diagnotimmopro | Le meilleur service de diagnostic immobilier")
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