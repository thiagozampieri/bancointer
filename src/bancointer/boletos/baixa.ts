import { BancoInterAPI } from '../banco-inter-api'

export class BaixaBoleto {

    constructor(
        private api: BancoInterAPI,
    ) {
        this.api = api
    }

    async baixar(data: BaixaBoletoParams): Promise<any> {
        const response = await this.api.post(`cobranca/v2/boletos/${data.nossoNumero}/cancelar`, { codigoBaixa: data.codigoBaixa })
        return response.data
    }

}

export interface BaixaBoletoParams {
    nossoNumero: string,
    codigoBaixa: 'ACERTOS' | 'PROTESTADO' | 'DEVOLUCAO' | 'PROTESTOAPOSBAIXA' | 'PAGODIRETOAOCLIENTE' | 'SUBISTITUICAO' | 'FALTADESOLUCAO' | 'APEDIDODOCLIENTE'
}
