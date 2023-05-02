<template>
<div class="flex flex-col items-start p-8 bg-dark-600 rounded-2xl gap-3.5 mx-2 shadow-lg">
      <div class="flex flex-col items-start gap-1">
        <p><slot name="id"></slot>/<slot name="total"></slot></p>
        <h3><slot name="title"></slot></h3>
      </div>
      <p>
        <slot name="text"></slot>
      </p>
      <div class="flex flex-col items-start gap-1">
        <div class="flex flex-col items-start gap-1">
          <div class="flex items-center py-0.5 px-3 gap-1 bg-light-300 rounded-3xl">
            <Icon name="mdi:house-outline" size="1.3125em" class="text-dark-600 min-w-[1.3125em]" />
            <p class="font-bold text-base">Type de bien</p>
          </div>
          <p><slot name="type"></slot></p>
        </div>

        <div class="flex flex-col items-start gap-1">
          <div class="flex items-center py-0.5 px-3 gap-1 bg-light-300 rounded-3xl">
            <Icon name="mdi:calendar-outline" size="1.3125em" class="text-dark-600 min-w-[1.3125em]" />
            <p class="font-bold text-base">Validité</p>
          </div>
          <p><slot name="availability"></slot></p>
        </div>
      </div>
    </div>
  </template>