interface NewUser {
    email: string,
    password: string,
    confirm: string
}

interface User {
    id: number,
    email: string,
    password: string
}

export {
    NewUser,
    User
}