<script lang="ts">
import HeaderCore from '@/components/Core/HeaderCore.vue'
import { RouterView } from 'vue-router'
import SnackbarCore from '@/components/Core/SnackbarCore.vue'
export default {
  components: {
    RouterView,
    HeaderCore,
    SnackbarCore,
  },
}
</script>

<template>
  <v-app>
    <HeaderCore />
    <v-main>
      <RouterView />
    </v-main>
    <SnackbarCore />
  </v-app>
</template>

<style>

</style>
