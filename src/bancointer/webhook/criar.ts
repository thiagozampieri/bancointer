import { ResponseError } from 'bancointer/response-error'
import { BancoInterAPI } from '../banco-inter-api'

export class CriarWebhook {

  constructor(
    private api: BancoInterAPI,
  ) {
    this.api = api
  }

  criar(webhookUrl: string): Promise<any> {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await this.api.put(`cobranca/v2/boletos/webhook`, { webhookUrl })
        return response
      } catch (err) {
        reject(err)
      }
    })
  }
}
