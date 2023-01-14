type NewUser = {
    email: string,
    password: string,
    confirm: string
}

type User = {
    id: number,
    email: string,
    password: string
}

type LoginUser = {
    email: string,
    password: string
}

export {
    NewUser,
    User,
    LoginUser
}