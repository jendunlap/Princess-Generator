const Princess = require('../models/princess')
const User = require('../models/user')
const MyPrincess = require('../models/myPrincess')

// PRINCESSES

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

// USERS

const createUser = async (req, res) => {
  try {
    const user = await new User(req.body)
    await user.save()
    return res.status(201).json({
      user
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find()
    return res.status(200).json({ users })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getUserById = async (req, res) => {
  try {
    const { id } = req.params
    const user = await User.findById(id)
    if (user) {
      return res.status(200).json({ user })
    }
    return res.status(404).send('The User does not exist')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const updateUser = async (req, res) => {
  console.log(req.body)
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    res.status(200).json(user)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await User.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send('User deleted')
    }
    throw new Error('User not found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

// USER PRINCESSES

const getMyPrincesses = async (req, res) => {
  try {
    const princesses = await MyPrincess.find()
    return res.status(200).json({ princesses })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getMyPrincessById = async (req, res) => {
  try {
    const { id } = req.params
    const princess = await MyPrincess.findById(id)
    if (princess) {
      return res.status(200).json({ princess })
    }
    return res.status(404).send('The Princess does not exist')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const createMyPrincess = async (req, res) => {
  try {
    const princess = await new MyPrincess(req.body)
    await princess.save()
    return res.status(201).json({
      princess
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const updateMyPrincess = async (req, res) => {
  console.log(req.body)
  try {
    const princess = await MyPrincess.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true
      }
    )
    res.status(200).json(princess)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const deleteMyPrincess = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await MyPrincess.findByIdAndDelete(id)
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
  deletePrincess,
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
  createMyPrincess,
  getMyPrincesses,
  getMyPrincessById,
  updateMyPrincess,
  deleteMyPrincess
}
