import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import * as labsComponents from 'vuetify/labs/components'
import { pt } from 'vuetify/locale'


export const vuetify = createVuetify({
  directives,

  components: {
    ...components,
    ...labsComponents,
  },

  defaults: {
    VNumberInput: { hideDetails: 'auto' },
    VRadioGroup: { hideDetails: 'auto' },
    VDateInput: { hideDetails: 'auto' },
    VTextField: { hideDetails: 'auto' },
    VTextarea: { hideDetails: 'auto' },
    VCheckbox: { hideDetails: 'auto' },
    VSelect: { hideDetails: 'auto' },
    VAutocomplete: { hideDetails: 'auto' },
    VSwitch: { hideDetails: 'auto' },
    VTable: { hover: 'true' },
    VCard: { rounded: 'lg' },
  },

  locale: {
    locale: 'pt',
    messages: { pt },
  },
})
