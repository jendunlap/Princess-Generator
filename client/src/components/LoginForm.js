import { useState } from 'react'
import { SignIn } from '../services/Auth'
import { useNavigate } from 'react-router-dom'

const LoginForm = ({ setUser }) => {
  const initialState = { email: '', password: '' }
  const [formValues, setFormValues] = useState(initialState)

  let navigate = useNavigate()

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const payload = await SignIn(formValues)
    setUser(payload)
    setFormValues(initialState)
    navigate('/create')
  }

  return (
    <div className="login">
      <form className="loginForm" onSubmit={handleSubmit}>
        <input
          className="input"
          placeholder="EMAIL"
          onChange={handleChange}
          value={formValues.email}
          name="email"
        />
        <input
          className="input"
          placeholder="PASSWORD"
          onChange={handleChange}
          value={formValues.password}
          name="password"
        />
        <button
          disabled={!formValues.email || !formValues.password}
          className="loginButton"
          onClick={handleSubmit}
        >
          Login
        </button>
      </form>
    </div>
  )
}

export default LoginForm
