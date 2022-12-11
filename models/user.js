const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = new Schema(
  {
    name: { type: String, required: true },
    username: { type: String, required: true },
    email: { type: String, required: true },
    passwordDigest: { type: String, required: true },
    princesses: [{ type: Schema.Types.ObjectId, ref: 'myPrincess' }]
  },
  { timestamps: true }
)

module.exports = mongoose.model('User', User)
