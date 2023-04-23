<template>
    <v-list class="sm:hidden">
        <v-list-group>
            <template v-slot:activator="{ props }">
                <v-list-item v-bind="props" title="Les diagnostics"></v-list-item>
            </template>
            <DiagnosticianMenuList />
        </v-list-group>
    </v-list>
    <div class="hidden sm:block">
        <v-menu>
            <template v-slot:activator="{ props }">
                <v-btn prepend-icon="mdi-menu-down" variant="text" v-bind="props">
                    Les diagnostics
                </v-btn>
            </template>
            <v-list>
                <DiagnosticianMenuList />
            </v-list>
        </v-menu>
    </div>


    <v-list-item title="Comment ça marche ?" to="/howItWorks"></v-list-item>
    <v-list-item title="Avis clients" to="/reviews"></v-list-item>
    <v-list class="sm:hidden">
        <v-list-group>
            <template v-slot:activator="{ props }">
                <v-list-item v-bind="props" title="Nous contacter"></v-list-item>
            </template>
            <v-list-item title="Nous contacter par e-mail" to="/contact/contactUs"></v-list-item>
            <v-list-item title="Vous faire rappeler" to="/contact/callUBack"></v-list-item>        </v-list-group>
    </v-list>
    <div class="hidden sm:block">
    <v-menu>
        <template v-slot:activator="{ props }">
            <v-btn prepend-icon="mdi-menu-down" variant="text" v-bind="props">
                Nous contacter
            </v-btn>
        </template>
        <v-list>
            <v-list-item title="Nous contacter par e-mail" to="/contact/contactUs"></v-list-item>
            <v-list-item title="Vous faire rappeler" to="/contact/callUBack"></v-list-item>
        </v-list>
    </v-menu>
    </div>
    <v-btn href="tel:+33646016484">Appelez-Nous</v-btn>
    <v-btn to="/quotation">Obtenir mon devis</v-btn>
</template>
