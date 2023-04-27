<template>
    <div class="flex justify-between items-center bg-light-300 border-b-[1px] border-grey-400 py-1 sticky top-0">
        <div class="flex justify-between items-center">
            <NavigationLogo class="pl-4"/>
            <NavigationLarge class="hidden md:flex"/>
        </div>
        <div class="md:hidden">
            <NavigationMobile />
        </div>
    </div>
</template>