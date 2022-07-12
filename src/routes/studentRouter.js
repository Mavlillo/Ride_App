const studentRouter = require('express').Router()
const { getAllStudents, createStudent } = require('../controllers/student')

studentRouter.get('/', getAllStudents)
studentRouter.post('/', createStudent)

module.exports = studentRouter
