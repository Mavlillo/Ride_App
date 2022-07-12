const Vehicle = require('../../models/Vehicle')

async function getAllVehicles(req, res) {
  const vehicles = await Vehicle.find({
    userId: req.user.sub
  })
  res.send(vehicles)
}

module.exports = getAllVehicles
