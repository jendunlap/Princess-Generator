import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Create, Gallery, Login } from './pages'
import { CreateForm, LoginForm, Nav, RegisterForm } from './components'

function App() {
  return (
    <div className="App">
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
