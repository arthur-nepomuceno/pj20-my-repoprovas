import bcrypt from "bcrypt";
import * as userRepository from "../repositories/userRepository";

async function checkEmailAvailability(email: string) {
    const response = await userRepository.findUserByEmailAddress(email);

    if (response) throw {
        type: "invalid_email",
        message: "_This email is already in use_"
    }

    return;
}

async function confirmPassword(password: string, confirm: string) {

    const check = password === confirm;

    if (!check) throw {
        type: "password_and_confirm_password_do_not_match",
        message: "_Please confirm your password correctly_"
    }

    return;
}

async function hidePassword(password: string) {
    const secret = bcrypt.hashSync(password, 13)
    return secret;
}

async function createUser(email: string, password: string) {
    await userRepository.insertUser(email, password);

    return;
}

async function getUserByEmail(email: string) {
    const user = await userRepository.findUserByEmailAddress(email);
    return {id: user.id, email: user.email};
}

async function checkEmailRegister(email: string) {
    const response = await userRepository.findUserByEmailAddress(email);

    if(!response) throw {
        type: "unknown_email",
        message: "_Unknown email. Please register first and try to access again_"
    }

    return;
}

async function checkPassword(email: string, password: string) {
    const response = await userRepository.findUserByEmailAddress(email)
    const check = bcrypt.compareSync(password, response.password);

    if(!check) throw {
        type: "invalid_password",
        message: "_Please type your password correctly_"
    }

    return;
}

export {
    checkEmailAvailability,
    confirmPassword,
    hidePassword,
    createUser,
    getUserByEmail,
    checkEmailRegister,
    checkPassword
}