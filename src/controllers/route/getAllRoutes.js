const Route = require('../../models/Route')

async function getAllRoutes(req, res) {
  const routes = await Routes.find({
    userId: req.user.sub
  })
  res.send(routes)
}

module.exports = getAllRoutes
