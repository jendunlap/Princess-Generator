import './App.css'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Create from './pages/Create'
import Login from './pages/Login'
import LoginPrompt from './pages/LoginPrompt'
import Princesses from './pages/Princesses'
import PrincessInfo from './pages/PrincessInfo'
import Gallery from './pages/Gallery'
import Nav from './components/Nav'
import Modify from './pages/Modify'
import { CheckSession } from './services/Auth'
import { useState, useEffect } from 'react'

function App() {
  let navigate = useNavigate()

  const [user, setUser] = useState(null)

  const checkToken = async () => {
    const user = await CheckSession()
    setUser(user)
  }

  const logOut = () => {
    setUser(null)
    localStorage.clear()
    navigate('/')
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      checkToken()
    }
  }, [])

  return (
    <div className="App">
      <Nav user={user} logOut={logOut} />
      {/* <Nav /> */}
      <main>
        <Routes>
          <Route path="/" element={<Create />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route
            path="/logintosave"
            element={<LoginPrompt setUser={setUser} />}
          />
          <Route path="/create" element={<Create />} />
          <Route path="/gallery" element={<Gallery user={user} />} />
          <Route path="/princesses" element={<Princesses />} />
          <Route path="/princesses/:princessId" element={<PrincessInfo />} />
          <Route path="/myprincesses/:princessId" element={<PrincessInfo />} />
          <Route path="/modify/:princessId" element={<Modify />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
