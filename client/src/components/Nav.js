import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'

const Nav = () => {
  let navigate = useNavigate

  const [user, setUser] = useState([])

  const logOut = () => {
    setUser(null)
    localStorage.clear()
    navigate('/')
  }

  return (
    <header className="navBar">
      {window.location.pathname === '/' ? null : (
        <nav className="nav">
          <div>
            <Link to="/" className="headerLink" onClick={logOut}>
              Logout
            </Link>
          </div>
          <div>
            <Link to="/create" className="headerLink">
              Create
            </Link>
            <Link to="/gallery" className="headerLink">
              Gallery
            </Link>
            <Link to="/princesses" className="headerLink">
              Princesses
            </Link>
          </div>
        </nav>
      )}
    </header>
  )
}

export default Nav
