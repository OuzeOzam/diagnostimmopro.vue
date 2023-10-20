<template>
  <div class="contain">
    <div class="section">
      <div class="content">
        <h2 class="text-light-300 text-center">Comment ça marche&#160;?</h2>
        <div class="flex flex-col md:flex-row gap-8">
          <div v-for="item in items" class="flex flex-col items-start w-full pb-5 gap-6">
            <div class="flex flex-col justify-center items-center gap-5">
              <div class="flex flex-col justify-center min-h-[100px]">
                <nuxt-img :src="item.path" :alt="item.alt" provider="cloudinary" />
              </div>
              <h3 class="text-xl font-bold text-center">{{ item.title }}</h3>
              <p class="text-light-300 text-center">{{ item.text }}</p>
            </div>
          </div>
        </div>
        <div class="flex flex-col justify-center items-center gap-1 w-full">
          <ButtonPrimary to="/quotation">Demandez un devis gratuit</ButtonPrimary>
          <p class="text-sm">C’est gratuit ! Et vous le recevez dans la journée.</p>
        </div>
      </div>
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
        text: "Lors de notre premier contact, nos experts vous fournissent un devis en fonction de votre projet. Lorsque vous validez celui-ci, nous organisons un RDV avec les diagnostiqueur."
      },
      {
        path: "/roads.svg",
        alt: "Voiture qui se déplace d'un point à un autre",
        title: "Intervention du diagnostiqueur dans les heures programmées",
        text: "Le jour du RDV, notre expert se déplace et réalise le ou les diagnostics à réaliser pour votre bien."
      },
      {
        path: "/printer.svg",
        alt: "Imprimante qui imprime un rapport",
        title: "Paiement et envoi du rapport d’expertise dans les délais",
        text: "À réception de votre paiement, vos rapports de diagnostics immobiliers vous sont adressés par mail sous 24 heures en moyenne."
      },
    ]
  })
}

</script>