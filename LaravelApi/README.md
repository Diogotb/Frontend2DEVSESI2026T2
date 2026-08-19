# Curso: Desenvolvimento de APIs RESTful com Laravel

## Objetivo:
Este curso tem como objetivo ensinar os alunos a instalar, configurar e desenvolver APIs robustas utilizando o framework Laravel. Você aprenderá a criar rotas, manipular o banco de dados via Eloquent ORM, construir Controladores de API e proteger seus endpoints com autenticação via Tokens (Laravel Sanctum).

---

## Módulo 1: Fundamentos e Preparação do Ambiente

### O que é o Laravel?
Laravel é um framework PHP projetado para facilitar o processo de desenvolvimento, oferecendo uma sintaxe elegante e ferramentas robustas. Em uma arquitetura monolítica, ele utiliza o padrão MVC (Model-View-Controller). Porém, no contexto de **APIs**, a camada "View" é substituída por **respostas JSON**, que serão consumidas por aplicações Front-end (React, Vue, Angular) ou Mobile (Flutter, React Native).

### Preparação do Ambiente de Desenvolvimento
Para desenvolver com Laravel, você precisa configurar o ambiente com os seguintes requisitos:
1. **PHP 8.x**
2. **Composer** (Gerenciador de dependências do PHP)
3. **Banco de Dados** (PostgreSQL ou MySQL)
4. **Postman ou Insomnia** (Ferramentas para testar as requisições da API, já que não usaremos o navegador para ver telas).

### Introdução ao Laravel

**O que é o Laravel?**

- Principais Características:

    - MVC: Arquitetura que separa a lógica de negócios, a apresentação e os dados da aplicação;
    - Eloquent ORM: Um mapeador objeto-relacional(ORM) que facilita a interação com banco de dados;
    - Artisan CLI: Uma interface de linha de comando que automatiza tarefas comuns de desenvolvimento;
    - Blade Template Engine: Um mecanismo de template simples para criação de views (FrontEnd);
    - Middleware: Interface que permite a filtragem de requisição HTTP.

- Vantagens do Uso do Laravel

    - Sintaxe Elegante: sintaxe limpa e expressiva, que facilita a escrita e manutenção de código
    - Ecossitema Rico: Pacotes, Bibliotecas que facilitam o desenvolvimento
    - Segurança: Proteção contra SQL Injection, XSS, CSRF
    - Flexibilidade e Performace: 
    - Atualizações Regulares


### Instalação via Composer e Primeira Aplicação

```bash

composer create-project --prefer-dist laravel/laravel meu-primeiro-projeto-laravel

cd meu-primeiro-projeto-laravel

```

### Configuração Inicial com PostgreSQL
O arquivo `.env` na raiz do projeto é usado para configurar variáveis de ambiente. Ajuste as configurações de banco de dados:

```env

DB_CONNECTION=pgsql
DB_HOST=127.0.0.1
DB_PORT=5432
DB_DATABASE=nome_db
DB_USERNAME=postgres
DB_PASSWORD=postgres

```

# Módulo 2: Roteamento para APIs

O roteamento no Laravel define como o aplicativo deve responder a várias requisições HTTP. Para APIs, utilizaremos **exclusivamente** o arquivo `routes/api.php`.

*(Nota: Rotas definidas neste arquivo ganham automaticamente o prefixo `/api` na URL).*

### Métodos HTTP Restful
O Laravel suporta todos os métodos HTTP usados em APIs:
* **GET**: Recuperar dados (ex: listar produtos).
* **POST**: Criar novos dados.
* **PUT/PATCH**: Atualizar dados existentes.
* **DELETE**: Remover dados.

# Módulo 3: Modelos e Eloquent ORM

### Criação de Modelos

Os modelos do Laravel representam as tabelas no bando de dados e fornecem uma interface para interagir com os dados. Através dos modelos, você pode consultar e manipular dados de forma eficiente e intuitiva

- Criando Modelos com o Artisan CLI

```bash 

php artisan make:model "NomeDoModelo"

```

Esse Comando Criará um arquivo em app/Models/NomeDoModelo.php

Editar os Arquivos do Models

Adicionar Atributos e Métodos

- Inicar a Migração do Modelo para o Banco de Dados

```bash

php artisan migrate

```

O Comando migrate aplica todas as migraçoes pendentes ao banco de dados