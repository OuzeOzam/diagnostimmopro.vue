<template>
  <div class="section z-10">
    <div class="text-center	">
      <span>diagnostimmopro.com</span>
    </div>
    <div class="pt-2.5 pb-5">
      <h1 class="font-['Merriweather'] font-black text-4xl leading-[2.828rem] text-center">Le meilleur service de
        diagnostic immobilier, <span class="text-lemon">au meilleur prix</span>.</h1>
    </div>
    <div class="flex flex-col justify-center align-center pb-8 gap-2">
      <div class="flex flex-start items-center gap-2.5">
        <Icon name="mdi:clipboard-check" size="1.3125em" class="text-primary min-w-[1.3125em]" />
        <p>Profitez d’un service <span class="font-bold">humain</span> et <span class="font-bold">réactif</span>. Nous
          répondons à toutes vos questions.</p>
      </div>
      <div class="flex flex-start items-center gap-2.5">
        <Icon name="mdi:clipboard-check" size="1.3125em" class="text-primary min-w-[1.3125em]" />
        <p>Votre devis de <span class="font-bold">diagnostic sur mesure</span> vous est <span class="font-bold">envoyé
            dans la journée</span> !</p>
      </div>
      <div class="flex flex-start items-center gap-2.5">
        <Icon name="mdi:clipboard-check" size="1.3125em" class="text-primary min-w-[1.3125em]" />
        <p>Vos diagnostics sont réalisés par des <span class="font-bold">professionnels certifiés et expérimentés</span>.
        </p>
      </div>
    </div>
    <div class="flex flex-col justify-center items-center gap-1 pb-5">
      <ButtonGradient to="/quotation">Obtenir mon devis</ButtonGradient>
      <p class="text-sm">C’est gratuit ! Et vous le recevez dans la journée.</p>
    </div>
    <div class="flex flex-col justify-center items-center gap-1">
      <ButtonSecondary to="/quotation">Appelez-nous</ButtonSecondary>
      <p class="text-sm">C’est gratuit ! Et vous le recevez dans la journée.</p>
    </div>
  </div>
  <div class="-mt-36 -z-10 relative">
      <img src="~/assets/images/phone_man.png" alt="Un homme commande un diagnostic immobilier sur son téléphone">
  </div>
</template>