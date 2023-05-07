<template>
  <v-carousel color="dark-600" height="18em" hide-delimiter-background :show-arrows="false" interval="6000">
    <v-carousel-item v-for="review in reviews">
      <GReviewsItem>
        <template v-slot:avatar>
          <nuxt-img class="w-12 h-12" :src="review.img" alt="Photo de profil de Ayde" provider="cloudinary" />
        </template>
        <template v-slot:name>
          {{ review.name }}
        </template>
        <template v-slot:reviewText>{{ review.text }}
        </template>
        <template v-slot:button>
          <ButtonSecondary :href="review.link" target="_blank" rel="noopener noreferrer">
            Voir l'avis complet
          </ButtonSecondary>
        </template>
      </GReviewsItem>
    </v-carousel-item>
  </v-carousel>
</template>

<script lang="ts">

export default {

  data: () => ({
    reviews: [
      {
        id: 1,
        name: `Ayde`,
        img: "/reviews/Ayde.webp",
        text: `Mon propriétaire m'a demandé de faire ce rendez vous en raison de mon déménagement. Cependant, c'était un plaisir d'avoir les techniciens dans mon appartement. Ils étaient si positifs et si gentils. Il y avait un technicien en formation lors de notre visite : c'était intéressant et rassurant de voir le processus : ce qui est habituellement dans la tête du technicien était dit à haute voix : et leur expertise et leur sociabilité étaient charmantes.`,
        link: `https://goo.gl/maps/zoHudZr88asLSHu58`
      },
      {
        id: 2,
        name: `Francois`,
        img: "/reviews/Francois.webp",
        text: `Ce fut un plaisir de faire appel à Diagnostimmo Pro qui a produit les diagnostics nécessaires à une mise en location en 48 heures. Le diagnostiqueur maîtrise bien la règlementation en vigueur. Très bon rapport qualité/prix.`,
        link: `https://goo.gl/maps/bzkjVDJYQpecWbAB8`
      },
      {
        id: 3,
        name: `Marie-Cécile`,
        img: "/reviews/Marie.webp",
        text: `Service au top, nous faisons appel à cette société pour les diagnostics de notre cabinet de gestion. Disponible, aimable Hakima est toujours parfaite !`,
        link: `https://goo.gl/maps/MZ71pey593wwZjZT6`
      },
      {
        id: 4,
        name: `Odeon Gestion`,
        img: "/reviews/Odeon.webp",
        text: `Au top ! fiable, sérieux, ponctuel. Les prix sont très raisonnables en prime.`,
        link: `https://goo.gl/maps/aSaDzssnc1J77Zpo8`
      },
      {
        id: 5,
        name: `Yoann`,
        img: "/reviews/Yoann.webp",
        text: `Une équipe réactive pour effectuer le diagnostic. Très bon rapport qualité prix.`,
        link: `https://goo.gl/maps/qLuvJY5uXaBpjf386`
      },
      {
        id: 6,
        name: `Lisa`,
        img: "/reviews/Lisa.webp",
        text: `Excellente société! je recommande vivement pour la qualité d écoute et de rapidité pour organiser les diagnostics! Très professionnel !!!!`,
        link: `https://goo.gl/maps/Mj9ggaX1QKrjsxtj7`
      },
      {
        id: 7,
        name: `José`,
        img: "/reviews/Jose.webp",
        text: `Rapidité dans la prise de rdv, bon rapport qualité/prix. Diagnostiqueur aux p'tits soins lors du rdv ...top! Je recommande.`,
        link: `https://goo.gl/maps/PXhj4ongo1ye2PYA8`
      },
      {
        id: 8,
        name: `Amel`,
        img: "/reviews/Amel.webp",
        text: `Très réactive et professionnelle, je recommande sans hésiter !!`,
        link: `https://goo.gl/maps/e1VCTvwqvdZhLriz6`
      }

    ]
  })
}

</script>