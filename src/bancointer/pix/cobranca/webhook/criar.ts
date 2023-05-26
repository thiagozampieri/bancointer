import { BancoInterAPI } from '../../../banco-inter-api'

export class CriarPixWebhook {

  constructor(
    private api: BancoInterAPI,
  ) {
    this.api = api
  }

  async criar(chave: string, webhookUrl: string): Promise<any> {
    const response = await this.api.put(`pix/v2/webhook/${chave}`, { webhookUrl })
    return response
  }
}
