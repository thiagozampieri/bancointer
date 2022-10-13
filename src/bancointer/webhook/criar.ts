import { ResponseError } from 'bancointer/response-error'
import { BancoInterAPI } from '../banco-inter-api'

export class CriarWebhook {

  constructor(
    private api: BancoInterAPI,
  ) {
    this.api = api
  }

  async criar(webhookUrl: string): Promise<any> {
    const response = await this.api.put(`cobranca/v2/boletos/webhook`, { webhookUrl })
    return response
  }
}
