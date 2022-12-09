import LoginForm from '../components/LoginForm'
import RegisterForm from '../components/RegisterForm'
import { useState } from 'react'

const Login = ({ setUser }) => {
  const [isVisible, setIsVisible] = useState(true)

  const handleLogin = () => {
    setIsVisible(false)
  }

  const handleRegister = () => {
    setIsVisible(true)
  }

  return (
    <div className="home">
      <h1 className="homeHeader">PRINCESS TIME!!@</h1>
      <div className="loginRegister">
        {isVisible ? (
          <div className="homeLogin">
            <LoginForm setUser={setUser} />
            <div className="registerInstead">
              <h3 className="homeOption">Need to create an account?</h3>
            </div>
            <button className="homeButton" onClick={handleLogin}>
              Create
            </button>
          </div>
        ) : (
          <div className="homeRegister">
            <RegisterForm setIsVisible={setIsVisible} />
            <div className="loginInstead">
              <h3 className="homeOption">Already have an account?</h3>
            </div>
            <button className="homeButton" onClick={handleRegister}>
              Create
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Login
