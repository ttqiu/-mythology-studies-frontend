import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Client from '../services/api'
import { IdentificationIcon } from '@heroicons/react/24/solid'
import { HeartIcon } from '@heroicons/react/24/solid'
import { Cog6ToothIcon } from '@heroicons/react/24/solid'

const Account = ({ user, account }) => {
  let navigate = useNavigate()
  const [zodiacs, setZodiacs] = useState([])
  let zodiac = ''
  account.zodiac?.map((z) => {
    zodiac = z
  })

  const getZodaic = async () => {
    const response = await Client.get(`/api/zodiacs`)
    setZodiacs(response.data)
  }

  useEffect(() => {
    getZodaic()
  }, [])

  const handleZodiac = async (ZodiacId) => {
    if (user) {
      await Client.post(`/api/zodiaclists/${user.id}/${ZodiacId}`, {
        userId: user.id,
        ZodiacId: ZodiacId
      })
      navigate(0)
    }
  }

  // const handleChange = (event) => {
  //   setCreateComment({
  //     ...createComment,
  //     [event.target.id]: event.target.value
  //   })
  // }

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
                    alt="zodiac"
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
      {zodiac.length === 0 && (
        <div>
          <label htmlFor="zodiac">Zodiac: </label>
          {zodiacs.map((zo) => (
            <div key={zo.id} className="comment-container">
              <h1>{zo.zodiac}</h1>
              <label className="mb-2 text-gray-900 dark:text-white">
                {zo.description}
              </label>
              <button
                onClick={() => handleZodiac(zo.id)}
                className="group relative mb-4 flex justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Select Zodiac
              </button>
            </div>
          ))}
          {/* <select>
            {zodiacs.map((zo) => (
              <div>
                <option value={`${zo.id}`} key={zo.id}>
                  {zo.zodiac}
                </option>
                <button
                  onClick={handleZodiac(zo.id)}
                  className="mb-4 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                ></button>
              </div>
            ))}
          </select> */}
        </div>
      )}
      {zodiac.length !== 0 && (
        <dl className=" mx-auto mt-12 max-w-md text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
          <div className="flex flex-col pb-3">
            <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
              Zodiac
            </dt>
            <dd className="text-lg font-semibold">{zodiac.zodiac}</dd>
          </div>
          <div className="flex flex-col py-3">
            <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
              Personality
            </dt>
            <dd className="text-lg font-semibold">{zodiac.personality}</dd>
          </div>
        </dl>
      )}
    </div>
  ) : (
    <div className="protected">
      <h3>Oops! You must be signed in to do that!</h3>
      <button onClick={() => navigate('/signin')}>Sign In</button>
    </div>
  )
}

export default Account
