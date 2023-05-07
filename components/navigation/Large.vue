<template>
    <nav class="px-4 flex items-center gap-3 text-dark-600">
        <v-menu location="bottom">
            <template v-slot:activator="{ props }">
                <div v-bind="props" class="flex items-center cursor-pointer">
                    <p class="text-lg font-bold">
                        Les diagnostics
                    </p>
                    <Icon name="mdi-chevron-down" size="1.3125em" class="text-dark-300 min-w-[1.3125em]" />
                </div>
            </template>
            <v-list class="bg-light-300 mt-2">
                <v-list-item>
                    <div class="flex flex-col py-1 gap-2">
                        <NuxtLink class="text-lg font-bold" to="/diagnostics/mandatory">Les diagnostics obligatoires</NuxtLink>
                        <NuxtLink class="text-lg font-bold" to="/diagnostics/ourDiagnostician">Nos diagnostiqueurs</NuxtLink>
                        <NuxtLink class="text-lg font-bold" to="/diagnostics/energeticAudience">L'audit énergétique</NuxtLink>
                    </div>
                </v-list-item>
            </v-list>
        </v-menu>
        <NuxtLink class="text-lg font-bold" to="/howItWorks">Comment ça marche ?</NuxtLink>
        <NuxtLink class="text-lg font-bold" to="/reviews">Avis clients</NuxtLink>
        <v-menu location="bottom">
            <template v-slot:activator="{ props }">
                <div v-bind="props" class="flex items-center cursor-pointer">
                    <p class="text-lg font-bold">
                        Nous contacter
                    </p>
                    <Icon name="mdi-chevron-down" size="1.3125em" class="text-dark-300 min-w-[1.3125em]" />
                </div>
            </template>
            <v-list class="bg-light-300">
                <v-list-item>
                    <div class="flex flex-col py-1 gap-2">
                        <NuxtLink class="text-lg font-bold" to="/contact/contactUs">Nous contacter par écrit</NuxtLink>
                        <NuxtLink class="text-lg font-bold" to="/contact/callUBack">Vous faire rappeler</NuxtLink>
                    </div>
                </v-list-item>
            </v-list>
        </v-menu>
        <ButtonBlockPrimary to="tel:+33660393750">Appelez-nous</ButtonBlockPrimary>
    <ButtonBlockLemon to="/quotation">Devis gratuit</ButtonBlockLemon>
</nav></template>