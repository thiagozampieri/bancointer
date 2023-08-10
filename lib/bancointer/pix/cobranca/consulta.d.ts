import { BancoInterAPI } from '../../banco-inter-api';
export declare class ConsultaPix {
    private api;
    constructor(api: BancoInterAPI);
    consultar(txid: string): Promise<ConsultaPixResponse>;
}
export interface ConsultaPixResponse {
    location: string;
    status: 'ATIVA' | 'CONCLUIDA' | 'REMOVIDA_PELO_USUARIO_RECEBEDOR' | 'REMOVIDA_PELO_PSP';
    txid: string;
    revisao: number;
    pixCopiaECola: string;
    chave: string;
    solicitacaoPagador: string;
    devedor: ConsultaPixDevedorPessoaFisica | ConsultaPixDevedorPessoaJuridica;
    recebedor: ConsultaPixDevedorPessoaFisica | ConsultaPixDevedorPessoaJuridica;
    loc: ConsultaPixLoc;
    valor: ConsultaPixValor;
    calendario: ConsultaPixCalendario;
    infoAdicionais: ConsultaPixInfoAdicionais[];
    pix: ConsultaPix;
}
export interface ConsultaPixDevedorPessoaJuridica {
    nome: string;
    cnpj: string;
}
export interface ConsultaPixDevedorPessoaFisica {
    nome: string;
    cpf: string;
}
export interface ConsultaPixLoc {
    id: number;
    location: string;
    tipoCob: 'cob' | 'cobv';
    criacao: string;
}
export interface ConsultaPixValor {
    original: string;
    multa: ConsultarPixResponseValorMulta;
    juros: ConsultarPixResponseValorJuros;
    abatimento: ConsultarPixResponseValorAbatimento;
    desconto: ConsultarPixResponseValorDescontoPerc | ConsultarPixResponseValorDescontoDataFixa;
}
export interface ConsultarPixResponseValorMulta {
    modalidade: 1 | 2;
    valorPerc: string;
}
export interface ConsultarPixResponseValorJuros {
    modalidade: number;
    valorPerc: string;
}
export interface ConsultarPixResponseValorAbatimento {
    modalidade: 1 | 2;
    valorPerc: string;
}
export interface ConsultarPixResponseValorDescontoPerc {
    modalidade: string;
    valorPerc: string;
}
export interface ConsultarPixResponseValorDescontoDataFixa {
    descontoDataFixa: ConsultarPixResponseValorDescontoDataFixaArray[];
    modalidade: string;
}
export interface ConsultarPixResponseValorDescontoDataFixaArray {
    data: string;
    valorPerc: string;
}
export interface ConsultaPixCalendario {
    criacao: Date;
    dataDeVencimento: Date;
    validadeAposVencimento: number;
}
export interface ConsultaPixInfoAdicionais {
    nome: string;
    valor: string;
}
export interface ConsultaPix {
    endToEndId: string;
    txid: string;
    valor: string;
    chave: string;
    horario: string;
    infoPagador: string;
    devolucoes: ConsultaPixDevolucoes[];
}
export interface ConsultaPixDevolucoes {
    id: string;
    rtrId: string;
    valor: string;
    status: 'EM_PROCESSAMENTO' | 'DEVOLVIDO' | 'NAO_REALIZADO';
    motivo: string;
    horario: ConsultaPixDevolucoesHorario;
}
export interface ConsultaPixDevolucoesHorario {
    solicitacao: string;
    liquidacao: string;
}
