import { BancoInterAPI } from '../banco-inter-api'

export class BoletosConsulta {

    constructor(
        private api: BancoInterAPI,
    ) {
        this.api = api
    }

    async consultar(nossoNumero: string): Promise<Boleto> {
        const response = await this.api.get(`boletos/${nossoNumero}`)
        return response.data
    }

}
export interface Boleto {
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
    desconto1: DescontoBoleto,
    desconto2: DescontoBoleto,
    desconto3: DescontoBoleto,
    multa: MultaBoleto,
    mora: MoraBoleto,
}

export interface DescontoBoleto {
    codigo: string,
    data: string,
    taxa: number,
    valor: number,
}

export interface MultaBoleto {
    codigo: string,
    data: string,
    taxa: number,
    valor: number,
}

export interface MoraBoleto {
    codigo: string,
    data: string,
    taxa: number,
    valor: number,
}
