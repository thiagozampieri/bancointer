import { BancoInterAPI } from '../banco-inter-api';
export declare class PdfBoletos {
    private api;
    constructor(api: BancoInterAPI);
    download(nossoNumero: string, path: string): Promise<any>;
}
