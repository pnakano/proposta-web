# Aplicação Front-End - Cadastro de Propostas

## Descrição
Aplicação front-end desenvolvida em Angular para o projeto desenvolvido durante o curso "Microsserviços com Spring e RabbitMQ" de Matheus Pieropan. 
O objetivo do projeto é utilizar uma arquitetura event-driven para permitir o cadastro de uma proposta de crédito pelo microsserviço de proposta, simular se o cliente será aprovado ou reprovado com base em um sistema de pontuação pelo microsserviço de análise de crédito e retornar o status do cliente para a aplicação de proposta. Durante essas transações, o microsserviço de notificacao será responsável por notificar o usuário via e-mail sobre o status de sua solicitação. 

<p><img src="https://img.shields.io/badge/angular-%23DD0031.svg?style=for-the-badge&logo=angular&logoColor=white" alt="shields"></p>

Por essa aplicação, é possível cadastrar novas propostas, fazendo uso da API implementada no micro-serviço [proposta-app](https://github.com/pnakano/proposta-app), e acompanhar o status após o processamento realizado no micro-serviço [analise-credito](https://github.com/pnakano/proposta-analisecredito).

### Microsserviços do Projeto

- [config-server](https://github.com/pnakano/proposta-config)
- [proposta-app](https://github.com/pnakano/proposta-app)
- [analise-credito](https://github.com/pnakano/proposta-analisecredito)
- [notificacao](https://github.com/pnakano/proposta-notificacao)

### Aplicação Front-End
- [proposta-web](https://github.com/pnakano/proposta-web)

### Conteúdo do curso

- Implementação do ecossistema Spring
- Compreensão de como funciona uma arquitetura de microsserviços
- Entender como funciona comunicação assíncrona
- Utilização de Docker para acesso ao RabbitmQ e Postgres
- Criação de filas/exchange/dlq no rabbitMQ. Visualização no painel administrativo
- Abordagem de alguns conceitos de programação em Java (Utilização de Strategy, criação de exceções, etc)
- <s>Implementação de notificação via SMS utilizando o SNS da AWS</s> (Não implementado)

#### Implementações Adicionais:

- Implementação do Config Server via repositório Git
- Serviço de notificação por e-mail utilizando o RabbitMQ e Spring Email
- Configuração do docker-compose para que a aplicação funcione totalmente em containers
- Aplicação Front-end em Angular para cadastro das propostas

## Requisitos

- [Node.js v20+](https://nodejs.org/pt/download/package-manager)
- Para salvar e carregar os registros: [proposta-app](https://github.com/pnakano/proposta-app)
- Para processar a análise e retornar a situação: [analise-credito](https://github.com/pnakano/proposta-analisecredito)

## Build

```shell
ng build
```

## Run

```shell
ng serve
```

A aplicação será executada em http://localhost:4200


## Links

* [UDEMY | Microsserviços com Spring e RabbitMQ + AWS](https://www.udemy.com/course/microsservicos-com-spring-e-rabbitmq-aws/)

## Mais Informações - Angular CLI

Para mais ajuda utilizando o Angular CLI, execute `ng help` ou verifique a página de [ajuda oficial do Angular CLI](https://angular.io/cli).
