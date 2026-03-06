
type IConsultarCobrancaSituacao = "RECEBIDO" | "A_RECEBER" | "MARCADO_RECEBIDO" | "ATRASADO" | "CANCELADO" | "EXPIRADO" | "FALHA_EMISSAO" | "EM_PROCESSAMENTO" | "PROTESTO"

type IConsultarCobrancaTipoCobranca = "SIMPLES" | "PARCELADO" | "RECORRENTE"

interface IConsultarCobrancaCobranca {
  codigoSolicitacao: string
  seuNumero: string
  dataEmissao: string
  dataVencimento: string
  situacao: IConsultarCobrancaSituacao
  tipoCobranca: IConsultarCobrancaTipoCobranca
  valorNominal: number
  dataSituacao?: string
  valorTotalRecebido?: string
  origemRecebimento?: 'BOLETO' | 'PIX'
  motivoCancelamento?: string
  arquivada: boolean
}

interface IConsultarCobrancaBoleto {
  nossoNumero: string
  codigoBarras: string
  linhaDigitavel: string
}

interface IConsultarCobrancaPix {
  txid: string
  pixCopiaECola: string
}

interface IConsultarCobrancaResponse {
  cobranca: IConsultarCobrancaCobranca,
  boleto?: IConsultarCobrancaBoleto,
  pix?: IConsultarCobrancaPix,
}


export {
  IConsultarCobrancaResponse,
  IConsultarCobrancaSituacao,
  IConsultarCobrancaTipoCobranca,
  IConsultarCobrancaBoleto,
  IConsultarCobrancaPix
}
