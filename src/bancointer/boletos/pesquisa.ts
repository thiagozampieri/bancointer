import { BancoInterAPI } from '../banco-inter-api'

export class PesquisaBoletos {

    constructor(
        private api: BancoInterAPI,
    ) {
        this.api = api
    }

    async pesquisar(params: PesquisaBoletosParams): Promise<PesquisaBoletosResponse> {
        const response = await this.api.get(`boletos`, params)
        return response.data
    }

}

export interface PesquisaBoletosParams {
    filtrarPor: 'TODOS' | 'VENCIDOSAVENCER' | 'EXPIRADOS' | 'PAGOS' | 'TODOSBAIXADOS',
    filtrarDataPor: 'VENCIMENTO' | 'EMISSAO' | 'SITUACAO',
    dataInicial: string,
    dataFinal: string,
    ordenarPor: 'NOSSONUMERO' | 'SEUNUMER' | 'DATAVENCIMENTO_AS' | 'DATAVENCIMENTO_DS' | 'NOMESACAD' | 'VALOR_AS' | 'VALOR_DS' | 'STATUS_AS' | 'STATUS_DS',
    page: number,
    size: number,
}

export interface PesquisaBoletosResponse {
    totalPages: number,
    totalElements: number,
    numberOfElements: number,
    last: boolean,
    first: boolean,
    size: number,
    summary: PesquisaBoletosResponseSumario,
    content: PesquisaBoletosResponseContent[],
}

export interface PesquisaBoletosResponseSumario {
    recebidos: PesquisaBoletosResponseSumarioDetalhes,
    previstos: PesquisaBoletosResponseSumarioDetalhes,
    baixados: PesquisaBoletosResponseSumarioDetalhes,
    expirados: PesquisaBoletosResponseSumarioDetalhes,
}

export interface PesquisaBoletosResponseSumarioDetalhes {
    quantidade: number,
    valor: number,
}

export interface PesquisaBoletosResponseContent {
    nossoNumero: string,
    seuNumero: string,
    cnpjCpfSacado: string,
    nomeSacado: string,
    situacao: string,
    dataPagtoBaixa: string,
    dataVencimento: string,
    valorNominal: number,
    telefone: string,
    emailPagador: string,
    dataEmissao: string,
    dataLimite: string,
    linhaDigitavel: string,
    valorJuros: number,
    valorMulta: number,
    desconto1: PesquisaBoletosResponseContentDesconto,
    desconto2: PesquisaBoletosResponseContentDesconto,
    desconto3: PesquisaBoletosResponseContentDesconto,
    multa: PesquisaBoletosResponseContentMulta,
    mora: PesquisaBoletosResponseContentMora,
    valorAbatimento: number,
}

export interface PesquisaBoletosResponseContentDesconto {
    codigo: string,
    data: string,
    taxa: number,
    valor: number,
}

export interface PesquisaBoletosResponseContentMulta {
    codigo: string,
    data: string,
    taxa: number,
    valor: number,
}

export interface PesquisaBoletosResponseContentMora {
    codigo: string,
    data: string,
    taxa: number,
    valor: number,
}
