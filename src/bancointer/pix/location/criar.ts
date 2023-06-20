import { BancoInterAPI } from '../../banco-inter-api'

export class CriarLocation {

  constructor(
    private api: BancoInterAPI,
  ) {
    this.api = api
  }

  async criar(type: 'cob' | 'cobv'): Promise<CriarLocationResponse> {
    const response = await this.api.post(`pix/v2/loc`,
      {
        tipoCob: type
      }
    )
    return response.data
  }
}

export interface CriarLocationParams {
  tipoCob: 'cob' | 'cobv'
}

export interface CriarLocationResponse {
  id: number,
  location: string,
  tipoCob: string,
  criacao: Date,
}