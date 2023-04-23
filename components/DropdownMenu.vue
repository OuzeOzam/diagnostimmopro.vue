<template>
    <div class="d-flex justify-space-around">
      <v-btn
        color="primary"
      >
        Parent activator
  
        <v-menu activator="parent">
          <v-list>
            <v-list-item
              v-for="(item, index) in items"
              :key="index"
              :value="index"
            >
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-btn>
  
    </div>
  </template>

<script lang="ts">
export default {
    data: () => ({
        items: [
            { title: 'Devis', href: '/diagnostics/mandatory' },
            { title: 'Devis', href: '/diagnostics/mandatory' },
            { title: 'Devis', href: '/diagnostics/mandatory' },
        ],
    }),
}
</script>