import { Link } from 'react-router-dom'
import { HomeIcon } from '@heroicons/react/24/solid'
import { UserCircleIcon } from '@heroicons/react/24/solid'
import { InformationCircleIcon } from '@heroicons/react/24/solid'
import { UserPlusIcon } from '@heroicons/react/24/solid'
import { LockOpenIcon } from '@heroicons/react/24/solid'

const Nav = ({ user, handleLogOut }) => {
  let userOptions
  if (user) {
    // console.log(user)
    userOptions = (
      <nav>
        <div className="logo-wrapper" alt="logo">
          <img
            className="logo"
            src="https://img0.baidu.com/it/u=76554225,3692139133&fm=253&fmt=auto&app=138&f=PNG?w=434&h=629"
            alt="welcome banner"
          />
        </div>
        <div style={{ fontWeight: 'bolder' }} className="icon-wrapper">
          <h1 className="welcome">Welcome {user.email}!</h1>
          <Link to="/lobby">
            <HomeIcon className="h-5 w-5" aria-hidden="true" />
          </Link>
          <Link onClick={handleLogOut} to="/">
            Sign Out
          </Link>
          <Link to="/origin">Origin</Link>
          <Link to="/creature">Creature</Link>
          <Link to="/account">
            <UserCircleIcon className="h-5 w-5" aria-hidden="true" />
          </Link>
          <Link to="/about">
            <InformationCircleIcon className="h-5 w-5" aria-hidden="true" />
          </Link>
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
      <div className="icon-wrapper" style={{ fontWeight: 'bolder' }}>
        <Link to="/">
          <HomeIcon className="h-5 w-5" aria-hidden="true" />
        </Link>
        <Link to="/register">
          <UserPlusIcon className="h-5 w-5" aria-hidden="true" />
        </Link>
        <Link to="/signIn">
          <LockOpenIcon className="h-5 w-5" aria-hidden="true" />
        </Link>
        <Link to="/about">
          <InformationCircleIcon className="h-5 w-5" aria-hidden="true" />
        </Link>
      </div>
    </nav>
  )

  return <header>{user ? userOptions : publicOptions}</header>
}

export default Nav
