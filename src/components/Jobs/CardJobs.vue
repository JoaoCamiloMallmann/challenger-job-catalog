<script lang="ts">
import { Jobs } from '@/types/Jobs'

export default {
  props: {
    job: {
      type: Object as () => Jobs,
      required: false,
      default: [],
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
        <v-col cols="auto">
          <v-avatar size="50">
            <v-img :src="job.companyLogoUrl" alt="Company Logo"></v-img>
          </v-avatar>
        </v-col>

        <v-col>
          <h3 class="font-weight-bold">{{ job.jobTitleText }}</h3>
          <p class="text-caption">
            <strong>{{ job.companyName }}</strong>
            <v-icon size="16" class="mx-1">mdi-map-marker</v-icon> {{ job.locationName }}
          </p>

          <p class="text-caption text-grey">
            <v-icon size="16" class="mr-1">mdi-cash-multiple</v-icon>
            {{ job.payCurrency }} {{ job.annualWage }} / {{ job.payPeriod }}
          </p>

          <v-chip color="green" size="small" class="mr-1">
            <v-icon size="16" class="mr-1">mdi-star</v-icon> {{ job.rating }}
          </v-chip>
        </v-col>

        <v-col cols="auto" class="text-right"> </v-col>
      </v-row>
    </v-card>
  </v-hover>
</template>

<style lang="scss" scoped></style>
