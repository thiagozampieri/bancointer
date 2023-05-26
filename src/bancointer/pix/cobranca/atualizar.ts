import { BancoInterAPI } from '../../banco-inter-api'

export class AtualizarPix {

  constructor(
    private api: BancoInterAPI,
  ) {
    this.api = api
  }

  async atualizar(txid: string, data: AtualizarPixParams | AtualzarPixCancelParams): Promise<AtualizarPixResponse> {
    const response = await this.api.patch(`pix/v2/cob/${txid}`, data)
    return response.data
  }

}

export interface AtualzarPixCancelParams {
  status: 'REMOVIDA_PELO_USUARIO_RECEBEDOR'
}

export interface AtualizarPixParams {
  chave: string,
  solicitacaoPagador: string,
  calendario: AtualizarPixParamsCalendario,
  devedor: AtualizarPixParamsDevedor,
  valor: AtualizarPixParamsValor,
  infoAdicionais: AtualizarPixParamsInfoAdicionais[],
  loc: AtualizarPixParamsLoc
}

export interface AtualizarPixParamsCalendario {
  expiracao: number,
}

export interface AtualizarPixParamsDevedor {
  nome: string,
  cpf: string,
  cnpj: string,
}

export interface AtualizarPixParamsValor {
  original: string,
  modalidadeAlteracao: number,
}

export interface AtualizarPixParamsInfoAdicionais {
  nome: string,
  valor: string,
}


export interface AtualizarPixParamsLoc {
  tipoCob: 'cob' | 'cobv'
}

export interface AtualizarPixResponse {
  status: 'ATIVA' | 'CONCLUIDA' | 'REMOVIDA_PELO_USUARIO_RECEBEDOR' | 'REMOVIDA_PELO_PSP',
  location: string,
  txid: string,
  revisao: number,
  pixCopiaECola: string,
  chave: string,
  solicitacaoPagador: string,
  devedor: AtualizarPixParamsDevedor,
  loc: AtualizarPixResponseLoc,
  valor: AtualizarPixResponseValor,
  calendario: AtualizarPixResponseCalendario,
  infoAdicionais: AtualizarPixParamsInfoAdicionais[]
}

export interface AtualizarPixResponseLoc {
  id: number,
  location: string,
  tipoCob: 'cob' | 'cobv',
  criacao: Date,
}

export interface AtualizarPixResponseValor {
  original: string,
  modalidadeAlteracao: number,
  retirada: AtualizarPixResponseValorRetiradaSaque | AtualizarPixResponseValorRetiradaTroco
}

export interface AtualizarPixResponseValorRetiradaSaque {
  valor: string,
  modalidadeAlteracao: number,
  modalidadeAgente: 'AGTEC' | 'AGTOT' | 'AGPSS',
  prestadorDoServicoDeSaque: string,
}

export interface AtualizarPixResponseValorRetiradaTroco {
  valor: string,
  modalidadeAlteracao: number,
  modalidadeAgente: 'AGTEC' | 'AGTOT',
  prestadorDoServicoDeSaque: string,
}

export interface AtualizarPixResponseCalendario {
  expiracao: number,
  criacao: Date,
}
