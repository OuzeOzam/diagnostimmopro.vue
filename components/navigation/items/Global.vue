<template>
  <div class="overflow-y-scroll pb-[40vh]">
    <div class="justify-between items-center">
      <v-list-item :ripple="false" class="pl-0 py-4" title="Accueil" to="/"></v-list-item>
    </div>
    <v-list class="py-2">
      <v-list-group expand-icon="mdi-chevron-right" collapse-icon="mdi-chevron-down">
        <template v-slot:activator="{ props }">
          <v-list-item :ripple="false" class=" pl-0 pt-0 pb-0" density="compact" v-bind="props"
            title="Les diagnostics"></v-list-item>
        </template>
        <NavigationItemsDiagnostician />
      </v-list-group>
    </v-list>
    <!-- <div class="hidden lg:block">
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
  </div> -->

    <div class="justify-between items-center">
      <v-list-item :ripple="false" class="pl-0 py-4" title="Comment ça marche ?" to="/howItWorks"></v-list-item>
      <v-list-item :ripple="false" class="pl-0 py-4" title="Avis clients" to="/reviews"></v-list-item>
    </div>



    <v-list class="pt-2 pb-5">
      <v-list-group expand-icon="mdi-chevron-right" collapse-icon="mdi-chevron-down">
        <template v-slot:activator="{ props }">
          <v-list-item :ripple="false" class="pl-0 pt-0 p-0" density="compact" v-bind="props"
            title="Nous contacter"></v-list-item>
        </template>
        <NavigationItemsContact />
      </v-list-group>
    </v-list>
    <!-- <div class="hidden lg:block">
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
  </div> -->

    <div class="bg-blur h-auto fixed w-full grid gap-3 p-6 bottom-0 left-0">
      <ButtonBlockLemon to="/quotation">Obtenir mon devis</ButtonBlockLemon>
      <ButtonBlockSecondary to="tel:+33660393750">Appelez-nous</ButtonBlockSecondary>
    </div>
  </div>

  <!-- <div class="hidden lg:flex justify-between items-center">
            <v-btn icon="mdi-phone" variant="text" class="d-sm-flex"></v-btn>
            <v-btn class="d-sm-none" href="tel:+33646016484">Appelez-Nous</v-btn>
            <v-btn to="/quotation">Obtenir mon devis</v-btn>
        </div> -->
</template>
<style lang="sass">

.v-list-item
  .v-list-item-title
    @apply text-xl font-bold text-dark-600
    &:active
      @apply underline

  &:visited .v-list-item__overlay, &:active .v-list-item__overlay
    @apply bg-light-300

.v-list-group__items .v-list-item-title
   @apply text-lg font-normal

</style>