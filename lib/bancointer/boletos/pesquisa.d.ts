import { BancoInterAPI } from '../banco-inter-api';
export declare class PesquisaBoletos {
    private api;
    constructor(api: BancoInterAPI);
    pesquisar(params: PesquisaBoletosParams): Promise<PesquisaBoletosResponse>;
}
export interface PesquisaBoletosParams {
    dataInicial: string;
    dataFinal: string;
    nome: string;
    email: string;
    cpfCnpj: string;
    nossoNumero: string;
    itensPorPagina: number;
    paginaAtual: number;
    situacao: 'EXPIRADO' | 'VENCIDO' | 'EMABERTO' | 'PAGO' | 'CANCELADO';
    filtrarDataPor: 'VENCIMENTO' | 'EMISSAO' | 'SITUACAO';
    ordenarPor: 'PAGADOR' | 'NOSSONUMERO' | 'SEUNUMERO' | 'DATASITUACAO' | 'DATAVENCIMENTO' | 'VALOR' | 'STATUS';
    tipoOrdenacao: 'ASC' | 'DESC';
}
export interface PesquisaBoletosResponse {
    totalPages: number;
    totalElements: number;
    numberOfElements: number;
    last: boolean;
    first: boolean;
    size: number;
    content: PesquisaBoletosResponseContent[];
}
export interface PesquisaBoletosResponseContent {
    nomeBeneficiario: string;
    cnpjCpfBeneficiario: string;
    tipoPessoaBeneficiario: string;
    contaCorrente: string;
    nossoNumero: string;
    seuNumero: string;
    situacao: string;
    dataHoraSituacao: string;
    dataVencimento: string;
    valorNominal: string;
    dataEmissao: string;
    dataLimite: string;
    codigoEspecie: string;
    codigoBarras: string;
    linhaDigitavel: string;
    origem: string;
    pagador: PesquisaBoletosResponseContentPagador;
    mensagem: PesquisaBoletosResponseContentMensagem;
    desconto1: PesquisaBoletosResponseContentDesconto;
    desconto2: PesquisaBoletosResponseContentDesconto;
    desconto3: PesquisaBoletosResponseContentDesconto;
    multa: PesquisaBoletosResponseContentMulta;
    mora: PesquisaBoletosResponseContentMora;
}
export interface PesquisaBoletosResponseContentDesconto {
    codigo: string;
    data: string;
    taxa: number;
    valor: number;
}
export interface PesquisaBoletosResponseContentMensagem {
    linha1: string;
    linha2: string;
    linha3: string;
    linha4: string;
    linha5: string;
}
export interface PesquisaBoletosResponseContentMulta {
    codigo: string;
    data: string;
    taxa: number;
    valor: number;
}
export interface PesquisaBoletosResponseContentMora {
    codigo: string;
    data: string;
    taxa: number;
    valor: number;
}
export interface PesquisaBoletosResponseContentPagador {
    cpfCnpj: string;
    tipoPessoa: string;
    nome: string;
    endereco: string;
    numero: string;
    complemento: string;
    bairro: string;
    cidade: string;
    uf: string;
    cep: string;
    email: string;
    ddd: string;
    telefone: string;
}
