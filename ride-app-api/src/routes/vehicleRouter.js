const vehicleRouter = require('express').Router()
const { getAllVehicles, createVehicle } = require('../controllers/vehicle')

vehicleRouter.get('/', getAllVehicles)
vehicleRouter.post('/', createVehicle)

module.exports = vehicleRouter
