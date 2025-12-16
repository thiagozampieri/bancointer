import { BancoInterAPI } from '../banco-inter-api'
import { IEmitirCobrancaParams, IEmitirCobrancaResponse } from '../../../types/cobranca/Emitir'

export class EmitirCobranca {

    constructor(
        private api: BancoInterAPI,
    ) {
        this.api = api
    }

    async emitir(data: IEmitirCobrancaParams): Promise<IEmitirCobrancaResponse> {
        const response = await this.api.post(`cobranca/v3/cobrancas`, data)
        return response.data
    }

}