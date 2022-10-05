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
    contaCorrente: string,
    nossoNumero: string,
    dataHoraSituacao: string,
    codigoBarras: string,
    linhaDigitavel: string,
    dataVencimento: string,
    dataEmissao: string,
    seuNumero: string,
    valorNominal: number,
    dataLimite: string,
    situacao: string,
    codigoEspecie: string,
    origem: string,
    pagador: ConsultaBoletosResponsePagador,
    mensagem: ConsultaBoletosResponseMensagem,
    desconto1: ConsultaBoletosResponseDesconto,
    desconto2: ConsultaBoletosResponseDesconto,
    desconto3: ConsultaBoletosResponseDesconto,
    multa: ConsultaBoletosResponseMulta,
    mora: ConsultaBoletosResponseMora,
}

export interface ConsultaBoletosResponsePagador {
    cpfCnpj: string,
    tipoPessoa: string,
    nome: string,
    endereco: string,
    complemento: string,
    bairro: string,
    cidade: string,
    uf: string,
    cep: string,
    email: string,
    ddd: string,
    telefone: string,
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
export interface ConsultaBoletosResponseMensagem {
    linha1: string,
    linha2: string,
    linha3: string,
    linha4: string,
    linha5: string,
}
