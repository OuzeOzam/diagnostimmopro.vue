<template>
  <div class="flex flex-col flex-start gap-5">
    <div class="flex flex-start gap-4">
      <slot name="avatar"></slot>
      <div class="flex flex-col flex-start">
        <p class="font-bold">
          <slot name="name"></slot>
        </p>
        <div class="flex items-start">
          <Icon name="mdi:star" size="1.3125em" class="text-primary min-w-[1.3125em]" />
          <Icon name="mdi:star" size="1.3125em" class="text-primary min-w-[1.3125em]" />
          <Icon name="mdi:star" size="1.3125em" class="text-primary min-w-[1.3125em]" />
          <Icon name="mdi:star" size="1.3125em" class="text-primary min-w-[1.3125em]" />
          <Icon name="mdi:star" size="1.3125em" class="text-primary min-w-[1.3125em]" />
        </div>
      </div>
    </div>
    <div class="flex items-center">
      <p class="text-sm normal-case line-clamp-3">
        <slot name="reviewText"></slot>
      </p>
    </div>
    <slot name="button"></slot>
  </div>
  <div class="flex flex-col justify-center align-center gap-2.5">
    <ButtonTertiary>
      <Icon name="mdi:message-plus" size="1.3125em" class="mr-2.5" />Donnez votre avis
    </ButtonTertiary>
    <ButtonTertiary>
      <Icon name="mdi:eye" size="1.3125em" class="mr-2.5" />Voir tous les avis
    </ButtonTertiary>
  </div>
</template>