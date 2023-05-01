<template>
  <div class="bg-dark-600 flex flex-col gap-5 py-10 px-5">
    <h2 class="text-center font-[Merriweather] font-black text-2xl text-light-300">Comment ça marche ?</h2>
    <div v-for="item in items" class="flex flex-col items-start pb-5 gap-6">
      <div class="flex flex-col justify-center items-center gap-5">
        <nuxt-img :src="item.path" :alt="item.alt" provider="cloudinary"/>
        <h3 class="text-center text-xl font-bold">{{ item.title }}</h3>
        <p class="text-center text-light-300">{{ item.text }}</p>
      </div>
    </div>
    <div class="flex flex-col justify-center items-center gap-1">
      <ButtonPrimary to="/quotation">Demandez un devis gratuit</ButtonPrimary>
      <p class="text-sm">C’est gratuit ! Et vous le recevez dans la journée.</p>
    </div>
  </div>
</template>
<script lang="ts">
export default {

  data: () => ({
    items: [
      {
        path: "/flying_paper.svg",
        alt: "Avion en papier qui s'envole",
        title: "Premier contact, devis et planification d’un RDV",
        text: "Lors de notre premier contact, nos experts vous fournisse un devis en fonction de votre projet. Lorsque vous validez celui-ci, nous organisons un RDV avec les diagnostiqueur."
      },
      // {
      //   path: "_nuxt/assets/images/road.svg",
      //   alt: "Avion en papier qui s'envole",
      //   title: "Intervention du diagnostiqueur dans les heures programmées",
      //   text: "Le jour du RDV, notre expert se déplace et réalise le ou les diagnostics à réaliser pour votre bien."
      // },
      // {
      //   path: "_nuxt/assets/images/printer.svg",
      //   alt: "Avion en papier qui s'envole",
      //   title: "Paiement et envoi du rapport d’expertise dans les délais",
      //   text: "Suite à la réception de votre paiement, vous vous verrez recevoir votre rapport d’expertise réalisé par le diagnostiqueur."
      // },
    ]
  })
}

</script>