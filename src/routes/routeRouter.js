const routeRouter = require('express').Router()
const { getAllRoutes, createRoute } = require('../controllers/route')

routeRouter.get('/', getAllRoutes)
routeRouter.post('/', createRoute)

module.exports = routeRouter
