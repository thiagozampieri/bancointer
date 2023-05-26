import { BancoInterAPI } from '../../banco-inter-api'

export class CriarPix {

  constructor(
    private api: BancoInterAPI,
  ) {
    this.api = api
  }

  async criar(data: CriarPixParams): Promise<CriarPixResponse> {
    const response = await this.api.post(`pix/v2/cob`, data)
    return response.data
  }

}

export interface CriarPixParams {
  chave: string,
  solicitacaoPagador: string,
  calendario: CriarPixParamsCalendario,
  devedor: CriarPixParamsDevedorFisica | CriarPixParamsDevedorJuridica,
  valor: CriarPixParamsValor,
  infoAdicionais: CriarPixParamsInfoAdicionais[],
  loc: CriarPixParamsLoc
}

export interface CriarPixParamsCalendario {
  expiracao: number,
}

export interface CriarPixParamsDevedorFisica {
  nome: string,
  cpf: string,
}

export interface CriarPixParamsDevedorJuridica {
  nome: string,
  cnpj: string,
}

export interface CriarPixParamsValor {
  original: string,
  modalidadeAlteracao: number,
}

export interface CriarPixParamsInfoAdicionais {
  nome: string,
  valor: string,
}


export interface CriarPixParamsLoc {
  tipoCob: 'cob' | 'cobv'
}

export interface CriarPixResponse {
  status: 'ATIVA' | 'CONCLUIDA' | 'REMOVIDA_PELO_USUARIO_RECEBEDOR' | 'REMOVIDA_PELO_PSP',
  location: string,
  txid: string,
  revisao: number,
  pixCopiaECola: string,
  chave: string,
  solicitacaoPagador: string,
  devedor: CriarPixParamsDevedorFisica | CriarPixParamsDevedorJuridica,
  loc: CriarPixResponseLoc,
  valor: CriarPixResponseValor,
  calendario: CriarPixResponseCalendario,
  infoAdicionais: CriarPixParamsInfoAdicionais[]
}

export interface CriarPixResponseLoc {
  id: number,
  location: string,
  tipoCob: 'cob' | 'cobv',
  criacao: Date,
}

export interface CriarPixResponseValor {
  original: string,
  modalidadeAlteracao: number,
  retirada: CriarPixResponseValorRetiradaSaque | CriarPixResponseValorRetiradaTroco
}

export interface CriarPixResponseValorRetiradaSaque {
  valor: string,
  modalidadeAlteracao: number,
  modalidadeAgente: 'AGTEC' | 'AGTOT' | 'AGPSS',
  prestadorDoServicoDeSaque: string,
}

export interface CriarPixResponseValorRetiradaTroco {
  valor: string,
  modalidadeAlteracao: number,
  modalidadeAgente: 'AGTEC' | 'AGTOT',
  prestadorDoServicoDeSaque: string,
}

export interface CriarPixResponseCalendario {
  expiracao: number,
  criacao: Date,
}
