# Documentação de Especificações de Requistos de Software (SRS)

## Sistema de Gestão de Quitanda (Quitanda MVC)

**Padrão Internacional:** ISO/IEC/IEEE 29148:2018
**Versão:** 1.0.0
**Data:** 2026-04-14
**Autor:** DiogoTB

---

## 1. Introdução

### 1.1 Propósito

Este Documento descreve os requisitos do sistema **Quitanda MVC**, com o objetivo de:

* definir funcionalidade
* padrionizar entendimentos entre os stakeholders
* servir como base para desenvolvimento e teste

---

### 1.2 Escopo

O Sistema permitirá:

* registro de entrada de produtos
* controle de estoque
* registro de vendas
* visualização dos histórico da movimentações

O Sistema será uma aplicação web frontend utilizando:

* HTML
* CSS
* JavaScript
* Arquitetura MVC
* Estrutura POO

Objetivos:

---

### 1.3 Definições e Acrônimos

Tabela de Termos e Definições

| Termos | Definições |
| - | - |
| Produto | Item Comercializado na quitanda |
| Entrada | Registro de chegada de produto |
| Saída | Registro de venda de Produto |
| Estoque | Quantidade disponível de produtos |

Lista de Acrônimos

* **SGQ:** Sistema de Gestão de Quitanda
* **RF:** Requisitos Funcionais
* **RNF:** Requisitos Não Funcionais
* **UC:**  Casos de Uso
* **CA:** Critérios de Aceitação

### 1.4 Visão Geral do Documento

Este Documento está Organizado em:

* Introdução e Visão Geral
* descrição do sistema
* requistos detalhados
* modelos UML
* regras de negócio

---

## 2. Descrição Geral do Sistema

### 2.1 Perspectiva do Sistema

O Sistema é standalone (frontend), operando em um navegador web.

```mermaid

flowchart TD
    Usuário --> Interface
    Interface --> Controller
    Controller --> Model
    Model --> Controller
    Controller --> Interface
    Interface --> Usuário

```

---

### 2.2 Funções do Sistema

O Sistema deve:

* Cadastrar produtos
* Atualizar estoque
* Registrar vendas
* Validar Operações
* Exibir dados
  
---

### 2.3 Classes de Usuários

| Usuários | Descrição |
| - | - |
| Estoquista | Gerenciar estoque |
| Caixa | Realizar Venda |
| Repositor | Registrar Entradas |

---

### 2.4 Ambiente Operacional

* Navegadores Web (Chrome, Edge, Firefox, Brave)

---

### 2.5 Restrições

* não utiliza Banco de Dados
* dados aramazenado na memória
* sem autenticação

---

### 2.6 Suposições

* Usuário possui conhecimento de Informática
* Volume de dados é pequeno

---

## 3. Requisitos do Sistema