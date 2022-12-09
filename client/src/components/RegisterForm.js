import { useState } from 'react'
import { Register } from '../services/Auth'

const RegisterForm = ({ setIsVisible }) => {
  let initialState = {
    name: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  }

  const [newUser, setNewUser] = useState(initialState)

  const handleChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value })
  }

  const createUser = async (e) => {
    e.preventDefault()
    await Register({
      name: newUser.name,
      username: newUser.username,
      email: newUser.email,
      password: newUser.password
    })
    setNewUser(initialState)
    setIsVisible(true)
  }

  return (
    <div className="register">
      <form className="registerForm" onSubmit={createUser}>
        <input
          className="input"
          placeholder="Your Name"
          onChange={handleChange}
          value={newUser.name}
          name="name"
        />
        <input
          className="input"
          placeholder="Choose Username"
          onChange={handleChange}
          value={newUser.username}
          name="username"
        />
        <input
          className="input"
          placeholder="Email"
          onChange={handleChange}
          value={newUser.email}
          name="email"
        />
        <input
          className="input"
          placeholder="Password"
          onChange={handleChange}
          value={newUser.password}
          name="password"
        />
        <input
          className="input"
          placeholder="Confirm Password"
          onChange={handleChange}
          value={newUser.confirmPassword}
          name="confirmPassword"
        />
        <button
          disabled={
            (!newUser.email,
            !newUser.name,
            !newUser.password,
            !newUser.confirmPassword) ||
            newUser.confirmPassword !== newUser.password
          }
        >
          Create Account
        </button>
      </form>
    </div>
  )
}

export default RegisterForm
