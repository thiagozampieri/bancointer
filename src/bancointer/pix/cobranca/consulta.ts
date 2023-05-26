import { BancoInterAPI } from '../../banco-inter-api'

export class ConsultaPix {

  constructor(
    private api: BancoInterAPI,
  ) {
    this.api = api
  }

  async consultar(txid: string): Promise<ConsultaPixResponse> {
    const response = await this.api.get(`pix/v2/cob/${txid}`)
    return response.data
  }

}
export interface ConsultaPixResponse {
  location: string,
  status: 'ATIVA' | 'CONCLUIDA' | 'REMOVIDA_PELO_USUARIO_RECEBEDOR' | 'REMOVIDA_PELO_PSP',
  txid: string,
  revisao: number,
  pixCopiaECola: string,
  chave: string,
  solicitacaoPagador: string,
  devedor: ConsultaPixResponseDevedorPessoaFisica | ConsultaPixResponseDevedorPessoaJuridica,
  loc: ConsultaPixResponseLoc,
  valor: ConsultaPixResponseValor,
  calendario: ConsultaPixResponseCalendario,
  infoAdicionais: ConsultaPixResponseInfoAdicionais[],
  pix: ConsultaPixResponsePix,
}

export interface ConsultaPixResponseDevedorPessoaJuridica {
  nome: string,
  cnpj: string,
}

export interface ConsultaPixResponseDevedorPessoaFisica {
  nome: string,
  cpf: string,
}

export interface ConsultaPixResponseLoc {
  id: number,
  location: string,
  tipoCob: 'cob' | 'cobv',
  criacao: string,
}

export interface ConsultaPixResponseValor {
  original: string,
  modalidadeAlteracao: number,
  retirada: ConsultaPixResponseValorRetirada
}

export interface ConsultaPixResponseValorRetirada {
  saque: ConsultaPixResponseValorRetiradaSaque,
  troco: ConsultaPixResponseValorRetiradaTroco
}

export interface ConsultaPixResponseValorRetiradaSaque {
  valor: string,
  modalidadeAlteracao: number,
  modalidadeAgente: 'AGTEC' | 'AGTOT' | 'AGPSS',
  prestadorDoServicoDeSaque: string,
}

export interface ConsultaPixResponseValorRetiradaTroco {
  valor: string,
  modalidadeAlteracao: number,
  modalidadeAgente: 'AGTEC' | 'AGTOT',
  prestadorDoServicoDeSaque: string,
}

export interface ConsultaPixResponseCalendario {
  expiracao: number,
  criacao: string,
}

export interface ConsultaPixResponseInfoAdicionais {
  nome: string,
  valor: string,
}

export interface ConsultaPixResponsePix {
  endToEndId: string,
  txid: string,
  valor: string,
  chave: string,
  horario: string,
  infoPagador: string,
  devolucoes: ConsultaPixResponsePixDevolucoes[]
}

export interface ConsultaPixResponsePixDevolucoes {
  id: string,
  rtrId: string,
  valor: string,
  status: 'EM_PROCESSAMENTO' | 'DEVOLVIDO' | 'NAO_REALIZADO',
  motivo: string,
  horario: ConsultaPixResponsePixDevolucoesHorario,
}

export interface ConsultaPixResponsePixDevolucoesHorario {
  solicitacao: string,
  liquidacao: string,
}
