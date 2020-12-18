# BancoInter

Biblioteca para acessar a API do Banco Inter

[Documentação da API](https://developers.bancointer.com.br/)

## Pré-requisitos

* Habilitar os boletos de cobrança na conta do Banco Inter
* Criar aplicação dentro do Banco Inter
    * Criar certificado para autenticar aplicação
    * Baixar .crt da aplicação

## Instalação

```bash
$ npm install @azleads/bancointer
```

## Uso

### Configuração da API

```js
import fs from 'fs'
import { BancoInterAPI } from '@azleads/bancointer'

const cert = await fs.readFileSync('bancointer.crt') // Caminho do certificado (.crt)
const key = await fs.readFileSync('bancointer.key') // Caminho da chave privada (.key)
const pass = 'senha_do_certificado' // Senha do certificado
const conta = '01234567' // Número da conta
const api = new BancoInterAPI(conta, cert, key, pass)
```

### Consulta de boleto

```js
import { ConsultaBoletos } from '@azleads/bancointer'

const consultaAPI = new ConsultaBoletos(api)
consultaAPI.consultar('00590733210').then((response) => {
    // Informações do boleto
})
```

### Download de PDF de boleto

```js
import { PdfBoletos } from '@azleads/bancointer'

const pdfAPI = new PdfBoletos(api)
pdfAPI.download('00590733210', 'boleto.pdf').then((response) => {
    // Boleto salvo
})
```

### Emitir boletos

```js
import { EmissaoBoletos } from '@azleads/bancointer'

const emissaoAPI = new EmissaoBoletos(api)
emissaoAPI.emitir({
    seuNumero: '00000',
    cnpjCPFBeneficiario: '<cnpj>',
    valorNominal: 1.00,
    valorAbatimento: 0,
    dataEmissao: '2020-08-12',
    dataVencimento: '2020-08-13',
    numDiasAgenda: 'TRINTA',
    dataLimite: 'TRINTA',
    pagador: {
        tipoPessoa: 'JURIDICA',
        nome: '',
        endereco: '',
        numero: '',
        complemento: '',
        bairro: '',
        cidade: '',
        uf: '',
        cep: '',
        cnpjCpf: '<cnpj>',
        email: 'email',
        ddd: '',
        telefone: '',
    },
    desconto1: { 
        codigoDesconto: 'NAOTEMDESCONTO',
        data: '',
        taxa: 0,
        valor: 0,
    },
    desconto2: { 
        codigoDesconto: 'NAOTEMDESCONTO',
        data: '',
        taxa: 0,
        valor: 0,
    },
    desconto3: { 
        codigoDesconto: 'NAOTEMDESCONTO',
        data: '',
        taxa: 0,
        valor: 0,
    },
    multa: { 
        codigoMulta: 'NAOTEMMULTA',
        taxa: 0,
        valor: 0,
    },
    mora: { 
        codigoMora: 'ISENTO',
        taxa: 0,
        valor: 0,
    },
}).then((response) => {
    // Informações de boleto gerado
})
```
