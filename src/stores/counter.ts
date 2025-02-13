import { defineStore } from 'pinia'

export const useSnackbarStore = defineStore('snackbar', {
  state: () => ({
    state: false as boolean,
    text: null as string,
    icon: null as string,
    timeout: 2500 as number,
    color: '' as string,
  }),

  getters: {
    getState(): boolean {
      return this.state
    },
    getText(): string {
      return this.text
    },
    getTimeout(): number {
      return this.timeout
    },
    getColor(): string {
      return this.color
    },
    getIcon(): string {
      return this.icon
    },
  },

  actions: {
    setState(state: boolean) {
      this.state = state
    },

    setText(text: string) {
      this.text = text
    },

    setTimeout(timeout: number) {
      this.timeout = timeout
    },

    setColor(color: string) {
      this.color = color
    },

    setIcon(icon: string) {
      this.icon = icon
    },
  },
})
