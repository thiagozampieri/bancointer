import { BancoInterAPI } from '../banco-inter-api'

export class PdfCobranca {

    constructor(
        private api: BancoInterAPI,
    ) {
        this.api = api
    }

    download(codigoSolicitacao: string): Promise<any> {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await this.api.get(`cobranca/v3/cobrancas/${codigoSolicitacao}/pdf`)
                const base64 = response.data.pdf
                // if (err) reject(err)
                resolve(base64)
            } catch (err) {
                reject(err)
            }
        })
    }

}
