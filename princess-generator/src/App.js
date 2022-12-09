import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Create, Gallery, Login } from './pages'

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
