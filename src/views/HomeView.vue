<script lang="ts">
export default {
  methods: {
    goToHome() {
      this.$router.push('/')
    },
    goToJobs() {
      this.$router.push('/catalogo-de-empregos') // Corrigido erro no nome do link
    },
  },
}
</script>

<template>
  <v-container fluid  class="d-flex justify-center align-center flex-column fill-height text-center bg-secondary">
    <span class="text-primary text-h3 font-weight-bold">Veja nossas vagas</span>
    <v-btn
      class="mt-5 rounded-md px-6"
      color="primary"
      variant="outlined"
      elevation="0"
      prepend-icon="mdi-arrow-right"
      @click="goToJobs"
    >
      Ir para vagas
    </v-btn>
  </v-container>
</template>

<style>

</style>
