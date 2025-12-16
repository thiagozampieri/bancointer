import { BancoInterAPI } from '../banco-inter-api'
import { IListarCobrancaParams, IListarCobrancaResponse } from '../../../types/cobranca/Listar'

export class ListarCobranca {

    constructor(
        private api: BancoInterAPI,
    ) {
        this.api = api
    }

    async pesquisar(params: IListarCobrancaParams): Promise<IListarCobrancaResponse> {
        const response = await this.api.get(`cobranca/v3/cobrancas`, params)
        return response.data
    }

}

