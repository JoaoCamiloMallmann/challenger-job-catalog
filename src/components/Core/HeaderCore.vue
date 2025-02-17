<script lang="ts">
import { useDisplay } from 'vuetify'

export default {
  setup() {
    const { smAndDown } = useDisplay() // Detecta telas pequenas

    return {
      isMobile: smAndDown,
    }
  },

  methods: {
    goToHome() {
      this.$router.push('/')
    },
    goToJobs() {
      this.$router.push('/catalogo-de-empregos')
    },
  },
}
</script>

<template>
  <v-app-bar :elevation="0" style="background-color: #f2f3f7" class="px-5" app>
    <template v-slot:prepend>
      <svg
        @click="goToHome"
        class="cursor-pointer"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 213 32"
        fill="none"
        aria-labelledby="ankui4ivsyy78ilto4x1k2lm3f44gym3"
        width="150"
      >
        <path
          d="M78.06 32H1.296c-.596 0-.938-.605-.54-1.047 1.278-1.417 3.619-3.046 5.273-3.046 2.615 0 2.989 1.86 5.23 1.86 3.736 0 7.846-12.65 14.197-12.65 6.35 0 6.35 7.441 13.449 7.441C46.004 24.558 48.993 0 59.079 0c8.848 0 17.697 18.368 20.51 30.11.234.978-.524 1.89-1.53 1.89z"
          fill="#553C9A"
        ></path>
      </svg>
    </template>

    <template v-slot:append>
      <v-btn v-if="!isMobile" @click="goToJobs">Jobs</v-btn>
      <v-btn v-if="!isMobile">Companies</v-btn>
      <v-btn v-if="!isMobile">Pricing</v-btn>
      <v-btn v-if="!isMobile">Advice</v-btn>
      <v-btn v-if="!isMobile">Upload</v-btn>
      <v-btn v-if="!isMobile">Community</v-btn>

      <!-- Mobile Dropdown or Hamburger Icon -->
      <v-menu color="primary" v-if="isMobile" bottom right offset-y>
        <template v-slot:activator="{ props, isActive }">
          <v-btn variant="text" color="primary" v-bind="props" icon>
            <v-icon>mdi-menu</v-icon>
          </v-btn>
        </template>

        <v-list bg-color="secondary" elevation="6" >
          <v-list-item  color="primary" @click="goToJobs">
            <v-list-item-title>Jobs</v-list-item-title>
          </v-list-item>
          <v-list-item color="primary">
            <v-list-item-title>Companies</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>Pricing</v-list-item-title>
          </v-list-item color="primary" >
          <v-list-item>
            <v-list-item-title>Advice</v-list-item-title>
          </v-list-item>
          <v-list-item color="primary" >
            <v-list-item-title>Upload</v-list-item-title>
          </v-list-item>
          <v-list-item color="primary">
            <v-list-item-title>Community</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-avatar v-if="!isMobile">
        <v-img src="https://i.pravatar.cc/50" />
      </v-avatar>
    </template>
  </v-app-bar>
</template>

<style lang="scss" scoped></style>
