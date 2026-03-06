interface IEmitirCobrancaParamsBeneficiario {
  nome: string,
  cpfCnpj: string,
  tipoPessoa: 'FISICA' | 'JURIDICA',
  cep: string,
  endereco: string,
  bairro: string,
  cidade: string,
  uf: string,
}
interface IEmitirCobrancaParamsPagador {
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

interface IEmitirCobrancaParamsMensagem {
  linha1: string,
  linha2: string,
  linha3: string,
  linha4: string,
  linha5: string,
}

interface IEmitirCobrancaParamsDesconto {
  codigo: 'VALORFIXODATAINFORMADA' | 'PERCENTUALDATAINFORMADA',
  valor: number,
  quantidadeDias: number,
}

interface IEmitirCobrancaParamsMulta {
  codigoMulta: 'VALORFIXO' | 'PERCENTUAL',
  taxa: number,
}

interface IEmitirCobrancaParamsMora {
  codigoMora: 'VALORDIA' | 'TAXAMENSAL',
  taxa: number,
}

interface IEmitirCobrancaResponse {
  codigoSolicitacao: string
}

const formasRecebimento = ['BOLETO', 'PIX'] as const;
type IEmitirCobrancaFormasRecebimento = typeof formasRecebimento[number];


interface IEmitirCobrancaParams {
  seuNumero: string,
  valorNominal: number,
  dataVencimento: string,
  numDiasAgenda: number,
  beneficiarioFinal: IEmitirCobrancaParamsBeneficiario,
  pagador: IEmitirCobrancaParamsPagador,
  mensagem?: IEmitirCobrancaParamsMensagem,
  desconto?: IEmitirCobrancaParamsDesconto,
  multa?: IEmitirCobrancaParamsMulta,
  mora?: IEmitirCobrancaParamsMora,
  formasRecebimento?: IEmitirCobrancaFormasRecebimento[]
}

export {
  IEmitirCobrancaParams,
  IEmitirCobrancaResponse
}