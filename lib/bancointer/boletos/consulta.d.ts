import { BancoInterAPI } from '../banco-inter-api';
export declare class ConsultaBoletos {
    private api;
    constructor(api: BancoInterAPI);
    consultar(nossoNumero: string): Promise<ConsultaBoletosResponse>;
}
export interface ConsultaBoletosResponse {
    nomeBeneficiario: string;
    cnpjCpfBeneficiario: string;
    tipoPessoaBeneficiario: string;
    dataHoraSituacao: string;
    codigoBarras: string;
    linhaDigitavel: string;
    dataVencimento: string;
    dataEmissao: string;
    descricao: string;
    seuNumero: string;
    valorNominal: number;
    nomePagador: string;
    emailPagador: string;
    telefonePagador: string;
    tipoPessoaPagador: string;
    cnpjCpfPagador: string;
    dataLimitePagamento: string;
    valorAbatimento: number;
    situacao: string;
    desconto1: ConsultaBoletosResponseDesconto;
    desconto2: ConsultaBoletosResponseDesconto;
    desconto3: ConsultaBoletosResponseDesconto;
    multa: ConsultaBoletosResponseMulta;
    mora: ConsultaBoletosResponseMora;
}
export interface ConsultaBoletosResponseDesconto {
    codigo: string;
    data: string;
    taxa: number;
    valor: number;
}
export interface ConsultaBoletosResponseMulta {
    codigo: string;
    data: string;
    taxa: number;
    valor: number;
}
export interface ConsultaBoletosResponseMora {
    codigo: string;
    data: string;
    taxa: number;
    valor: number;
}
