import { BancoInterAPI } from '../banco-inter-api'
import fs from 'fs'

export class PdfBoletos {

    constructor(
        private api: BancoInterAPI,
    ) {
        this.api = api
    }

    download(nossoNumero: string, path: string): Promise<any> {
        return new Promise(async (resolve, reject) => {
            const response = await this.api.get(`boletos/${nossoNumero}/pdf`)
            const base64 = response.data
            return fs.writeFile(path, base64, 'base64', (err) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(path)
                }
            })
        })
    }

}
