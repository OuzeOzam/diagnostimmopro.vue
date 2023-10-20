<template>
    <noscript>
        <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-K3R6DCF" height="0" width="0"
            style="display:none;visibility:hidden">
        </iframe>
    </noscript>
    <div class="lg:h-[70px] lg:flex bg-light-300 border-b-[1px] border-grey-400 py-1 sticky top-0 z-10">
        <div class="lg:container mx-auto flex justify-between items-center">
            <div class="flex justify-between items-center">
                <NavigationLogo class="pl-4" />
            </div>
            <div class="flex items-center text-left lg:hidden">
                <NavigationMobile />
            </div>
            <NavigationLarge class="hidden lg:flex" />
        </div>
    </div>
</template>
    
