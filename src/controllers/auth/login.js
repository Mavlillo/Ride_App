const bcrypt = require('bcryptjs')
const { loginSchema } = require('../../validators/userSchema')
const User = require('../../models/User')

async function login(req, res) {
  const payload = req.body

  try {
    await loginSchema.validateAsync(payload)
  } catch(err) {
    res.status(401).send('Invalid credentials')
    return
  }

  const user = await User.findOne({ email: payload.email })

  if (!user || !bcrypt.compareSync(payload.password, user.password)) {
    res.status(401).send('Invalid credentials')
    return
  }

  res.json({
    user
  })
}

module.exports = login