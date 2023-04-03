import { Link } from 'react-router-dom'

const Nav = ({ user, handleLogOut }) => {
  let userOptions
  if (user) {
    console.log(user)
    userOptions = (
      <nav>
        <div className="logo-wrapper" alt="logo">
          <img
            className="logo"
            src="https://img0.baidu.com/it/u=76554225,3692139133&fm=253&fmt=auto&app=138&f=PNG?w=434&h=629"
            alt="welcome banner"
          />
          <div className="welcome">
            <h3>Welcome {user.email}!</h3>
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
        <img
          className="logo"
          src="https://img0.baidu.com/it/u=76554225,3692139133&fm=253&fmt=auto&app=138&f=PNG?w=434&h=629"
          alt="welcome banner"
        />
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
