import { BancoInterAPI } from '../banco-inter-api'

export class EmissaoBoletos {

    constructor(
        private api: BancoInterAPI,
    ) {
        this.api = api
    }

    async emitir(data: EmissaoBoletosParams): Promise<EmissaoBoletosResponse> {
        const response = await this.api.post(`cobranca/v2/boletos`, data)
        return response.data
    }

}

export interface EmissaoBoletosParams {
    seuNumero: string,
    cnpjCPFBeneficiario: string,
    valorNominal: number,
    valorAbatimento: number,
    dataEmissao: string,
    dataVencimento: string,
    numDiasAgenda: 'TRINTA' | 'SESSENTA',
    dataLimite: 'TRINTA' | 'SESSENTA',
    pagador: EmissaoBoletosParamsPagador,
    mensagem?: EmissaoBoletosParamsMensagem,
    desconto1: EmissaoBoletosParamsDesconto,
    desconto2: EmissaoBoletosParamsDesconto,
    desconto3: EmissaoBoletosParamsDesconto,
    multa: EmissaoBoletosParamsMulta,
    mora: EmissaoBoletosParamsMora,
}

export interface EmissaoBoletosParamsPagador {
    tipoPessoa: 'FISICA' | 'JURIDICA',
    nome: string,
    endereco: string,
    numero: string,
    complemento: string,
    bairro: string,
    cidade: string,
    uf: string,
    cep: string,
    cnpjCpf: string,
    email: string,
    ddd: string,
    telefone: string,
}

export interface EmissaoBoletosParamsMensagem {
    linha1: string,
    linha2: string,
    linha3: string,
    linha4: string,
    linha5: string,
}

export interface EmissaoBoletosParamsDesconto {
    codigoDesconto: 'NAOTEMDESCONTO' | 'VALORFIXODATAINFORMADA' | 'PERCENTUALDATAINFORMADA' | 'VALORANTECIPACAODIACORRIDO' | 'VALORANTECIPACAODIAUTIL' | 'PERCENTUALVALORNOMINALDIACORRIDO' | 'PERCENTUALVALORNOMINALDIAUTIL',
    data: string,
    taxa: number,
    valor: number,
}    

export interface EmissaoBoletosParamsMulta {
    codigoMulta: 'NAOTEMMULTA' | 'VALORFIXO' | 'PERCENTUAL',
    data?: string,
    taxa: number,
    valor: number,
}    

export interface EmissaoBoletosParamsMora {
    codigoMora: 'VALORDIA' |'TAXAMENSAL' | 'ISENTO',
    data?: string,
    taxa: number,
    valor: number,
}    

export interface EmissaoBoletosResponse {
    seuNumero: string,
    nossoNumero: string,
    codigoBarras: string,
    linhaDigitavel: string,
}
