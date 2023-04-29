<template>
  <SectionIndexHeader />
  <Review>
    <template v-slot:avatar>
      <img class="w-12 h-12" src="~/assets/images/reviews/Ayde.webp" alt="Photo de profil de Ayde">
    </template>
    <template v-slot:name>Test</template>
    <template v-slot:reviewText>Mon propriétaire m'a demandé de faire cette rendez vous en raison de mon
      déménagement. Cependant, c'était un plaisir
      D'avoir les techniciens dans mon appartement. Ils étaient si positifs et si gentils. Il y avait un technicien en
      Formation lors de notre visite : c'était intéressant et rassurant de voir le processus : ce qui est habituellement
      Dans la tête du technicien était dit à haute voix : et leur expertise et leur sociabilité étaient
      charmantes.
    </template>
    <template v-slot:button>
      <ButtonSecondary href="https://goo.gl/maps/1vUjQ2CuZNfubY8K7" target="_blank" rel="noopener noreferrer">
        Voir l'avis
      </ButtonSecondary>
    </template>
  </Review>
</template>