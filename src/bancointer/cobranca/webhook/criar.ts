import { BancoInterAPI } from '../../banco-inter-api'

export class CriarBoletoWebhook {

  constructor(
    private api: BancoInterAPI,
  ) {
    this.api = api
  }

  async criar(webhookUrl: string): Promise<any> {
    const response = await this.api.put(`cobranca/v2/cobrancas/webhook`, { webhookUrl })
    return response
  }
}
