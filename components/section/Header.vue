<template>
  <div class="contain">
    <div class="flex flex-col justify-start items-center lg:flex-row relative">
      <div class="flex flex-col justify-center items-center w-full lg:items-start basis-6/12 py-8 px-5 gap-5">
        <div class="text-lg">
          <span>diagnostimmopro.com</span>
        </div>
        <div>
          <h1 class="lg:text-left">
            <slot name="header"></slot>
          </h1>
        </div>
        <div class="flex flex-col justify-center align-center text-center">
          <p class="text-lg gap-1 lg:text-left flex flex-col justify-center align-left">
            <slot name="subtitle"></slot>
          </p>
        </div>
        <div class="flex flex-col gap-5 md:flex-row md:justify-start md:items-start">
          <div class="flex flex-col justify-center items-center gap-1 w-full lg:w-min">
            <slot name="firstButton"></slot>
            <p class="text-base text-center">
              <slot name="subFirstButton"></slot>
            </p>
          </div>
          <div class="flex flex-col justify-center items-center gap-1 w-full lg:w-min">
            <slot name="secondButton"></slot>
            <p class="text-base text-center">
              <slot name="subSecondButton"></slot>
            </p>
          </div>
        </div>
      </div>
      <div class="-mt-36 -z-10 w-full basis-6/12">
        <slot name="image"></slot>
      </div>
    </div>
  </div>
</template>