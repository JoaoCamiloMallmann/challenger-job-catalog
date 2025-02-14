<script lang="ts">
import HeaderCore from '@/components/Core/HeaderCore.vue'
import { RouterView } from 'vue-router'
export default {
  components: {
    RouterView,
    HeaderCore,
  },
}
</script>

<template>
  <v-app>
    <HeaderCore />
    <v-main>
      <RouterView />
    </v-main>
  </v-app>
</template>

<style>

</style>
