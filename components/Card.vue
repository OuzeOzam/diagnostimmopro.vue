<template>
  <div>
  <div class="bodyCard flex flex-col items-start p-8 rounded-2xl gap-3.5 shadow-lg text-left">
    <div class="flex flex-col items-start gap-1">
      <p>
        <slot name="id"></slot>/<slot name="total"></slot>
      </p>
      <h3>
        <slot name="title"></slot>
      </h3>
    </div>
    <p>
      <slot name="text"></slot>
    </p>
    <slot name="additionnal"></slot>
  </div>
</div>
</template>
<style lang="sass">
  .darkCard
    .bodyCard
      @apply bg-dark-600 text-light-300
    .bodyChip 
      @apply bg-light-300 text-dark-600

  .lightCard
    .bodyCard
      @apply bg-light-300 text-dark-600
    .bodyChip 
      @apply bg-dark-600 text-light-300
</style>