import { Link } from 'react-router-dom'
import { HomeIcon } from '@heroicons/react/24/solid'
import { UserCircleIcon } from '@heroicons/react/24/solid'
import { InformationCircleIcon } from '@heroicons/react/24/solid'
import { UserPlusIcon } from '@heroicons/react/24/solid'
import { ArrowRightOnRectangleIcon } from '@heroicons/react/24/solid'
import { ArrowLeftOnRectangleIcon } from '@heroicons/react/24/solid'
import { ChevronDownIcon } from '@heroicons/react/24/solid'

const Nav = ({ user, handleLogOut }) => {
  let userOptions
  if (user) {
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
            <ArrowLeftOnRectangleIcon className="h-5 w-5" aria-hidden="true" />
          </Link>
          {/* <Link to="/origins"> */}
          <div className="dropdown">
            <label tabIndex={0} className="welcome">
              Origins
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/origins/greek">
                  <a>Ancient Greek</a>
                </Link>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>
          </div>
          {/* </Link> */}
          <Link to="/creatures">Creature</Link>
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
          <label>Home</label>
        </Link>
        <Link to="/register">
          <UserPlusIcon className="h-5 w-5" aria-hidden="true" />
          <label>Register</label>
        </Link>
        <Link to="/signIn">
          <ArrowRightOnRectangleIcon className="h-5 w-5" aria-hidden="true" />
          <label>Sign In</label>
        </Link>
        <Link to="/about">
          <InformationCircleIcon className="h-5 w-5" aria-hidden="true" />
          <label>About</label>
        </Link>
      </div>
    </nav>
  )

  return <header>{user ? userOptions : publicOptions}</header>
}

export default Nav
