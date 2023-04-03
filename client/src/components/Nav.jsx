import { Link } from 'react-router-dom'

const Nav = ({ user, handleLogOut }) => {
  let userOptions
  if (user) {
    userOptions = (
      <nav>
        <div className="logo-wrapper" alt="logo">
          {/* <img
            className="logo"
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt="welcome banner"
          /> */}
          <div className="welcome">
            <h3>Welcome {user.userName}!</h3>
          </div>
        </div>
        <div style={{ fontWeight: 'bolder' }}>
          <Link to="/lobby">Home</Link>
          <Link onClick={handleLogOut} to="/">
            Sign Out
          </Link>
          <Link to="/origin">Origin</Link>
          <Link to="/creature">Creature</Link>
          <Link to="/account">Account</Link>
          <Link to="/about">About</Link>
        </div>
      </nav>
    )
  }

  const publicOptions = (
    <nav>
      <div className="logo-wrapper" alt="logo">
        {/* <img
          className="logo"
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt="welcome banner"
        /> */}
      </div>
      <div style={{ fontWeight: 'bolder' }}>
        <Link to="/">Home</Link>
        <Link to="/register">Register</Link>
        <Link to="/signIn">Sign In</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  )

  return <header>{user ? userOptions : publicOptions}</header>
}

export default Nav
