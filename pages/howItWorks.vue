<template>
  <SectionHeader>
    <template v-slot:header>
      Comment notre service de diagnostic immobilier <span class="text-lemon">fonctionne</span>&#160;?
    </template>
    <template v-slot:subtitle>
      Découvrez notre méthode de travail efficace pour vos diagnostics immobiliers.
    </template>
    <template v-slot:firstButton>Obtenir mon devis</template>
    <template v-slot:subFirstButton>C’est gratuit ! Et vous le recevez dans la journée.</template>
    <template v-slot:secondButton>Appelez-nous</template>
    <template v-slot:subSecondButton>Notre numéro : 06.60.39.37.50</template>
    <template v-slot:image>
      <nuxt-img class="mt-12" src="/thinking_man.webp" alt="Voiture qui voyage" provider="cloudinary" />
    </template>
  </SectionHeader>
  <SectionHowItWorks />
  <SectionReviews />
  <SectionWantContactUs />
</template>
