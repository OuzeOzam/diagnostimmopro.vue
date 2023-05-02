<template>
  <div class="section pt-5">
    <div class="text-center text-lg">
      <span>diagnostimmopro.com</span>
    </div>
    <div class="pt-2.5 pb-5">
      <h1 class="text-center">
        <slot name="header"></slot>
      </h1>
    </div>
    <div class="flex flex-col justify-center align-center gap-2 pb-5">
      <slot name="subtitle"></slot>
    </div>
    <div class="flex flex-col justify-center items-center gap-1 w-full">
      <ButtonBlockLemon to="/quotation">
        <slot name="firstButton"></slot>
      </ButtonBlockLemon>
      <p class="text-base text-center">
        <slot name="subFirstButton"></slot>
      </p>
    </div>
    <div class="flex flex-col justify-center items-center gap-1 w-full">
      <ButtonBlockSecondary to="tel:+33660393750">
        <slot name="secondButton"></slot>
      </ButtonBlockSecondary>
      <p class="text-base text-center">
        <slot name="subSecondButton"></slot>
      </p>
    </div>
  </div>
  <div class="-mt-36 -z-10 relative">
    <slot name="image"></slot>
  </div>
</template>