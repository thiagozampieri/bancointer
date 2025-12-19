import { BancoInterAPI } from '../banco-inter-api'
import { CancelarCobrancaParams } from '../../../types/cobranca/Cancelar'

export class CancelarCobranca {

    constructor(
        private api: BancoInterAPI,
    ) {
        this.api = api
    }

    async baixar(data: CancelarCobrancaParams): Promise<any> {
        const response = await this.api.post(`cobranca/v3/cobrancas/${data.codigoSolicitacao}/cancelar`, { motivoCancelamento: data.motivoCancelamento })
        return response.data
    }

}


