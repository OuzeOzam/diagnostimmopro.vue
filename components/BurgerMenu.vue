<script lang="ts">
export default {
    data() {
        return {
            drawer: false,
        }
    },
}
</script>

<template>
    <v-app-bar-nav-icon class="order-last" variant="text" icon="mdi-menu-open"
        @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    <v-layout full-height>
        <v-navigation-drawer class="w-100" v-model="drawer" location="right" disable-resize-watcher>
            <div class="flex justify-between items-center">
                <a href="/" class="p-3">
                <img 
                    class="w-8" 
                    src="~/assets/images/logo.png" 
                    alt="Logo retour menu"
                >
            </a>
                <v-app-bar-nav-icon variant="text" icon="mdi-backburger"
                    @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

            </div>
                <NavItems />
        </v-navigation-drawer>
    </v-layout>
</template>