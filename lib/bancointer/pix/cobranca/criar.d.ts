import { BancoInterAPI } from '../../banco-inter-api';
export declare class CriarPix {
    private api;
    constructor(api: BancoInterAPI);
    criar(txid: string, data: CriarPixParams): Promise<CriarPixResponse>;
}
export interface CriarPixParams {
    chave: string;
    solicitacaoPagador: string;
    calendario: CriarPixCalendario;
    devedor: CriarPixPessoa;
    valor: CriarPixValor;
    infoAdicionais: CriarPixParamsInfoAdicionais[];
    loc: CriarPixParamsLoc;
}
export interface CriarPixResponse {
    status: 'ATIVA' | 'CONCLUIDA' | 'REMOVIDA_PELO_USUARIO_RECEBEDOR' | 'REMOVIDA_PELO_PSP';
    location: string;
    txid: string;
    revisao: number;
    pixCopiaECola: string;
    chave: string;
    solicitacaoPagador: string;
    devedor: CriarPixPessoa;
    recebedor: CriarPixPessoa;
    loc: CriarPixResponseLoc;
    valor: CriarPixValor;
    calendario: CriarPixCalendario;
    infoAdicionais: CriarPixParamsInfoAdicionais[];
}
export interface CriarPixCalendario {
    dataVencimento: string;
    validadeAposVencimento: number;
}
export interface CriarPixPessoa {
    nome: string;
    cpf: string;
    cnpj: string;
    logradouro: string;
    uf: string;
    cep: string;
    cidade: string;
    bairro: string;
    complemento: string;
    numero: string;
}
export interface CriarPixValor {
    original: string;
    multa: CriarPixValorMulta;
    juros: CriarPixValorJuros;
    abatimento: CriarPixValorAbatimento;
    desconto: CriarPixValorDescontoPerc | CriarPixValorDescontoDataFixa;
}
export interface CriarPixValorMulta {
    modalidade: 1 | 2;
    valorPerc: string;
}
export interface CriarPixValorJuros {
    modalidade: number;
    valorPerc: string;
}
export interface CriarPixValorAbatimento {
    modalidade: 1 | 2;
    valorPerc: string;
}
export interface CriarPixValorDescontoPerc {
    modalidade: string;
    valorPerc: string;
}
export interface CriarPixValorDescontoDataFixa {
    descontoDataFixa: CriarPixValorDescontoDataFixaArray[];
    modalidade: string;
}
export interface CriarPixValorDescontoDataFixaArray {
    data: string;
    valorPerc: string;
}
export interface CriarPixParamsInfoAdicionais {
    nome: string;
    valor: string;
}
export interface CriarPixParamsLoc {
    id: number;
    tipoCob: 'cob' | 'cobv';
}
export interface CriarPixResponseLoc {
    id: number;
    location: string;
    tipoCob: 'cob' | 'cobv';
    criacao: Date;
}
