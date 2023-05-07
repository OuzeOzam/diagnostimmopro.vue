<template>
  <div class="flex flex-col flex-start gap-5">
    <div class="flex flex-start gap-4">
      <slot name="avatar"></slot>
      <div class="flex flex-col flex-start gap-1">
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
      <p class="text-base text-dark-600 normal-case line-clamp-3 pl-1">
        <slot name="reviewText"></slot>
      </p>
    </div>
    <slot name="button"></slot>
  </div>
</template>