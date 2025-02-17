<script lang="ts">
import { useDisplay } from 'vuetify'
import { Job } from '@/types/Job'

export default {
  setup() {
    const { smAndDown } = useDisplay()
    return {
      isMobile: smAndDown,
    }
  },

  props: {
    job: {
      type: Object as () => Job,
      required: false,
      default: () => ({}) as Job,
    },
  },

  methods: {
    jobRatingColor(rating: number): string {
      if (rating >= 4) return 'success'
      if (rating >= 3) return 'warning'
      if (rating >= 1) return 'error'
      return 'grey'
    },
  },
}
</script>

<template>
  <v-hover v-slot:default="{ isHovering, props }">
    <v-card
      v-bind="props"
      :elevation="isHovering ? 3 : 0"
      variant="outlined"
      class="w-75 my-5 py-6 px-5 rounded-lg border border-grey-lighten-2 mx-auto"
    >
      <v-row align="center">
        <v-col cols="12" md="auto">
          <v-avatar size="64">
            <v-img :src="job.companyLogoUrl" alt="Company Logo" />
          </v-avatar>
        </v-col>

        <v-col>
          <h3 class="font-weight-bold text-body-1 text-md-h6">{{ job.jobTitleText }}</h3>
          <p class="text-caption text-grey-darken-1">
            <strong>{{ job.companyName }}</strong>
            <v-icon size="16" class="mx-1">mdi-map-marker</v-icon> {{ job.locationName }}
          </p>

          <p class="text-caption text-grey-darken-2">
            <v-icon size="16" class="mr-1">mdi-cash-multiple</v-icon>
            {{ job.payCurrency }} ${{ job.annualWage }} / {{ job.payPeriod }}
          </p>

          <v-chip :color="jobRatingColor(job.rating)" size="small" class="mr-1">
            <v-icon size="16" class="mr-1">mdi-star</v-icon> {{ job.rating }}
          </v-chip>
        </v-col>
      </v-row>
    </v-card>
  </v-hover>
</template>

<style lang="scss" scoped></style>
