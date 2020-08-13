import axios from 'axios'
import https from 'https'
import { Agent } from 'http'

export class BancoInterAPI {

    public httpsAgent: Agent
    public baseUrl: string

    constructor(
        public conta: string,
        public cert: Buffer,
        public key: Buffer,
        public pass: string
    ) { 
        this.baseUrl = 'https://apis.bancointer.com.br:8443/openbanking/v1/certificado'
        this.httpsAgent = new https.Agent({
            rejectUnauthorized: false,
            cert: cert,
            key: key,
            passphrase: pass
        })
    }

    public get(path) {
        return axios.get(`${this.baseUrl}/${path}`, this.config())
    }

    public post(path, data?) {
        return axios.post(`${this.baseUrl}/${path}`, data, this.config())
    }

    private config() {
        return {
            httpsAgent: this.httpsAgent,
            headers: this.headers()
        }
    }

    private headers() {
        return {
            'x-inter-conta-corrente': this.conta,
            'content-type': 'application/json',
        }
    }

}
