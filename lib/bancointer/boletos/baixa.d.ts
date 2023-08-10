import { BancoInterAPI } from '../banco-inter-api';
export declare class BaixaBoleto {
    private api;
    constructor(api: BancoInterAPI);
    baixar(data: BaixaBoletoParams): Promise<any>;
}
export interface BaixaBoletoParams {
    nossoNumero: string;
    motivoCancelamento: 'ACERTOS' | 'APEDIDODOCLIENTE' | 'PAGODIRETOAOCLIENTE' | 'SUBSTITUICAO';
}
