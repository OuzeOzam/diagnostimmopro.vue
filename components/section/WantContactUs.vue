<template>
  <div class="section">
    <h2 class="text-center text-dark-600">
      Vous souhaitez nous contacter&#160;?
    </h2>
    <p class="text-center ">Si vous avez des questions, ou êtes à la recherche d’un accompagnement, notre équipe d’experts
      sera ravie de vous suivre dans vos démarches. N’hésitez pas à nous contacter.</p>
    <ButtonBlockPrimary to="tel:+33660393750">
      <Icon name="mdi:call" size="1.3125em" class="mr-2.5" />Nous appeler
    </ButtonBlockPrimary>
    <ButtonBlockSecondary to="/diagnostics/mandatory">
      <Icon name="mdi:send" size="1.3125em" class="mr-2.5" />Nous écrire
    </ButtonBlockSecondary>
  </div>
  <div class="-mt-20 -z-10 relative">
    <nuxt-img src="/lady-thinking.webp" alt="Une femme souriant à l'idée de nous contacter" provider="cloudinary" />
  </div>
</template>