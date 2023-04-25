<template>
    <v-list class="sm:hidden">
        <v-list-group expand-icon="mdi-chevron-right" collapse-icon="mdi-chevron-down">
            <template v-slot:activator="{ props }">
                <v-list-item v-bind="props" title="Les diagnostics"></v-list-item>
            </template>
            <NavigationItemsDiagnostician />
        </v-list-group>
    </v-list>
    <div class="hidden sm:block">
        <v-menu>
            <template v-slot:activator="{ props }">
                <v-btn append-icon="mdi-menu-down" variant="text" v-bind="props">
                    Les diagnostics
                </v-btn>
            </template>
            <v-list>
                <NavigationItemsDiagnostician />
            </v-list>
        </v-menu>
    </div>


    <v-list-item title="Comment ça marche ?" to="/howItWorks"></v-list-item>
    <v-list-item title="Avis clients" to="/reviews"></v-list-item>


    <v-list class="sm:hidden">
        <v-list-group expand-icon="mdi-chevron-right" collapse-icon="mdi-chevron-down">
            <template v-slot:activator="{ props }">
                <v-list-item v-bind="props" title="Nous contacter"></v-list-item>
            </template>
            <NavigationItemsContact />
        </v-list-group>
    </v-list>
    <div class="hidden sm:block">
        <v-menu>
            <template v-slot:activator="{ props }">
                <v-btn append-icon="mdi-menu-down" variant="text" v-bind="props">
                    Nous contacter
                </v-btn>
            </template>
            <v-list>
                <NavigationItemsContact />
            </v-list>
        </v-menu>
    </div>
    <v-btn href="tel:+33646016484">Appelez-Nous</v-btn>
    <v-btn to="/quotation">Obtenir mon devis</v-btn>
    <ButtonsCallUs class="bg-amber-accent-3">TEST</ButtonsCallUs>
</template>
