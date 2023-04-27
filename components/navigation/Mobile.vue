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
    <v-app-bar-nav-icon class="order-last" variant="text" icon="mdi-menu" @click.stop="drawer = !drawer">
    </v-app-bar-nav-icon>
    <v-layout full-height>
        <!-- This is the menu when it's open -->
        <v-navigation-drawer class="w-100 bg-blur" v-model="drawer" location="right" disable-resize-watcher border="none">
            <div class="flex justify-between items-center pl-4 pr-1 py-1 border-b-[1px] border-grey-400">
                <NavigationLogo />
                <v-app-bar-nav-icon variant="text" icon="mdi-close" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            </div>
            <div class="px-5 pt-5">
                <NavigationItemsGlobal />
            </div>
        </v-navigation-drawer>
        <!-- End of open menu -->
    </v-layout>
</template>