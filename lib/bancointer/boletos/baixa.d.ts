import { BancoInterAPI } from '../banco-inter-api';
export declare class BaixaBoleto {
    private api;
    constructor(api: BancoInterAPI);
    baixar(data: BaixaBoletoParams): Promise<any>;
}
export interface BaixaBoletoParams {
    nossoNumero: string;
    codigoBaixa: 'ACERTOS' | 'PROTESTADO' | 'DEVOLUCAO' | 'PROTESTOAPOSBAIXA' | 'PAGODIRETOAOCLIENTE' | 'SUBISTITUICAO' | 'FALTADESOLUCAO' | 'APEDIDODOCLIENTE';
}
