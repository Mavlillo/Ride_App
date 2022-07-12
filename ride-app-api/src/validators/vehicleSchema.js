const Joi = require('joi')

const vehicleCreationSchema = Joi.object().keys({
  patente: Joi.string().required(),
  brand: Joi.string().required(),
  model: Joi.string().required(),
  year: Joi.string().required(),
  colour: Joi.string().required(),
  ability: Joi.string().required(),
})

module.exports = {
  vehicleCreationSchema
}