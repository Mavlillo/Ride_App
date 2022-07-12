const Joi = require('joi')

const studentCreationSchema = Joi.object().keys({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  grade: Joi.string().required(),
  address:Joi.string().required(),
})

module.exports = {
  studentCreationSchema
}