<script lang="ts">
import type { Jobs } from '@/types/Jobs'
import { useDisplay } from 'vuetify'

export default {
  props: {
    jobs: {
      type: Array as () => Array<Jobs>,
      required: false,
      default: [],
    },
  },

  emits: ['filter-jobs'],

  data() {
    return {
      title: null as string,
      country: null as string,
    }
  },

  methods: {
    filteredJobs() {
      const jobs = this.jobs.filter((job) => {
        const title = job.jobTitleText.toLowerCase()
        return (
          title.includes(this.title?.toLowerCase() || '') &&
          job.companyName.toLowerCase().includes(this.country?.toLowerCase() || '')
        )
      })
      this.$emit('filter-jobs', jobs)
    },

    isMobile(): boolean {
      const { mobile } = useDisplay()
      return mobile.value
    },
  },
}
</script>

<template>
  <v-sheet class="bg-secondary d-flex justify-center align-center w-100 d-flex flex-column pb-8">
    <v-container class="my-5">
      <v-row>
        <v-col>
          <span class="text-grey-darken-1 text-body-2">Remote jobs</span>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <h1 class="text-h3 font-weight-bold">Remote jobs</h1>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <p class="text-body-1">
            Find your next remote job at companies like
            <span class="text-primary font-weight-bold">Intercom</span>,
            <span class="text-primary font-weight-bold">Spotify</span>,
            <span class="text-primary font-weight-bold">Square</span>, and
            <span class="text-primary font-weight-bold">Twitter</span>.
          </p>
        </v-col>
      </v-row>
    </v-container>

    <v-card class="w-75 bg-white elevation-0 rounded-lg pa-4">
      <v-row class="align-center">
        <!-- Campo de busca da área -->
        <v-col cols="12" md="5">
          <v-text-field
            v-model="title"
            class="rounded-0"
            variant="outlined"
            prepend-inner-icon="mdi-magnify"
            label="Selecione a área"
            density="comfortable"
          />
        </v-col>

        <!-- Campo de busca da cidade -->
        <v-col cols="12" md="5">
          <v-text-field
            v-model="country"
            class="rounded-0"
            variant="outlined"
            prepend-inner-icon="mdi-magnify"
            label="Selecione a cidade"
            density="comfortable"
          />
        </v-col>

        <!-- Botões "Clear" e "Search" -->
        <v-col cols="12" md="2" class="d-flex justify-end">
          <v-btn v-if="isMobile" variant="text">CLEAR</v-btn>
          <v-btn color="primary" elevation="0">SEARCH</v-btn>
        </v-col>
      </v-row>

      <!-- Segunda linha: Filtros -->
      <v-row v-if="isMobile" class="mt-2">
        <v-col cols="12" md="3">
          <v-select label="Company" variant="outlined" density="comfortable"></v-select>
        </v-col>
        <v-col cols="12" md="3">
          <v-select label="Type of work" variant="outlined" density="comfortable"></v-select>
        </v-col>
        <v-col cols="12" md="3">
          <v-select label="Salary" variant="outlined" density="comfortable"></v-select>
        </v-col>

        <!-- Botão "Clear All" à direita -->
        <v-col v-if="isMobile" cols="12" md="3" class="d-flex justify-end align-center">
          <v-btn variant="text">CLEAR ALL</v-btn>
        </v-col>
      </v-row>
    </v-card>
  </v-sheet>
</template>

<style lang="scss" scoped></style>
