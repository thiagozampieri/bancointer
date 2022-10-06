import axios from 'axios'
import querystring from 'querystring'
import https from 'https'
import { Agent } from 'http'
import { ResponseError } from './response-error'

export class BancoInterAPI {

  public httpsAgent: Agent
  public baseUrl: string
  public accessToken: string = ''
  public credentials: any = {}

  constructor(
    public conta: string,
    public cert: Buffer,
    public key: Buffer,
    public clientId: string,
    public clientSecret: string,
  ) {
    this.baseUrl = 'https://cdpj.partners.bancointer.com.br'
    this.credentials.clientId = clientId
    this.credentials.clientSecret = clientSecret
    this.httpsAgent = new https.Agent({
      rejectUnauthorized: false,
      cert,
      key,
    })
  }

  public async get(path: string, queryParams?: any): Promise<any> {
    const response = await axios
      .get(`${this.baseUrl}/${path}`, Object.assign(this.config(), { params: queryParams }))
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

  public async connect() {
    const path = 'oauth/v2/token'
    const data = querystring.stringify({
      client_id: this.credentials.clientId,
      client_secret: this.credentials.clientSecret,
      grant_type: 'client_credentials',
      scope: 'extrato.read boleto-cobranca.read boleto-cobranca.write pagamento-boleto.write pagamento-boleto.read',
    })

    const response = await axios.post(`${this.baseUrl}/${path}`, data, {
      httpsAgent: this.httpsAgent,
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
      },
      validateStatus: (status: number) => true,
    })
    if (response.status !== 200) {
      throw new ResponseError(response.data.message, response.status)
    }

    const { access_token } = response.data
    this.accessToken = access_token
    return access_token;
  }

  private config() {
    return {
      httpsAgent: this.httpsAgent,
      headers: this.headers(),
      validateStatus: (status: number) => true
    }
  }

  private headers() {
    return {
      'content-type': 'application/json',
      Authorization: `Bearer ${this.accessToken}`,
    }
  }
}
