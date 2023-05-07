<template>
  <div class="contain">
    <div class="section">
      <div class="content">
        <h2 class="text-dark-600">
          Vous souhaitez nous contacter&#160;?
        </h2>
        <p>Si vous avez des questions, ou êtes à la recherche d’un accompagnement, notre équipe d’experts
          sera ravie de vous suivre dans vos démarches. N’hésitez pas à nous contacter.</p>

        <div class="flex flex-col md:flex-row justify-start items-center gap-5 w-full">
          <ButtonBlockPrimary to="tel:+33660393750">
            <Icon name="mdi:call" size="1.3125em" class="mr-2.5" />Nous appeler
          </ButtonBlockPrimary>
          <ButtonBlockSecondary to="/contact/contactUs">
            <Icon name="mdi:send" size="1.3125em" class="mr-2.5" />Nous écrire
          </ButtonBlockSecondary>
        </div>
      </div>
      <div class="flex justify-center -mt-20 -z-10 relative w-full">
        <nuxt-img src="/lady-thinking.webp" alt="Une femme souriant à l'idée de nous contacter" provider="cloudinary" />
      </div>
    </div>
  </div>
</template>