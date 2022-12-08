const { Schema } = require('mongoose')

const Princess = new Schema(
  {
    name: { type: String, required: true },
    skin: { type: String, required: true },
    eyes: { type: String, required: true },
    hair: { type: String, required: true },
    mouth: { type: String, required: true },
    dress: { type: String, required: true },
    accessories: [{ type: Array, required: false }],
    background: { type: String, required: true },
    frame: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = Princess
