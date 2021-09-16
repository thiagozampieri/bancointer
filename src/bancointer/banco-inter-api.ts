import axios from 'axios'
import https from 'https'
import { Agent } from 'http'
import { ResponseError } from './response-error'

export class BancoInterAPI {

    public httpsAgent: Agent
    public baseUrl: string

    constructor(
        public conta: string,
        public cert: Buffer,
        public key: Buffer,
        public pass: string
    ) { 
        this.baseUrl = 'https://apis.bancointer.com.br/openbanking/v1/certificado'
        this.httpsAgent = new https.Agent({
            rejectUnauthorized: false,
            cert: cert,
            key: key,
            passphrase: pass
        })
    }

    public async get(path: string, queryParams?: any): Promise<any> {
        const response = await axios.get(`${this.baseUrl}/${path}`, Object.assign(this.config(), { params: queryParams }))
        if (response.status !== 200) {
            throw new ResponseError(response.data.message, response.status)
        }
        return response
    }

    public async post(path: string, data?: any): Promise<any> {
        const response = await axios.post(`${this.baseUrl}/${path}`, data, this.config())
        if (response.status !== 200) {
            throw new ResponseError(response.data.message, response.status)
        }
        return response
    }

    private config() {
        return {
            httpsAgent: this.httpsAgent,
            headers: this.headers(),
            validateStatus: (status: number) => {
                return true
            },
        }
    }

    private headers() {
        return {
            'x-inter-conta-corrente': this.conta,
            'content-type': 'application/json',
        }
    }

}
