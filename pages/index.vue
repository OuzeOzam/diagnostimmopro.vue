<template>
  <SectionHeader>
    <template v-slot:header>
      Le meilleur service de diagnostic immobilier, <span class="text-lemon">au meilleur prix</span>.
    </template>
    <template v-slot:subtitle >
      <MoleculesIconText class="flex flex-start items-start gap-2.5" v-for="(item) in items">
        <div v-html="item.text"></div>
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
          text: `Profitez d’un service <span class="font-bold">humain</span> et <span class="font-bold">réactif</span>. Nous
          répondons à toutes vos questions.`
          
        },
        {
          text: `Votre devis de <span class="font-bold">diagnostic sur mesure</span> vous est <span class="font-bold">envoyé dans la journée</span> !.`
        },
        {
          text: `Vos diagnostics sont réalisés par des <span class="font-bold">professionnels certifiés et expérimentés</span>.<p>`
        }
      ]
    })
  }
</script>
