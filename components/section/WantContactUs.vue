<template>
  <div class="section pt-10 flex flex-col justify-center items-center gap-5">
    <h2 class="font-['Merriweather'] font-black text-2xl text-center text-dark-600">
      Vous souhaitez nous contacter ?
    </h2>
    <p class="text-center ">Si vous avez des questions, ou êtes à la recherche d’un accompagnement, notre équipe d’experts
      sera ravie de vous suivre dans vos démarches. N’hésitez pas à nous contacter.</p>
    <ButtonPrimary to="tel:+33660393750">
      <Icon name="mdi:call" size="1.3125em" class="mr-2.5" />Nous appeler
    </ButtonPrimary>
    <ButtonSecondary to="/diagnostics/mandatory">
      <Icon name="mdi:send" size="1.3125em" class="mr-2.5" />Nous écrire
    </ButtonSecondary>
  </div>
  <div class="-mt-20 -z-10 relative">
    <img src="~/assets/images/lady-thinking.webp") alt="Une femme souriant à l'idée de nous contacter">
  </div>
</template>