<template>
    <div class="flex justify-between items-center border-b-2 border-red-500">
        <div class="p-3">
            <NavigationLogo />
        </div>
        <div class="hidden sm:block">
            <NavigationLarge />
        </div>
        <div class="sm:hidden">
            <NavigationMobile />
        </div>
    </div>
    <v-btn color="primary specialBTN bg-miel">Button</v-btn>
</template>
<!-- <style lang="sass">

body
    @apply bg-red-500

.specialBTN
    @apply lowercase

</style> -->
