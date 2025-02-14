import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import * as labsComponents from 'vuetify/labs/components'
import { pt } from 'vuetify/locale'
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'

export const vuetify = createVuetify({
  directives,

  components: {
    ...components,
    ...labsComponents,
  },

  theme: {
    themes: {
      light: {
        dark: false,
        colors: {
          primary: '#682dd4',
          secondary: '#f2f3f7',
        },
      },
    },
  },

  defaults: {
    VNumberInput: { hideDetails: 'auto' },
    VRadioGroup: { hideDetails: 'auto' },
    VDateInput: { hideDetails: 'auto' },
    VTextField: { hideDetails: 'auto', variant: 'solo' },
    VTextarea: { hideDetails: 'auto' },
    VCheckbox: { hideDetails: 'auto' },
    VSelect: { hideDetails: 'auto' },
    VAutocomplete: { hideDetails: 'auto' },
    VSwitch: { hideDetails: 'auto' },
    VTable: { hover: 'true' },
  },

  locale: {
    locale: 'pt',
    messages: { pt },
  },
})
