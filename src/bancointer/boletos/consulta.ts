import { BancoInterAPI } from '../banco-inter-api'

export class ConsultaBoletos {

    constructor(
        private api: BancoInterAPI,
    ) {
        this.api = api
    }

    async consultar(nossoNumero: string): Promise<ConsultaBoletosResponse> {
        const response = await this.api.get(`cobranca/v2/boletos/${nossoNumero}`)
        return response.data
    }

}
export interface ConsultaBoletosResponse {
    nomeBeneficiario: string,
    cnpjCpfBeneficiario: string,
    tipoPessoaBeneficiario: string,
    dataHoraSituacao: string,
    codigoBarras: string,
    linhaDigitavel: string,
    dataVencimento: string,
    dataEmissao: string,
    descricao: string,
    seuNumero: string,
    valorNominal: number,
    nomePagador: string,
    emailPagador: string,
    telefonePagador: string,
    tipoPessoaPagador: string,
    cnpjCpfPagador: string,
    dataLimitePagamento: string,
    valorAbatimento: number,
    situacao: string,
    desconto1: ConsultaBoletosResponseDesconto,
    desconto2: ConsultaBoletosResponseDesconto,
    desconto3: ConsultaBoletosResponseDesconto,
    multa: ConsultaBoletosResponseMulta,
    mora: ConsultaBoletosResponseMora,
}

export interface ConsultaBoletosResponseDesconto {
    codigo: string,
    data: string,
    taxa: number,
    valor: number,
}

export interface ConsultaBoletosResponseMulta {
    codigo: string,
    data: string,
    taxa: number,
    valor: number,
}

export interface ConsultaBoletosResponseMora {
    codigo: string,
    data: string,
    taxa: number,
    valor: number,
}
