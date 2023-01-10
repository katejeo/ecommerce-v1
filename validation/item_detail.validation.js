const Joi = require("joi")

const itemDetailSchema = Joi.object({
    color : Joi.string(),
    size : Joi.string(),
    price : Joi.object({
        fixPrice : Joi.number().required(),
        discountPercent : Joi.number()
    })
})

module.exports = { itemDetailSchema }
