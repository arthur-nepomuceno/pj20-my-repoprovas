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

The goal of this project is to develop the skill of creating integration tests. To it's development, there were needed skills on creating the database using Prisma ORM; a tool for generating and maintaining the databse directly through the code editor (VSCode). To the tests there were used the libs JEST and Supertest. And still, seeking for the highest development of this professional, it was applied, as often as the current knowledge allowed, the TDD - Test Driven Development.

## Summary
   - [Brief in](#brief-in)
   - [Introduction](#introduction)
   - [Concepts and Technologies](#concepts-and-technologies)
   - [Running the app](#running-the-app)
   - [End-points](#end-points)

***


## Brief in
   This project is an API of tests and exams. With this API, students of any institutions may share among themselves tests from different semesters, teachers and disciplines.

***

## Introduction
   This project was developed using TypeScript. Tests were developed with Jest and Supertest. Database was developed with Prisma. It's entities are:
   
   - _users_: table to register the users on the system. Each person must register first, in order to gain access to the project's features.
   - _tests_: table that keeps the information os the tests and exams registered by the users.
   - _teachers_: table to register the teachers' informations.
   - _disciplines_: table to register the disciplines to wich the tests and exams belong.
   - _categories_: table to register the categories to wich the tests may belong.
   - _teachersDisciplines_: table to register wich teacher teaches wich discipline.
   
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
    - Route to create a new user.
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
    - Route for the user to acces the system.
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
    - Route for the user to add a new test/exam to the database.
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
    - Route for the users to see the tests/exams grouped by period and discipline.
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
    - Route for the user to see the tests/exams grouped by teacher.
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
###### [back to summary](#summary)
