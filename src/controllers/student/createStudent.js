const Student = require('../../models/Student')
const { studentCreationSchema } = require('../../validators/studentSchema')

async function createStudent(req, res) {
  const payload = req.body

  try {
    await studentCreationSchema.validateAsync(payload)
  } catch (err) {
    res.status(400).send(err.message)
    return
  }

  try {
    const student = await Student.create({ ...payload, userId: req.user.sub })
    res.status(201).send(student)
  } catch(err) {
    console.log(err)
  }
}

module.exports = createStudent
