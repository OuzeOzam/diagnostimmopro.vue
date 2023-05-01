<template>
  <div class="section pt-5">
    <div class="text-center text-lg">
      <span>diagnostimmopro.com</span>
    </div>
    <div class="pt-2.5 pb-5">
      <h1 class="text-center">Le meilleur service de
        diagnostic immobilier, <span class="text-lemon">au meilleur prix</span>.</h1>
    </div>
    <div class="flex flex-col justify-center align-center gap-2 pb-5">
      <MoleculesIconText>
        <p>Profitez d’un service <span class="font-bold">humain</span> et <span class="font-bold">réactif</span>. Nous
          répondons à toutes vos questions.</p>
      </MoleculesIconText>
      <MoleculesIconText>
        <p>Votre devis de <span class="font-bold">diagnostic sur mesure</span> vous est <span class="font-bold">envoyé
            dans la journée</span> !</p>
      </MoleculesIconText>
      <MoleculesIconText>
        <p>Vos diagnostics sont réalisés par des <span class="font-bold">professionnels certifiés et expérimentés</span>.
        </p>
      </MoleculesIconText>
    </div>
    <div class="flex flex-col justify-center items-center gap-1">
      <ButtonGradient to="/quotation">Obtenir mon devis</ButtonGradient>
      <p class="text-base">C’est gratuit ! Et vous le recevez dans la journée.</p>
    </div>
    <div class="flex flex-col justify-center items-center gap-1">
      <ButtonSecondary to="tel:+33660393750">Appelez-nous</ButtonSecondary>
      <p class="text-base">Notre numéro : 06.60.39.37.50</p>
    </div>
  </div>
  <div class="-mt-36 -z-10 relative">
    <nuxt-img src="/phone_man.webp" alt="Un homme commande un diagnostic immobilier sur son téléphone" provider="cloudinary" />
  </div>
</template>