import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <header className="navBar">
      <nav>
        <Link to="/" className="headerLink">
          Home
        </Link>
        <Link to="/create" className="headerLink">
          Create
        </Link>
        <Link to="/gallery" className="headerLink">
          Gallery
        </Link>
        <Link to="/princesses" className="headerLink">
          Princesses
        </Link>
      </nav>
    </header>
  )
}

export default Nav
