<script lang="ts">
import type { Jobs } from '@/types/Jobs'
import CardJobs from './CardJobs.vue'
export default {
  components: {
    CardJobs,
  },
  props: {
    filterJobs: {
      type: Array as () => Array<Jobs>,
      required: false,
      default: [],
    },
  },
}
</script>

<template>
  <v-row justify="center">
    <v-col cols="12" md="8">
      <div class="mx-auto mt-7 mb-4 w-75">
        <v-row justify="space-between">
          <v-col cols="auto">
            <span class="text-grey-darken-2 font-weight-bold text-h5">
              {{ filterJobs.length }} jobs
            </span>
          </v-col>

          <v-col cols="auto">
            <v-select
              class="w-100"
              density="comfortable"
              variant="outlined"
              style="min-width: 150px"
            />
          </v-col>
        </v-row>
      </div>

      <template v-for="job in filterJobs" :key="job.id">
        <CardJobs :job="job" />
      </template>
    </v-col>

    <v-col cols="0" md="3">
      <v-row>
        <v-col cols="12" class="mt-12">
          <v-card color="primary" class="mx-auto w-100 mt-12 rounded-lg" variant="tonal">
            <v-btn color="primary" icon="mdi-email" variant="tonal" class="ml-3 mt-3" />
            <v-card-title class="font-weight-bold"> Weekly newsletter </v-card-title>
            <v-card-subtitle class="text-body-1 text-wrap">
              we´ll keep you updated when the best ew remote jobs pop up on mimalayas
            </v-card-subtitle>
            <v-card-text>
              <v-text-field variant="outlined" label="Email" class="w-100" />
              <span class="text-caption"> We are about your data in our privacy policy </span>

              <v-btn class="w-100 mt-3 rounded-lg" color="primary" elevation="0">Subscribe</v-btn>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col cols="12">
          <v-card color="primary" class="mx-auto w-100 mt-3 rounded-lg" variant="tonal">
            <v-card-title> Popular searches </v-card-title>
            <v-card-text>
              <v-list density="compact">
                <v-list-item>
                  <v-row justify="space-between">
                    <v-col cols="8">
                      <span class="text-body-1">Product Designer</span>
                    </v-col>
                    <v-col cols="4" class="text-right">
                      <v-chip color="purple-lighten-4" class="text-primary"> 204 jobs </v-chip>
                    </v-col>
                  </v-row>
                </v-list-item>

                <v-list-item>
                  <v-row justify="space-between">
                    <v-col cols="8">
                      <span class="text-body-1">Customer Success</span>
                    </v-col>
                    <v-col cols="4" class="text-right">
                      <v-chip color="purple-lighten-4" class="text-primary"> 80 jobs </v-chip>
                    </v-col>
                  </v-row>
                </v-list-item>

                <v-list-item>
                  <v-row justify="space-between">
                    <v-col cols="8">
                      <span class="text-body-1">Product Manager</span>
                    </v-col>
                    <v-col cols="4" class="text-right">
                      <v-chip color="purple-lighten-4" class="text-primary"> 120 jobs </v-chip>
                    </v-col>
                  </v-row>
                </v-list-item>

                <v-list-item>
                  <v-row justify="space-between">
                    <v-col cols="8">
                      <span class="text-body-1">Engineering Manager</span>
                    </v-col>
                    <v-col cols="4" class="text-right">
                      <v-chip color="purple-lighten-4" class="text-primary"> 64 jobs </v-chip>
                    </v-col>
                  </v-row>
                </v-list-item>
              </v-list>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<style lang="css" scoped></style>
