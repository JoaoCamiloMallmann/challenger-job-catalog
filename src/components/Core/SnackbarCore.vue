<script lang="ts">
import { useSnackbarStore } from '@/stores/snackbarStore'
import { mapState, mapActions } from 'pinia'
export default {
  data() {
    return {
      show: false,
    }
  },

  computed: {
    ...mapState(useSnackbarStore, ['getState', 'getText', 'getColor', 'getIcon']),
  },

  methods: {},
}
</script>

<template>
  <v-snackbar :color="getColor" v-model="getState">
    <v-icon> {{ getIcon }} </v-icon> {{ getText }}
  </v-snackbar>
</template>

<style lang="scss" scoped></style>
