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
    <v-app-bar-nav-icon class="order-last" variant="text" icon="mdi-menu"
        @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    <v-layout full-height>
        <v-navigation-drawer class="w-100" v-model="drawer" location="right" disable-resize-watcher>
            <div class="flex justify-between items-center pl-3">
                <NavigationLogo />
                <v-app-bar-nav-icon variant="text" icon="mdi-close" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            </div>
            <NavigationItemsGlobal />
        </v-navigation-drawer>
    </v-layout>
</template>