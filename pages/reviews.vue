<template>
  <SectionHeader>
    <template v-slot:header>
    Ils nous ont fait <span class="text-lemon">confiance</span>
    </template>
    <template v-slot:subtitle>
      Découvrez ce que nos clients disent de nos diagnostics immobiliers en parcourant nos avis.
    </template>
    <template v-slot:firstButton>Obtenir mon devis</template>
    <template v-slot:subFirstButton>C’est gratuit ! Et vous le recevez dans la journée.</template>
    <template v-slot:secondButton>Appelez-nous</template>
    <template v-slot:subSecondButton>Notre numéro : 06.60.39.37.50</template>
    <template v-slot:image>
      <nuxt-img class="mt-12" src="/funny-smiling.webp" alt="Un professionel faisant un signe que tout va pour le mieux" provider="cloudinary" />
    </template>
  </SectionHeader>
</template>