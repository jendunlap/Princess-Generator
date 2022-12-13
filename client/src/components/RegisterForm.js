import { useState } from 'react'
import { Register } from '../services/Auth'
import { useNavigate } from 'react-router-dom'

const RegisterForm = ({ setIsVisible }) => {
  let navigate = useNavigate()
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
    navigate('/')
  }

  return (
    <div className="register">
      <form className="registerForm" onSubmit={createUser}>
        <div>
          <input
            className="input"
            placeholder="NAME"
            onChange={handleChange}
            value={newUser.name}
            name="name"
          />
          <input
            className="input"
            placeholder="USERNAME"
            onChange={handleChange}
            value={newUser.username}
            name="username"
          />
        </div>
        <div>
          <input
            className="input"
            placeholder="EMAIL"
            onChange={handleChange}
            value={newUser.email}
            name="email"
          />
          <input
            className="input"
            placeholder="PASSWORD"
            onChange={handleChange}
            value={newUser.password}
            name="password"
          />
        </div>
        <input
          className="input"
          placeholder="Confirm Password"
          onChange={handleChange}
          value={newUser.confirmPassword}
          name="confirmPassword"
        />
        <button
          className="registerButton"
          disabled={
            (!newUser.email,
            !newUser.name,
            !newUser.password,
            !newUser.confirmPassword)
          }
        >
          Create Account
        </button>
      </form>
    </div>
  )
}

export default RegisterForm
