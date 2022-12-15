const mongoose = require('mongoose')
const Schema = mongoose.Schema

const myPrincess = new Schema(
  {
    name: { type: String, required: true },
    skin: { type: String, required: true },
    eyes: { type: String, required: true },
    hair: { type: String, required: true },
    mouth: { type: String, required: true },
    dress: { type: String, required: true },
    earring: { type: String, required: false },
    necklace: { type: String, required: false },
    background: { type: String, required: false },
    frame: { type: String, required: false },
    base: { type: Boolean }
  },
  { timestamps: true }
)

module.exports = mongoose.model('myPrincess', myPrincess)
