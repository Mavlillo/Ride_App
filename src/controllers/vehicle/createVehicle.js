const Vehicle = require('../../models/Vehicle')
const { vehicleCreationSchema } = require('../../validators/vehicleSchema')

async function createVehicle(req, res) {
  const payload = req.body

  try {
    await vehicleCreationSchema.validateAsync(payload)
  } catch (err) {
    res.status(400).send(err.message)
    return
  }

  try {
    const vehicle = await Vehicle.create({ ...payload, userId: req.user.sub })
    res.status(201).send(vehicle)
  } catch(err) {
    console.log(err)
  }
}

module.exports = createVehicle
