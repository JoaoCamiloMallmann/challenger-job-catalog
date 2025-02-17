<script lang="ts">
import type { Jobs } from '@/types/Jobs'
import { useDisplay } from 'vuetify'

export default {
  setup() {
    const { smAndDown } = useDisplay() // Detecta telas pequenas

    return {
      isMobile: smAndDown,
    }
  },

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
      company: null as string,
      salary: null as number,
      payPeriod: null as string,
    }
  },

  watch: {
    jobs: {
      handler() {
        this.filteredJobs()
      },
      deep: true,
      immediate: true,
    },
  },

  computed: {
    filtredCompany(): string[] {
      const companies = []
      this.jobs?.forEach((job) => {
        if (!companies.includes(job.companyName)) {
          companies.push(job.companyName)
        }
      })
      return companies
    },

    filtredPayPeriod(): string[] {
      const payPeriod = []
      this.jobs?.forEach((job) => {
        if (!payPeriod.includes(job.payPeriod)) {
          payPeriod.push(job.payPeriod)
        }
      })
      return payPeriod
    },
  },

  methods: {
    filteredJobs(): void {
      let jobs = [...this.jobs] as Jobs[]

      if (this.title) {
        jobs = jobs.filter((job: Jobs) =>
          job.jobTitleText.toLowerCase().includes(this.title.toLowerCase()),
        )
      }

      if (this.country) {
        jobs = jobs.filter((job: Jobs) =>
          job.locationName.toLowerCase().includes(this.country.toLowerCase()),
        )
      }

      if (this.company) {
        jobs = jobs.filter((job: Jobs) =>
          job.companyName.toLowerCase().includes(this.company.toLowerCase()),
        )
      }

      if (this.salary) {
        jobs = jobs.filter((job: Jobs) => job.annualWage >= this.salary)
      }

      this.$emit('filter-jobs', jobs)
    },

    clearAllFilter(): void {
      this.title = null
      this.country = null
      this.company = null
      this.salary = null
      this.payPeriod = null
      this.filteredJobs()
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
        <v-col cols="12" md="5">
          <v-text-field
            v-model="title"
            class="rounded-0"
            variant="outlined"
            prepend-inner-icon="mdi-magnify"
            label="Job title, keywords or company"
            density="comfortable"
          />
        </v-col>

        <v-col cols="12" md="5">
          <v-text-field
            v-model="country"
            class="rounded-0"
            variant="outlined"
            prepend-inner-icon="mdi-magnify"
            label="Country"
            density="comfortable"
          />
        </v-col>

        <v-col cols="12" class="d-flex justify-end align-center overflow-hidden" md="2" >
          <v-btn
            v-if="!isMobile"
            variant="text"
            @click="((title = null), (country = null), filteredJobs())">
            CLEAR
          </v-btn>
          <v-btn color="primary" :class="{ 'w-100': isMobile }" elevation="0" @click="filteredJobs">
            SEARCH
          </v-btn>
        </v-col>
      </v-row>

      <v-row v-if="!isMobile" class="mt-2">
        <v-col cols="12" md="3">
          <v-autocomplete
            v-model="company"
            label="Company"
            variant="outlined"
            density="comfortable"
            :items="filtredCompany"
          />
        </v-col>
        <v-col cols="12" md="3">
          <v-autocomplete
            v-model="payPeriod"
            label="Pay Period"
            variant="outlined"
            density="comfortable"
            :items="filtredPayPeriod"
          />
        </v-col>
        <v-col cols="12" md="3">
          <v-number-input
            v-model="salary"
            label="Salary"
            variant="outlined"
            prefix="$"
            density="comfortable"
          />
        </v-col>

        <v-col cols="12" md="3" class="d-flex justify-end align-center">
          <v-btn variant="text" @click="clearAllFilter()">CLEAR ALL</v-btn>
        </v-col>
      </v-row>
    </v-card>
  </v-sheet>
</template>

<style lang="scss" scoped></style>
