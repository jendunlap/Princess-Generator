import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

const Nav = ({ user, logOut }) => {
  let navigate = useNavigate()

  useEffect(() => {}, [user])

  return (
    <header className="navBar">
      <nav className="nav">
        {user ? (
          <>
            <div>
              <Link to="/" className="logout" onClick={logOut}>
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
          </>
        ) : (
          <>
            <div>
              <Link to="/login" className="logout">
                Sign In
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
          </>
        )}
      </nav>
    </header>
  )
}

export default Nav
