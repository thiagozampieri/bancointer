import { BancoInterAPI } from '../banco-inter-api'
import { IConsultarCobrancaResponse } from '../../../types/cobranca/Consultar'

export class ConsultarCobranca {

    constructor(
        private api: BancoInterAPI,
    ) {
        this.api = api
    }

    async consultar(codigoSolicitacao: string): Promise<IConsultarCobrancaResponse> {
        const response = await this.api.get(`cobranca/v3/cobrancas/${codigoSolicitacao}`)
        return response.data
    }

}
