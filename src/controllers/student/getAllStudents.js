const Student = require('../../models/Student')

async function getAllStudents(req, res) {
  const students = await Student.find({
    userId: req.user.sub
  })
  res.send(students)
}

module.exports = getAllStudents
