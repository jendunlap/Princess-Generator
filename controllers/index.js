const Princess = require('../models/princess')

const createPrincess = async (req, res) => {
  try {
    const princess = await new Princess(req.body)
    await princess.save()
    return res.status(201).json({
      princess
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const getAllPrincesses = async (req, res) => {
  try {
    const princesses = await Princess.find()
    return res.status(200).json({ princesses })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getPrincessById = async (req, res) => {
  try {
    const { id } = req.params
    const princess = await Princess.findById(id)
    if (princess) {
      return res.status(200).json({ princess })
    }
    return res.status(404).send('The Princess does not exist')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const updatePrincess = async (req, res) => {
  console.log(req.body)
  try {
    const princess = await Princess.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    res.status(200).json(princess)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const deletePrincess = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Princess.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send('Princess deleted')
    }
    throw new Error('Princess not found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  createPrincess,
  getAllPrincesses,
  getPrincessById,
  updatePrincess,
  deletePrincess
}
