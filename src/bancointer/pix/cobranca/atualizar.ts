import { BancoInterAPI } from '../../banco-inter-api'

export class AtualizarPix {

  constructor(
    private api: BancoInterAPI,
  ) {
    this.api = api
  }

  async atualizar(txid: string, data: AtualizarPixParams | AtualzarPixCancelParams): Promise<AtualizarPixResponse> {
    const response = await this.api.patch(`pix/v2/cobv/${txid}`, data)
    return response.data
  }

}

export interface AtualzarPixCancelParams {
  status: 'REMOVIDA_PELO_USUARIO_RECEBEDOR'
}

export interface AtualizarPixParams {
  chave: string,
  solicitacaoPagador: string,
  calendario: AtualizarPixCalendario,
  devedor: AtualizarPixPessoa,
  valor: AtualizarPixValor,
  infoAdicionais: AtualizarPixInfoAdicionais[],
  loc: AtualizarPixLoc
}

export interface AtualizarPixResponse {
  status: 'ATIVA' | 'CONCLUIDA' | 'REMOVIDA_PELO_USUARIO_RECEBEDOR' | 'REMOVIDA_PELO_PSP',
  location: string,
  txid: string,
  revisao: number,
  pixCopiaECola: string,
  chave: string,
  solicitacaoPagador: string,
  devedor: AtualizarPixPessoa,
  recebedor: AtualizarPixPessoa,
  valor: AtualizarPixValor,
  calendario: AtualizarPixCalendario,
  infoAdicionais: AtualizarPixInfoAdicionais[]
  loc: AtualizarPixResponseLoc,
}

export interface AtualizarPixCalendario {
  dataVencimento: string,
  validadeAposVencimento: number,
}

export interface AtualizarPixPessoa {
  nome: string,
  cpf: string,
  cnpj: string,
}

export interface AtualizarPixValor {
  original: string,
  multa: AtualizarPixValorMulta,
  juros: AtualizarPixValorJuros,
  abatimento: AtualizarPixValorAbatimento,
  desconto: AtualizarPixValorDescontoPerc | AtualizarPixValorDescontoDataFixa
}

export interface AtualizarPixValorMulta {
  modalidade: 1 | 2,
  valorPerc: string,
}

export interface AtualizarPixValorJuros {
  modalidade: number,
  valorPerc: string,
}

export interface AtualizarPixValorAbatimento {
  modalidade: 1 | 2,
  valorPerc: string,
}

export interface AtualizarPixValorDescontoPerc {
  modalidade: string,
  valorPerc: string,
}

export interface AtualizarPixValorDescontoDataFixa {
  descontoDataFixa: AtualizarPixValorDescontoDataFixaArray[],
  modalidade: string,
}

export interface AtualizarPixValorDescontoDataFixaArray {
  data: string,
  valorPerc: string,
}

export interface AtualizarPixInfoAdicionais {
  nome: string,
  valor: string,
}


export interface AtualizarPixLoc {
  tipoCob: 'cob' | 'cobv'
}

export interface AtualizarPixResponseLoc {
  id: number,
  location: string,
  tipoCob: 'cob' | 'cobv',
  criacao: Date,
}
