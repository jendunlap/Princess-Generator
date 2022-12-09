import './App.css'
import { Route, Routes } from 'react-router-dom'
import Create from './pages/Create'
import Login from './pages/Login'
import Gallery from './pages/Gallery'
import Nav from './components/Nav'

function App() {
  return (
    <div className="App">
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/create" element={<Create />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
