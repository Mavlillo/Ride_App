const Task = require('../../models/Task')

async function getAllTasks(req, res) {
  const tasks = await Task.find()
    res.send(tasks)
  }
  
  module.exports = getAllTasks