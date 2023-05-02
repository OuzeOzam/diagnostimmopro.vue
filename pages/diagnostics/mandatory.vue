<template>
  <SectionHeader>
    <template v-slot:header>
      Les diagnostics immobiliers obligatoires&#160;: <span class="text-lemon">tout ce que vous devez savoir</span>.
    </template>
    <template v-slot:subtitle>
      <p class="text-center">Faites réaliser vos diagnostics immobiliers obligatoires par des professionnels certifiés
        pour garantir la sécurité et la valeur de votre bien immobilier.</p>
    </template>
    <template v-slot:firstButton>Obtenir mon devis</template>
    <template v-slot:subFirstButton>C’est gratuit ! Et vous le recevez dans la journée.</template>
    <template v-slot:secondButton>Appelez-nous</template>
    <template v-slot:subSecondButton>Notre numéro : 06.60.39.37.50</template>
    <template v-slot:image>
      <nuxt-img src="/lady-shoulders.webp" alt="Un homme commande un diagnostic immobilier sur son téléphone"
        provider="cloudinary" class="mt-5" />
    </template>
  </SectionHeader>

  <div class="section">
    <h2>Quels sont les diagnostics immobiliers obligatoires&#160;?</h2>
    <p>
      Les diagnostics immobiliers obligatoires évaluent l'état du bien et détectent les risques pour la santé, la sécurité
      et l'environnement. Ils sont indispensables avant toute transaction immobilière ou location, réalisés par des
      professionnels certifiés et régis par la loi. Découvrez les diagnostics obligatoires.
    </p>
    <ButtonBlockTertiary to="#heightRentSection">Pour la vente</ButtonBlockTertiary>
    <ButtonBlockTertiary to="#heightSaleSection">Pour la location</ButtonBlockTertiary>
  </div>
  <div class="section bg-light-100" id="heightRentSection">
    <h2>Quels sont les {{ total }} diagnostics immobiliers obligatoires pour la vente&#160;?</h2>
    <v-carousel color="dark-600" height="33em" hide-delimiter-background :show-arrows="false">
      <v-carousel-item v-for="card in cards">
      <CardsDark>
        <template v-slot:id>{{ card.id }}</template>
        <template v-slot:total>{{ total }}</template>
        <template v-slot:title>{{ card.title }}</template>
        <template v-slot:text>{{ card.text }}</template>
        <template v-slot:type>{{ card.type }}</template>
        <template v-slot:availability>{{ card.availability }}</template>
      </CardsDark>
    </v-carousel-item>
    </v-carousel>
  </div>
</template>
<script lang="ts">
export default {
  data: () => ({
    total: "8",
    cards: [
      {
        id: "1",
        title: "Mesurage de superficie Loi Carrez",
        text: "Le Mesurage de superficie Loi Carrez consiste à mesurer la superficie privative de chaque lot afin d'informer l'acquéreur de la surface réelle du bien qu'il achète.",
        type: "Tout bien en copropriété",
        availability: "Illimitée (sauf si modification intérieure de la structure du bien)"
      },
      {
        id: "2",
        title: "Mesurage de superficie Loi Carrez",
        text: "Le Mesurage de superficie Loi Carrez consiste à mesurer la superficie privative de chaque lot afin d'informer l'acquéreur de la surface réelle du bien qu'il achète.",
        type: "Tout bien en copropriété",
        availability: "Illimitée (sauf si modification intérieure de la structure du bien)"
      },
      {
        id: "3",
        title: "Mesurage de superficie Loi Carrez",
        text: "Le Mesurage de superficie Loi Carrez consiste à mesurer la superficie privative de chaque lot afin d'informer l'acquéreur de la surface réelle du bien qu'il achète.",
        type: "Tout bien en copropriété",
        availability: "Illimitée (sauf si modification intérieure de la structure du bien)"
      },
      {
        id: "2",
        title: "Mesurage de superficie Loi Carrez",
        text: "Le Mesurage de superficie Loi Carrez consiste à mesurer la superficie privative de chaque lot afin d'informer l'acquéreur de la surface réelle du bien qu'il achète.",
        type: "Tout bien en copropriété",
        availability: "Illimitée (sauf si modification intérieure de la structure du bien)"
      },
      {
        id: "2",
        title: "Mesurage de superficie Loi Carrez",
        text: "Le Mesurage de superficie Loi Carrez consiste à mesurer la superficie privative de chaque lot afin d'informer l'acquéreur de la surface réelle du bien qu'il achète.",
        type: "Tout bien en copropriété",
        availability: "Illimitée (sauf si modification intérieure de la structure du bien)"
      },
      {
        id: "2",
        title: "Mesurage de superficie Loi Carrez",
        text: "Le Mesurage de superficie Loi Carrez consiste à mesurer la superficie privative de chaque lot afin d'informer l'acquéreur de la surface réelle du bien qu'il achète.",
        type: "Tout bien en copropriété",
        availability: "Illimitée (sauf si modification intérieure de la structure du bien)"
      },
      {
        id: "2",
        title: "Mesurage de superficie Loi Carrez",
        text: "Le Mesurage de superficie Loi Carrez consiste à mesurer la superficie privative de chaque lot afin d'informer l'acquéreur de la surface réelle du bien qu'il achète.",
        type: "Tout bien en copropriété",
        availability: "Illimitée (sauf si modification intérieure de la structure du bien)"
      },
      {
        id: "2",
        title: "Mesurage de superficie Loi Carrez",
        text: "Le Mesurage de superficie Loi Carrez consiste à mesurer la superficie privative de chaque lot afin d'informer l'acquéreur de la surface réelle du bien qu'il achète.",
        type: "Tout bien en copropriété",
        availability: "Illimitée (sauf si modification intérieure de la structure du bien)"
      }
    ]
  })
}
</script>
