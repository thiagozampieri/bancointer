import { BancoInterAPI } from '../../banco-inter-api';
export declare class CriarBoletoWebhook {
    private api;
    constructor(api: BancoInterAPI);
    criar(webhookUrl: string): Promise<any>;
}
