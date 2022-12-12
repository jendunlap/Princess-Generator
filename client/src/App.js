import './App.css'
import { Route, Routes } from 'react-router-dom'
import Create from './pages/Create'
import Login from './pages/Login'
import Princesses from './pages/Princesses'
import PrincessInfo from './pages/PrincessInfo'
import Gallery from './pages/Gallery'
import Nav from './components/Nav'
import Modify from './pages/Modify'
import { CheckSession } from './services/Auth'
import { useState, useEffect } from 'react'

function App() {
  const [user, setUser] = useState([])

  const checkToken = async () => {
    const user = await CheckSession()
    setUser(user)
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      checkToken()
    }
  }, [])

  return (
    <div className="App">
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Login setUser={setUser} />} />
          <Route path="/create" element={<Create />} />
          <Route path="/gallery" element={<Gallery />} />
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
