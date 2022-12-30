import Joi from "joi";

export const userSchema = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required(),
    confirm: Joi.string().required()
})

export const loginSchema = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required()
})