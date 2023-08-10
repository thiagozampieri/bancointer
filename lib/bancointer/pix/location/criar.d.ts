import { BancoInterAPI } from '../../banco-inter-api';
export declare class CriarLocation {
    private api;
    constructor(api: BancoInterAPI);
    criar(type: 'cob' | 'cobv'): Promise<CriarLocationResponse>;
}
export interface CriarLocationParams {
    tipoCob: 'cob' | 'cobv';
}
export interface CriarLocationResponse {
    id: number;
    location: string;
    tipoCob: string;
    criacao: Date;
}
