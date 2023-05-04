<template>
  <SectionHeader>
    <template v-slot:header>
      Confiez vos diagnostics immobiliers à <span class="text-lemon">nos experts certifiés</span>.
    </template>
    <template v-slot:subtitle>
      Faites confiance à nos professionnels certifiés pour réaliser tous vos diagnostics immobiliers obligatoires.
    </template>
    <template v-slot:firstButton>Obtenir mon devis</template>
    <template v-slot:subFirstButton>C’est gratuit ! Et vous le recevez dans la journée.</template>
    <template v-slot:secondButton>Appelez-nous</template>
    <template v-slot:subSecondButton>Notre numéro : 06.60.39.37.50</template>
    <template v-slot:image>
      <nuxt-img src="/funny-smiling.webp" alt="Un homme commande un diagnostic immobilier sur son téléphone" class="mt-12"
        provider="cloudinary" />
    </template>
  </SectionHeader>
  <div class="section bg-grey-100" id="heightSaleSection">
    <h2 class="text-dark-600">Les {{ total }} raisons pour lesquelles travailler avec nous.
    </h2>
    <v-carousel height="35em" hide-delimiter-background :show-arrows="false">
      <v-carousel-item v-for="arg in args">
        <Card class="lightCard mx-1">
          <template v-slot:id>{{ arg.id }}</template>
          <template v-slot:total>{{ total }}</template>
          <template v-slot:title>{{ arg.title }}</template>
          <template v-slot:text>{{ arg.text }}</template>
        </Card>
      </v-carousel-item>
    </v-carousel>
    <div class="flex flex-col justify-center items-center gap-1 w-full">
      <ButtonBlockLemon to="/quotation">Obtenir mon devis</ButtonBlockLemon>
      <p class="text-base text-center">C’est gratuit ! Et vous le recevez dans la journée.</p>
    </div>
    <div class="flex flex-col justify-center items-center gap-1 w-full">
      <ButtonBlockSecondary to="tel:+33660393750">Appelez-nous pour être conseillé</ButtonBlockSecondary>
      <p class="text-base text-center">Notre numéro : 06.60.39.37.50</p>
    </div>
  </div>
  <SectionReviews />
  <SectionWantContactUs />
</template>
<script lang="ts">
export default {
  data: () => ({
    total: "5",
    args: [
      {
        id: "1",
        title: "Expertise et qualité de service",
        text: "Notre équipe d'experts en diagnostics immobiliers est hautement qualifiée et dispose d'une expertise reconnue dans le secteur. Nous nous engageons à fournir des rapports détaillés et précis pour garantir votre sécurité et celle de vos proches. Contactez-nous dès maintenant pour en savoir plus.",
      },
      {
        id: "2",
        title: "Des diagnostics sur mesure pour vos besoins spécifiques",
        text: "Chaque bien immobilier est unique et nécessite une approche sur mesure pour répondre aux besoins spécifiques de chaque client. Nous offrons des diagnostics personnalisés pour garantir que vous avez toutes les informations dont vous avez besoin pour prendre des décisions éclairées."
      },
      {
        id: "3",
        title: "Service rapide et efficace",
        text: "Nous comprenons que le temps est précieux, c'est pourquoi nous nous engageons à fournir un service rapide et efficace pour répondre à vos besoins en matière de diagnostics immobiliers. Avec des délais de traitement rapides et des rapports détaillés en temps opportun, nous sommes votre partenaire de confiance pour vos transactions immobilières."
      },
      {
        id: "4",
        title: "Une équipe dédiée à votre satisfaction",
        text: "Notre priorité est votre satisfaction. Nous travaillons dur pour nous assurer que vous êtes pleinement satisfait de nos services et que vous avez toutes les informations dont vous avez besoin pour prendre des décisions éclairées en matière de transactions immobilières."
      },
      {
        id: "5",
        title: "Des rapports détaillés pour une tranquillité d'esprit",
        text: "Nos rapports détaillés vous donnent toutes les informations dont vous avez besoin pour avoir l'esprit tranquille lors de vos transactions immobilières.Nous prenons notre responsabilité au sérieux et nous nous engageons à fournir des rapports précis et détaillés pour garantir votre sécurité et celle de votre famille. "
      }
    ]
  })
}
</script>