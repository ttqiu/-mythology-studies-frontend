import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Client from '../services/api'
import { IdentificationIcon } from '@heroicons/react/24/solid'
import { HeartIcon } from '@heroicons/react/24/solid'
import { Cog6ToothIcon } from '@heroicons/react/24/solid'

const Account = ({ user, account }) => {
  let navigate = useNavigate()
  const [email, setEmail] = useState({ email: '' })
  const [userName, setUserName] = useState({ userName: '' })
  const [password, setPassword] = useState({
    oldPassword: '',
    newPassword: ''
  })

  const handleEmail = async (e) => {
    if (user) {
      e.preventDefault()
      await Client.put(`/api/users/updateUserDetails/${user.id}`, email)
      setEmail({ ...email })
      window.location.reload(false)
    }
  }

  const handleUserName = async (e) => {
    if (user) {
      e.preventDefault()
      await Client.put(`/api/users/updateUserDetails/${user.id}`, userName)
      setPassword({ ...userName })
      window.location.reload(false)
    }
  }

  const handlePassword = async (e) => {
    if (user) {
      e.preventDefault()
      await Client.put(`/api/users/updatePassword/${user.id}`, password)
      setPassword({ ...password })
      window.location.reload(false)
    }
  }

  const handleChange = (event) => {
    setEmail({ ...email, [event.target.id]: event.target.value })
  }

  const userNameChange = (event) => {
    setUserName({ ...user, [event.target.id]: event.target.value })
  }

  const passwordChange = (event) => {
    setPassword({ ...password, [event.target.id]: event.target.value })
  }

  return user ? (
    <div className="flex">
      <div className="flex flex-col h-screen p-3 bg-white shadow w-60">
        <div className="space-y-3">
          <div className="flex items-center">
            <h2 className="text-xl font-bold">User Information</h2>
          </div>
          <div className="flex-1">
            <ul className="pt-2 pb-4 space-y-1 text-sm">
              <li className="rounded-sm">
                <a
                  href="/account"
                  className="flex items-center p-2 space-x-3 rounded-md"
                >
                  <IdentificationIcon className="h-5 w-5" aria-hidden="true" />
                  <span>Account</span>
                </a>
              </li>
              <li className="rounded-sm">
                <a
                  href="/account/zodiac"
                  className="flex items-center p-2 space-x-3 rounded-md"
                >
                  <img
                    className="zodiac"
                    src="https://static-s.aa-cdn.net/img/gp/20600002613700/srFXS6Y2Dc_g_PtOlxYzwnZCMfpqFFzT4Oxm7W7hlXoS3aivOHDtmrzmcyTOFE_1Qvc?v=1"
                  ></img>
                  <span>Zodiac</span>
                </a>
              </li>
              <li className="rounded-sm">
                <a
                  href="/account/Favorite"
                  className="flex items-center p-2 space-x-3 rounded-md"
                >
                  <HeartIcon className="h-5 w-5" aria-hidden="true" />
                  <span>Favorite</span>
                </a>
              </li>
              <li className="rounded-sm">
                <a
                  href="/account/setting"
                  className="flex items-center p-2 space-x-3 rounded-md"
                >
                  <Cog6ToothIcon className="h-5 w-5" aria-hidden="true" />
                  <span>Settings</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="update">
        <form className="mt-8 space-y-6" onSubmit={handleUserName}>
          <div className="-space-y-px rounded-md shadow-sm">
            <div>
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="password"
              >
                New Username
              </label>
              <input
                onChange={userNameChange}
                id="userName"
                type="text"
                value={userName.userName}
                className="relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Smith123"
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="group relative flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Update Username
            </button>
          </div>
        </form>
        <form className="mt-8 space-y-6" onSubmit={handleEmail}>
          <div className="-space-y-px rounded-md shadow-sm">
            <div>
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="password"
              >
                New Email
              </label>
              <input
                onChange={handleChange}
                id="email"
                type="text"
                value={email.email}
                className="relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Email Adress"
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="group relative flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Update Email
            </button>
          </div>
        </form>
        <form className="mt-8 space-y-6" onSubmit={handlePassword}>
          <div className="-space-y-px rounded-md shadow-sm">
            <div>
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="password"
              >
                Old Password
              </label>
              <input
                onChange={passwordChange}
                id="oldPassword"
                type="text"
                value={password.oldPassword}
                className="relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Smith123"
              />
              <div>
                <label
                  class="block text-gray-700 text-sm font-bold mb-2"
                  for="password"
                >
                  New Password
                </label>
                <input
                  onChange={passwordChange}
                  id="newPassword"
                  type="text"
                  value={password.newPassword}
                  className="relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Smith123"
                />
              </div>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="group relative flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Update Password
            </button>
          </div>
        </form>
      </div>
    </div>
  ) : (
    <div className="protected">
      <h3>Oops! You must be signed in to do that!</h3>
      <button onClick={() => navigate('/signin')}>Sign In</button>
    </div>
  )
}

export default Account
