<template>
  <SectionHeader>
    <template v-slot:header>
      <span class="text-lemon">Contactez-nous pour vos besoins</span> en diagnostics immobiliers.
    </template>
    <template v-slot:subtitle>
      Si vous avez des questions, ou êtes à la recherche d’un accompagnement, notre équipe d’experts sera ravie de vous suivre dans vos démarches. N’hésitez pas à nous contacter.
    </template>
    <template v-slot:firstButton>Obtenir mon devis</template>
    <template v-slot:subFirstButton>C’est gratuit ! Et vous le recevez dans la journée.</template>
    <template v-slot:secondButton>Appelez-nous</template>
    <template v-slot:subSecondButton>Notre numéro : 06.60.39.37.50</template>
    <template v-slot:image>
      <nuxt-img class="mt-12" src="/lady-thinking.webp" alt="Femme heureuse de nous contacter" provider="cloudinary" />
    </template>
  </SectionHeader>
  <FormContactFormeIFrame />
  <SectionReviews />
</template>
