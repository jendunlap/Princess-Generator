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
            <button className="homeButton" onClick={handleLogin}>
              Need to create an account?
            </button>
          </div>
        ) : (
          <div className="homeRegister">
            <RegisterForm setIsVisible={setIsVisible} />
            <button className="homeButton" onClick={handleRegister}>
              Already have an account?
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Login
