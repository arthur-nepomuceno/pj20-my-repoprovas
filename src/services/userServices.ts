import bcrypt from "bcrypt";
import * as userRepository from "../repositories/userRepository";

async function checkEmailAvailability(email: string) {
    const response = await userRepository.findUserByEmailAddress(email);

    if (response) throw {
        type: "invalid_email",
        message: "_this email is already in use_"
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

async function showPassword(secret: string) {
    return;
}

async function createUser(email: string, password: string) {
    await userRepository.insertUser(email, password);

    return;
}

async function getUserByEmail(email: string) {
    return await userRepository.findUserByEmailAddress(email);
}

export {
    checkEmailAvailability,
    confirmPassword,
    hidePassword,
    showPassword,
    createUser,
    getUserByEmail
}