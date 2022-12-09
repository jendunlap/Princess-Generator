import './App.css'
import { Route, Routes } from 'react-router-dom'
import Create from './pages/Create'
import Login from './pages/Login'
import Princesses from './pages/Princesses'
import Gallery from './pages/Gallery'
import Nav from './components/Nav'
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

  let userId = localStorage.getItem('id')

  return (
    <div className="App">
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Login setUser={setUser} />} />
          <Route path="/create" element={<Create />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/princesses" element={<Princesses />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
