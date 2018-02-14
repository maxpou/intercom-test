const Joi = require('joi')
const Customer = require('../models/customer')
const EarthPosition = require('../models/earthPosition')

const schema = Joi.object().keys({
  latitude: Joi.number().required(),
  name: Joi.string().required(),
  user_id: Joi.number().integer().required(),
  longitude: Joi.number().required()
})

const parseLine = function (line) {
  const customerData = Joi.validate(line, schema)

  if (customerData.error !== null) {
    throw new Error(customerData.error.message)
  }

  const earthPosition = new EarthPosition(customerData.value.latitude, customerData.value.longitude)
  return new Customer(customerData.value.user_id, customerData.value.name, earthPosition)
}

module.exports.parseText = function (text) {
  return text.split('\n').map(line => parseLine(line))
}
