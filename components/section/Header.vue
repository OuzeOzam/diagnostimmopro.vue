<template>
  <div class="section">
    <div class="text-center text-lg">
      <span>diagnostimmopro.com</span>
    </div>
    <div>
      <h1 class="text-center">
        <slot name="header"></slot>
      </h1>
    </div>
    <div class="flex flex-col justify-center align-center gap-2 text-center">
      <p class="text-lg"><slot name="subtitle"></slot></p>
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
  <div class="flex justify-center -mt-36 -z-10 relative">
    <slot name="image"></slot>
  </div>
</template>