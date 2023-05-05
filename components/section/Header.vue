<template>
  <div class="container mx-auto">
    <div class="flex flex-col justify-start items-center lg:flex-row lg:h-screen">
      <div class="flex flex-col justify-center items-center w-full lg:items-start py-8 px-5 gap-5 lg:mb-[60px]">
        <div class="text-lg">
          <span>diagnostimmopro.com</span>
        </div>
        <div>
          <h1 class="lg:text-left">
            <slot name="header"></slot>
          </h1>
        </div>
        <div class="flex flex-col justify-center align-center gap-2 text-center">
          <p class="text-lg lg:text-left flex flex-col justify-center align-left gap-5">
            <slot name="subtitle"></slot>
          </p>
        </div>
        <div class="flex flex-col justify-center items-center lg:items-start gap-1 w-full">
          <slot name="firstButton"></slot>
          <p class="text-base text-center">
            <slot name="subFirstButton"></slot>
          </p>
        </div>
        <div class="flex flex-col justify-center items-center lg:items-start gap-1 w-full">
          <slot name="secondButton"></slot>
          <p class="text-base text-center">
            <slot name="subSecondButton"></slot>
          </p>
        </div>
      </div>
      <div class="-mt-36 -z-10 w-full">
        <slot name="image"></slot>
      </div>
    </div>
  </div>
</template>