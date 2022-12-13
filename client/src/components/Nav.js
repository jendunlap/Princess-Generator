import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <header className="navBar">
      {window.location.pathname === '/' ? null : (
        <nav className="nav">
          <div>
            <Link to="/" className="headerLink">
              Home
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
