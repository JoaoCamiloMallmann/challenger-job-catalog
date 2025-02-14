import api from '@/plugins/axios'

export const jobServiceApi = {
  async getJobs() {
    try {
      const response = await api.get('/jobs')
      return response.data
    } catch (error: any) {
      handleApiError(error)
    }
  },
}

const handleApiError = (error: any) => {
  console.error('Erro na requisição:', error)

  if (error.response) {
    throw new Error(
      `Erro ${error.response.status}: ${error.response.data?.message || 'Erro desconhecido'}`,
    )
  }

  if (error.request) {
    throw new Error('Falha na comunicação com o servidor. Verifique sua conexão.')
  }

  throw new Error(error.message || 'Ocorreu um erro inesperado')
}
