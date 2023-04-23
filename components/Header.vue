<template>
    <div class="flex justify-between items-center">
        <div class="p-3">
            <a href="/">
                <img 
                    class="w-8" 
                    src="~/assets/images/logo.png" 
                    alt="Logo retour menu"
                >
            </a>
        </div>
        <div class="hidden sm:block">
            <NavBar />
        </div>
        <div class="sm:hidden">
            <BurgerMenu />
        </div>
    </div>
</template>