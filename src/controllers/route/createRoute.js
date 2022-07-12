const Route = require('../../models/Route')
const { routeCreationSchema } = require('../../validators/routeSchema')

async function createRoute(req, res) {
  const payload = req.body

  try {
    await routeCreationSchema.validateAsync(payload)
  } catch (err) {
    res.status(400).send(err.message)
    return
  }

  try {
    const route = await Route.create({ ...payload, userId: req.user.sub })
    res.status(201).send(route)
  } catch(err) {
    console.log(err)
  }
}

module.exports = createRoute
