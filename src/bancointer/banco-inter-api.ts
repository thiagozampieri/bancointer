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
    public ca: Buffer,
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
      ca
    })
  }

  public async get(path: string, queryParams?: any): Promise<any> {
    const response = await axios
      .get(`${this.baseUrl}/${path}`, Object.assign(this.config(), { params: queryParams }))
    if (response.status !== 200) {
      throw new ResponseError(response.data.detail, response.data.violacoes, response.status)
    }
    return response
  }

  public async post(path: string, data?: any): Promise<any> {
    const response = await axios.post(`${this.baseUrl}/${path}`, data, this.config())
    if (response.status !== 200 && response.status !== 201 && response.status !== 204) {
      throw new ResponseError(response.data.detail, response.data.violacoes, response.status)
    }
    return response
  }

  public async put(path: string, data?: any): Promise<any> {
    const response = await axios.put(`${this.baseUrl}/${path}`, data, this.config())
    if (response.status !== 200 && response.status !== 201 && response.status !== 204) {
      throw new ResponseError(response.data.detail, response.data.violacoes, response.status)
    }
    return response
  }

  public async patch(path: string, data?: any): Promise<any> {
    const response = await axios.patch(`${this.baseUrl}/${path}`, data, this.config())
    if (response.status !== 200 && response.status !== 201 && response.status !== 204) {
      throw new ResponseError(response.data.detail, response.data.violacoes, response.status)
    }
    return response
  }

  public async connect() {
    const path = 'oauth/v2/token'
    const data = querystring.stringify({
      client_id: this.credentials.clientId,
      client_secret: this.credentials.clientSecret,
      grant_type: 'client_credentials',
      scope: 'extrato.read boleto-cobranca.read boleto-cobranca.write pagamento-boleto.write pagamento-boleto.read pagamento-darf.write payloadlocation.write payloadlocation.read cobv.write cobv.read cob.write cob.read pix.write pix.read webhook.read webhook.write payloadlocation.write payloadlocation.read pagamento-pix.write pagamento-pix.read webhook-banking.write webhook-banking.read',
    })

    const response = await axios.post(`${this.baseUrl}/${path}`, data, {
      httpsAgent: this.httpsAgent,
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
      },
      validateStatus: (status: number) => true,
    })
    if (response.status !== 200) {
      throw new ResponseError(response.data.error_title, response.data, response.status)
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
      'x-conta-corrente': this.conta,
    }
  }
}
