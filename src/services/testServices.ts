import * as testRepository from "../repositories/testRepository";
import { NewTest } from "../types/testTypes";

async function checkCategoryId(categoryId: number) {
    const response = await testRepository.findCategoryById(categoryId)

    if (!response) throw {
        type: 'invalid_category',
        message: '_The category you are informing does not exist._'
    }

    return;
}

async function checkTeacherDisciplineId(teacherDisciplineId: number) {
    const response = await testRepository.findTeacherDisciplineById(teacherDisciplineId)

    if (!response) throw {
        type: 'invalid_teacher_discipline_combination',
        message: '_The teacher/discipline combination you are informing does not exist._'
    }

    return;
}

async function addTest(test: NewTest) {
    return testRepository.insertTest(test);
}

async function getTestsGroupedByDiscipline() {
    const response = await testRepository.findTests()

    let aux = [];
    for (let e of response) {
        const element = {
            term: e.teachersDisciplines.disciplines.terms.number,
            discipline: e.teachersDisciplines.disciplines.name,
            category: e.categories.name,
            testName: e.name,
            teacher: e.teachersDisciplines.teachers.name,
            pdfUrl: e.pdfUrl
        }
        aux.push(element)
    }

    let htmlCategories = []
    for (let e of aux) {
        if(e.discipline === 'HTML e CSS'){
            htmlCategories.push({
                category: e.category,
                testName: e.testName,
                teacher: e.teacher,
                pdfUrl: e.pdfUrl
            })
        }
    }
    const htmlTests = {
        discipline: 'HTML e CSS',
        categories: htmlCategories
    }

    let humildadeCategories = []
    for (let e of aux) {
        if(e.discipline === 'Humildade'){
            humildadeCategories.push({
                category: e.category,
                testName: e.testName,
                teacher: e.teacher,
                pdfUrl: e.pdfUrl
            })
        }
    }
    const humildadeTests = {
        discipline: 'Humildade',
        categories: humildadeCategories
    }

    let javaScriptCategories = []
    for (let e of aux) {
        if(e.discipline === 'JavaScript'){
            javaScriptCategories.push({
                category: e.category,
                testName: e.testName,
                teacher: e.teacher,
                pdfUrl: e.pdfUrl
            })
        }
    }
    const javaScriptTests = {
        discipline: 'JavaScript',
        categories: javaScriptCategories
    }

    let planejamentoCategories = []
    for (let e of aux) {
        if(e.discipline === 'Planejamento'){
            planejamentoCategories.push({
                category: e.category,
                testName: e.testName,
                teacher: e.teacher,
                pdfUrl: e.pdfUrl
            })
        }
    }
    const planejamentoTests = {
        discipline: 'Planejamento',
        categories: planejamentoCategories
    }

    let reactCategories = []
    for (let e of aux) {
        if(e.discipline === 'React'){
            reactCategories.push({
                category: e.category,
                testName: e.testName,
                teacher: e.teacher,
                pdfUrl: e.pdfUrl
            })
        }
    }
    const reactTests = {
        discipline: 'React',
        categories: reactCategories
    }

    let autoconfiancaCategories = []
    for (let e of aux) {
        if(e.discipline === 'Autoconfiança'){
            autoconfiancaCategories.push({
                category: e.category,
                testName: e.testName,
                teacher: e.teacher,
                pdfUrl: e.pdfUrl
            })
        }
    }
    const autoconfiancaTests = {
        discipline: 'Autoconfiança',
        categories: autoconfiancaCategories
    }

    const tests = [
        {
            term: '1',
            tests: [
                htmlTests,
                humildadeTests,
            ]
        },
        {
            term: '2',
            tests: [
                javaScriptTests,
                planejamentoTests
            ]
        },
        {
            term: '3',
            tests: [
                reactTests,
                autoconfiancaTests
            ]
        }
    ]

    return tests;
}

async function getTestsGroupedByTeacher() {
    const response = await testRepository.findTests()

    let aux = [];
    for (let e of response) {
        const element = {
            teacher: e.teachersDisciplines.teachers.name,
            term: e.teachersDisciplines.disciplines.terms.number,
            discipline: e.teachersDisciplines.disciplines.name,
            category: e.categories.name,
            testName: e.name,
            pdfUrl: e.pdfUrl
        }
        aux.push(element)
    }

    let brunaHamoriTests = [];
    for (let e of aux){};

    let diegoPinhoTests = [];
    for(let e of aux){};

    return aux;
}

export {
    checkCategoryId,
    checkTeacherDisciplineId,
    addTest,
    getTestsGroupedByDiscipline,
    getTestsGroupedByTeacher
}