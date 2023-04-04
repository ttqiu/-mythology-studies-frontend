import { useNavigate } from 'react-router-dom'
import { IdentificationIcon } from '@heroicons/react/24/solid'
import { HeartIcon } from '@heroicons/react/24/solid'
import { Cog6ToothIcon } from '@heroicons/react/24/solid'

const Account = ({ user, account }) => {
  let navigate = useNavigate()

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
                  href="#"
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
      <div className="container mx-auto mt-12">
        <div className="grid gap-20 mb-6">
          <div>
            <div className="text-sm font-medium text-gray-500 truncate">
              Username
            </div>
            <div className="mt-1 text-3xl font-semibold text-gray-900">
              <h3>username: {account.userName}</h3>
            </div>
          </div>
          <div>
            <div className="text-sm font-medium text-gray-500 truncate">
              Email
            </div>
            <div className="mt-1 text-3xl font-semibold text-gray-900">
              <h3>Email: {account.email}</h3>
            </div>
          </div>
        </div>
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
