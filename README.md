##### **Leia em português:** 
[![pt-br](https://img.shields.io/badge/lang-pt--br-yellow.svg)](https://github.com/arthur-nepomuceno/pj20-my-repoprovas/blob/master/README-pt-br.md)

<p align="center">
   <img src="https://notion-emojis.s3-us-west-2.amazonaws.com/prod/svg-twitter/1f4dd.svg" alt="My Repoprovas" style="width: 89px; height: 89px"/>
</p>

## <p align = "center">  - My Repoprovas - </p>

<p align = "center">
   <img src="https://img.shields.io/badge/author-Arthur Nepomuceno-093D04?style=flat-square" />
</p>

## Start Here

Este projeto tem por objetivo desenvolver a habilidade de criação de testes de integração. Para seu desenvolvimento, foram necessárias habilidades na criação de banco de dados usando Prisma ORM; uma ferramenta para geração e manutenção de banco de dados diretamente pelo editor de código (VSCode). Para os testes foram utilizadas as bibliotecas JEST e Supertest. E ainda, visando o desenvolvimento mais avançado deste profissional, aplicou-se, sempre que o nível de conhecimento atual permitiu, o Desenvolvimento Direcionado à Testes (no original do inglês, TDD - Test Driven Development).

## Summary
   - [Brief in](#brief-in)
   - [Introduction](#introduction)
   - [Concepts and Technologies](#concepts-and-technologies)
   - [Running the app](#running-the-app)
   - [End-points](#end-points)

***


## Brief in
   Este projeto é uma API de provas. Com eles, alunos de uma instituição podem compartilhar entre si provas de diferentes períodos, professores e disciplinas.

***

## Introduction
   Este é um projeto desenvolvido em TypeScript. Os testes foram desenvolvidos com Jest e Supertest. O banco de dados foi desenvolvido com Prisma. Suas entidades são:
   - _users_: tabela de registro para os usuários do sistema. Cada pessoa deve se registrar antes de ter aceso as demais funcionalidades.
   - _tests_: tabela que guarda as informações dos testes registrados pelos usuários.
   - _teachers_: tabela para registro dos professores.
   - _disciplines_: tabela para registros das disciplinas as quais os tests pertences.
   - _categories_: tabela de registros das categorias as quais os testes podem pertencer.
   - _teachersDisciplines_: tabela que registra qual professor(a) ministra qual disciplina.
   
***

## Concepts and Technologies 
    - TDD
    - jest
    - supertest
    - typeScript
    - nodeJs
    - nodemon
    - express
    - express-async-errors
    - cors
    - dotenv
    - postgreSQL
    - faker
    - jsonwebtoken

***

## Running-the-app
This project was built with Node Package Manager, so be sure you have the last version of [Node.js](https://nodejs.org/en/download/) and [npm](https://www.npmjs.com/) running locally.

First, clone this repository to your machine:

```
git clone https://github.com/arthur-nepomuceno/pj20-my-repoprovas.git
```

After, inside the folder, run the following command to install the dependencies.

```
npm install
```

To finish the process, you simply start the server.
```
npm run dev
```
###### [back to summary](#summary)
***

## End-points

```yml
POST /signup
    - Rota para criar um novo usuário.
    - headers: {}
    - params: {}
    - query: {}
    - body: {
        "email": "new_user@email.com",
        "password": "my-secret-password",
        "confirm": "my-secret-password"    
    }
    - response: {
        "id": "1",
        "email": "new_user@email.com"
    }
```

```yml
POST /signin
    - Rota para o usuário acessar sua conta.
    - headers: {}
    - params: {}
    - query: {}
    - body: {
        "email": "new_user@email.com",
        "password": "my-secret-password"
    }
    - response: {
        token: "token-created-with-jsonwebtoken"
    }
```

```yml
POST /test
    - Rota para o usuário adicionar uma nova prova ao sistema.
    - headers: {Authorization: `Bearer token-created-with-jsonwebtoken`}
    - params: {}
    - query: {}
    - body: {
        "name": "whatever_test_name",
        "pdfUrl": "http://whatever_pdf_link.com",
        "categoryId": 1,
        "teacherDisciplineId": 2 
    }
    - response: 'New test added successfully.'
```

```yml
GET /tests/disciplines
    - Rota para o usuário visualizar as provas separadas por disciplina.
    - headers: {Authorization: `Bearer token-created-with-jsonwebtoken`}
    - params: {}
    - query: {}
    - body: {}
    - response: [
    {
        "term": 2,
        "tests": [
            {
                "discipline": "JavaScript",
                "categories": [
                    {
                        "category": "Projeto",
                        "testName": "test_1"
                        "teacher": "Diego Pinho",
                        "pdfUrl": "http://pdf_link.com"
                    },
                    {
                        "category": "Prática",
                        "testName": "test_2"
                        "teacher": "Diego Pinho",
                        "pdfUrl": "http://pdf_link.com"
                    },
                    {
                        "category": "Recuperação,
                        "testName": "test_3"
                        "teacher": "Diego Pinho",
                        "pdfUrl": "http://pdf_link.com"
                    }
                ]
            },
            {
                "discipline": "Planejamento",
                "categories": [
                    {
                        "category": "Projeto",
                        "testName": "test_4"
                        "teacher": "Bruna Hamori",
                        "pdfUrl": "http://pdf_link.com"
                    },
                    {
                        "category": "Prática",
                        "testName": "test_5"
                        "teacher": "Bruna Hamori",
                        "pdfUrl": "http://pdf_link.com"
                    },
                    {
                        "category": "Recuperação",
                        "testName": "test_6"
                        "teacher": "Bruna Hamori",
                        "pdfUrl": "http://pdf_link.com"
                    }
                ]
            }
        ]
    },
    {
        "term": 3,
        "tests": [
            {
                "discipline": "React",
                "categories": [
                    {
                        "category": "Projeto",
                        "testName": "test_7"
                        "teacher": "Diego Pinho",
                        "pdfUrl": "http://pdf_link.com"
                    },
                    {
                        "category": "Prática",
                        "testName": "test_8"
                        "teacher": "Diego Pinho",
                        "pdfUrl": "http://pdf_link.com"
                    },
                    {
                        "category": "Recuperação,
                        "testName": "test_9"
                        "teacher": "Diego Pinho",
                        "pdfUrl": "http://pdf_link.com"
                    }
                ]
            },
            {
                "discipline": "Autoconfiança",
                "categories": [
                    {
                        "category": "Projeto",
                        "testName": "test_10"
                        "teacher": "Bruna Hamori",
                        "pdfUrl": "http://pdf_link.com"
                    },
                    {
                        "category": "Prática",
                        "testName": "test_11"
                        "teacher": "Bruna Hamori",
                        "pdfUrl": "http://pdf_link.com"
                    },
                    {
                        "category": "Recuperação",
                        "testName": "test_12"
                        "teacher": "Bruna Hamori",
                        "pdfUrl": "http://pdf_link.com"
                    }
                ]
            }
        ]
    }
]
```

```yml
GET /tests/teachers
    - Rota para o usuário visualizar as provas separadas por professor.
    - headers: {Authorization: `Bearer token-created-with-jsonwebtoken`}
    - params: {}
    - query: {}
    - body: {}
    - response: [
    {
        "teacher": Bruna Hamori,
        "tests": [
            {
                "term": "2",
                "disciplines": [
                    {
                        "discipline": "JavaScript",
                        "category": "Projeto",
                        "testName": "test_1",
                        "pdfUrl": "http://pdf_link.com"
                    },
                    {
                        "discipline": "JavaScript",
                        "category": "Prática",
                        "testName": "test_2",
                        "pdfUrl": "http://pdf_link.com"
                    },
                    {
                        "discipline": "JavaScript",
                        "category": "Recuperação,
                        "testName": "test_3",
                        "pdfUrl": "http://pdf_link.com"
                    }
                ]
            },
            {
                "term": 3,
                "disciplines": [
                    {
                        "discipline": "React",
                        "category": "Projeto",
                        "testName": "test_4",
                        "pdfUrl": "http://pdf_link.com"
                    },
                    {
                        "discipline": "React",
                        "category": "Prática",
                        "testName": "test_5",
                        "pdfUrl": "http://pdf_link.com"
                    },
                    {
                        "discipline": "React",
                        "category": "Recuperação",
                        "testName": "test_6",
                        "pdfUrl": "http://pdf_link.com"
                    }
                ]
            }
        ]
    },
    {
        "teacher": "Diego Pinho",
        "tests": [
            {
                "term": 1,
                "disciplines": [
                    {
                        "discipline": "Humildade",
                        "category": "Projeto",
                        "testName": "test_7",
                        "pdfUrl": "http://pdf_link.com"
                    },
                    {
                        "discipline": "Humildade",
                        "category": "Prática",
                        "testName": "test_8",
                        "pdfUrl": "http://pdf_link.com"
                    },
                    {
                        "discipline": "Humildade",
                        "category": "Recuperação,
                        "testName": "test_9",
                        "pdfUrl": "http://pdf_link.com"
                    }
                ]
            },
            {
                "term": 3,
                "disciplines": [
                    {
                        "discipline": "Autoconfiança",
                        "category": "Projeto",
                        "testName": "test_10",
                        "pdfUrl": "http://pdf_link.com"
                    },
                    {
                        "discipline": "Autoconfiança",
                        "category": "Prática",
                        "testName": "test_11",
                        "pdfUrl": "http://pdf_link.com"
                    },
                    {
                        "discipline": "Autoconfiança",
                        "category": "Recuperação",
                        "testName": "test_12",
                        "pdfUrl": "http://pdf_link.com"
                    }
                ]
            }
        ]
    }
]
```
###### [voltar para o sumário](#sumário)
