import { BancoInterAPI } from '../banco-inter-api'

export class BaixaBoleto {

    constructor(
        private api: BancoInterAPI,
    ) {
        this.api = api
    }

    async baixar(data: BaixaBoletoParams): Promise<any> {
        const response = await this.api.post(`cobranca/v2/boletos/${data.nossoNumero}/cancelar`, { motivoCancelamento: data.motivoCancelamento })
        return response.data
    }

}

export interface BaixaBoletoParams {
    nossoNumero: string,
    motivoCancelamento: 'ACERTOS' | 'APEDIDODOCLIENTE' | 'PAGODIRETOAOCLIENTE' | 'SUBSTITUICAO',
}
