import { IConsultarCobrancaBoleto, IConsultarCobrancaPix, IConsultarCobrancaSituacao, IConsultarCobrancaTipoCobranca } from "./Consultar"

interface IListarCobrancaResponseDataCobrancaPagador {
  nome: string
  cpfCnpj: string
}

interface IListarCobrancaResponseDataCobranca {
  codigoSolicitacao: string
  seuNumero: string
  dataEmissao: string
  dataVencimento: string
  situacao: IConsultarCobrancaSituacao
  tipoCobranca: IConsultarCobrancaTipoCobranca
  valorNominal: number
  dataSituacao: string
  valorTotalRecebido: string
  origemRecebimento: 'BOLETO' | 'PIX'
  pagador: IListarCobrancaResponseDataCobrancaPagador
}

interface IListarCobrancaResponseData {
  cobranca: IListarCobrancaResponseDataCobranca
  boleto?: IConsultarCobrancaBoleto
  pix?: IConsultarCobrancaPix
}

interface IListarCobrancaPaginacao {
  itensPorPagina: number
  paginaAtual: number
}


interface IListarCobrancaParams {
  dataInicial: string,
  dataFinal: string,
  filtrarDataPor?: "VENCIMENTO" | "EMISSAO" | "PAGAMENTO"
  situacao?: IConsultarCobrancaSituacao
  pessoaPagadora?: string
  cpfCnpjPessoaPagadora?: string
  seuNumero?: string
  tipoCobranca?: IConsultarCobrancaTipoCobranca
  paginacao?: IListarCobrancaPaginacao
  ordenarPor?: "PESSOA_PAGADORA" | "TIPO_COBRANCA" | "CODIGO_COBRANCA" | "IDENTIFICADOR" | "DATA_EMISSAO" | "DATA_VENCIMENTO" | "VALOR" | "STATUS"
  tipoOrdenacao?: 'ASC' | 'DESC'
}

interface IListarCobrancaResponse {
  totalPaginas: number,
  totalElementos: number,
  numbenumeroDeElementosrOfElements: number,
  tamanhoPagina: number
  primeiraPagina: boolean
  ultimaPagina: boolean
  cobrancas: IListarCobrancaResponseData[],
}

export {
  IListarCobrancaParams,
  IListarCobrancaResponse
}
