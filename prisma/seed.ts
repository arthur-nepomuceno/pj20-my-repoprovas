import prisma from "../src/databases/db"

async function main() {
    await prisma.$executeRaw`TRUNCATE TABLE terms RESTART IDENTITY CASCADE`
    await prisma.$executeRaw`TRUNCATE TABLE categories RESTART IDENTITY CASCADE`
    await prisma.$executeRaw`TRUNCATE TABLE teachers RESTART IDENTITY CASCADE`
    await prisma.$executeRaw`TRUNCATE TABLE disciplines RESTART IDENTITY CASCADE`
    await prisma.$executeRaw`TRUNCATE TABLE "teachersDisciplines" RESTART IDENTITY CASCADE`

    await prisma.terms.createMany({
        data: [
            {number: 1},
            {number: 2},
            {number: 3},
            {number: 4},
            {number: 5},
            {number: 6}
        ], skipDuplicates: true
    })

    await prisma.categories.createMany({
        data: [
            {name: 'Projeto'},
            {name: 'Prática'},
            {name: 'Recuperação'}
        ], skipDuplicates: true
    })

    await prisma.teachers.createMany({
        data: [
            {name: 'Diego Pinho'},
            {name: 'Bruna Hamori'}
        ], skipDuplicates: true
    })

    await prisma.disciplines.createMany({
        data: [
            {name: 'HTML e CSS', termId: 1},
            {name: 'JavaScript', termId: 2},
            {name: 'React', termId: 3},
            {name: 'Humildade', termId: 1},
            {name: 'Planejamento', termId: 2},
            {name: 'Autoconfiança', termId: 3}
        ], skipDuplicates: true
    })

    await prisma.teachersDisciplines.createMany({
        data: [
            {teacherId: 1, disciplineId: 1},
            {teacherId: 1, disciplineId: 2},
            {teacherId: 1, disciplineId: 3},
            {teacherId: 2, disciplineId: 4},
            {teacherId: 2, disciplineId: 5},
            {teacherId: 2, disciplineId: 6}
        ], skipDuplicates: true
    })
}

main()
    .catch(e => {
        console.log(e)
        process.exit(1)
    })
    .finally(() => {
        prisma.$disconnect()
    })