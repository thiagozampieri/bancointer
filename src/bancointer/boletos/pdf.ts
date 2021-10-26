import { BancoInterAPI } from '../banco-inter-api'

export class PdfBoletos {

    constructor(
        private api: BancoInterAPI,
    ) {
        this.api = api
    }

    download(nossoNumero: string, path: string): Promise<any> {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await this.api.get(`boletos/${nossoNumero}/pdf`)
                const base64 = response.data
                // if (err) reject(err)
                resolve(base64)
            } catch (err) {
                reject(err)
            }
        })
    }

}
