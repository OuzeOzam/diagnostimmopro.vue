<template>
  <SectionHeader>
    <template v-slot:header>
      Le meilleur service de diagnostic immobilier, <span class="text-lemon">au meilleur prix</span>.
    </template>
    <template v-slot:subtitle >
      <MoleculesIconText class="flex flex-start gap-2.5 text-left" v-for="(item) in items">
        <template v-slot:icon>
          <Icon name="mdi:clipboard-check" size="1.3125em" class="text-primary min-w-[1.3125em] mt-1" />
        </template>
        <template v-slot:label><div v-html="item.text"></div></template>
      </MoleculesIconText>
    </template>
    <template v-slot:firstButton>Obtenir mon devis</template>
    <template v-slot:subFirstButton>C’est gratuit ! Et vous le recevez dans la journée.</template>
    <template v-slot:secondButton>Appelez-nous</template>
    <template v-slot:subSecondButton>Notre numéro : 06.60.39.37.50</template>
  <template v-slot:image>
    <nuxt-img src="/phone_man.webp" alt="Un homme commande un diagnostic immobilier sur son téléphone"
      provider="cloudinary" />
  </template>  
  </SectionHeader>
  <SectionReviews />
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
          répondons à toutes vos questions.</p>`
          
        },
        {
          text: `<p class="text-lg">Votre devis de <span class="font-bold">diagnostic sur mesure</span> vous est <span class="font-bold">envoyé dans la journée</span> !</p>`
        },
        {
          text: `<p class="text-lg">Vos diagnostics sont réalisés par des <span class="font-bold">professionnels certifiés et expérimentés</span>.</p>`
        }
      ]
    })
  }
</script>
