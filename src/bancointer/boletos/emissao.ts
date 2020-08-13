import { BancoInterAPI } from '../banco-inter-api'

export class BoletosEmissao {

    constructor(
        private api: BancoInterAPI,
    ) {
        this.api = api
    }

    async emitir(data: Boleto): Promise<BoletoEmitido> {
        const response = await this.api.post(`boletos`, data)
        return response.data
    }

}

export interface Boleto {
    seuNumero: string,
    cnpjCPFBeneficiario: string,
    valorNominal: number,
    valorAbatimento: number,
    dataEmissao: string,
    dataVencimento: string,
    numDiasAgenda: 'TRINTA' | 'SESSENTA',
    dataLimite: 'TRINTA' | 'SESSENTA',
    pagador: PagadorBoleto,
    mensagem?: MensagemBoleto,
    desconto1: DescontoBoleto,
    desconto2: DescontoBoleto,
    desconto3: DescontoBoleto,
    multa: MultaBoleto,
    mora: MoraBoleto,
}

export interface PagadorBoleto {
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

export interface MensagemBoleto {
    linha1: string,
    linha2: string,
    linha3: string,
    linha4: string,
    linha5: string,
}

export interface DescontoBoleto {
    codigoDesconto: 'NAOTEMDESCONTO' | 'VALORFIXODATAINFORMADA' | 'PERCENTUALDATAINFORMADA' | 'VALORANTECIPACAODIACORRIDO' | 'VALORANTECIPACAODIAUTIL' | 'PERCENTUALVALORNOMINALDIACORRIDO' | 'PERCENTUALVALORNOMINALDIAUTIL',
    data: string,
    taxa: number,
    valor: number,
}    

export interface MultaBoleto {
    codigoMulta: 'NAOTEMMULTA' | 'VALORFIXO' | 'PERCENTUAL',
    data?: string,
    taxa: number,
    valor: number,
}    

export interface MoraBoleto {
    codigoMora: 'VALORDIA' |'TAXAMENSAL' | 'ISENTO',
    data?: string,
    taxa: number,
    valor: number,
}    

export interface BoletoEmitido {
    seuNumero: string,
    nossoNumero: string,
    codigoBarras: string,
    linhaDigitavel: string,
}
