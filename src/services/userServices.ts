import bcrypt from "bcrypt";

async function confirmPassword(password: string, confirmPassword: string) {
    
    const check = password === confirmPassword;

    if(!check) throw {
        type: 'password_and_confirm_password_do_not_match',
        message: '_Please confirm your password correctly_'
    }

    return;
}

async function hidePassword(password: string){
    const secret = bcrypt.hashSync(password, 13)
    return secret;
}

async function showPassword(secret: string) {
    return;
}

export {
    confirmPassword,
    hidePassword,
    showPassword
}