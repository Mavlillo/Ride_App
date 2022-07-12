const Joi = require('joi')

const routeCreationSchema = Joi.object().keys({
  title: Joi.string().required(),
  content: Joi.string().required(),
  value: Joi.string().required(),
  
})

module.exports = {
  routeCreationSchema
}