import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Client from '../services/api'
import { IdentificationIcon } from '@heroicons/react/24/solid'
import { HeartIcon } from '@heroicons/react/24/solid'
import { Cog6ToothIcon } from '@heroicons/react/24/solid'
import { Calendar } from 'primereact/calendar'
import 'primereact/resources/themes/lara-light-indigo/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'

const Account = ({ user, account }) => {
  let navigate = useNavigate()
  const [zodiacs, setZodiacs] = useState([])
  const [date, setDate] = useState(null)

  let zodiac = ''
  account.zodiac?.map((z) => {
    zodiac = z
  })

  let year = null
  let ZodiacId = null

  if (date) {
    let remain = null
    year = new Date(date).getFullYear()
    remain = 2023 % year
    console.log(remain)
    if (remain === 0) {
      ZodiacId = 4
    } else if (remain === 1) {
      ZodiacId = 3
    } else if (remain === 2) {
      ZodiacId = 2
    } else if (remain === 3) {
      ZodiacId = 1
    } else if (remain === 4) {
      ZodiacId = 12
    } else if (remain === 5) {
      ZodiacId = 11
    } else if (remain === 6) {
      ZodiacId = 10
    } else if (remain === 7) {
      ZodiacId = 9
    } else if (remain === 8) {
      ZodiacId = 8
    } else if (remain === 9) {
      ZodiacId = 7
    } else if (remain === 10) {
      ZodiacId = 6
    } else if (remain === 11) {
      ZodiacId = 5
    }
  }

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

  const handleDeleteZodiac = async (ZodiacId) => {
    if (user) {
      await Client.delete(`/api/zodiaclists/${user.id}/${ZodiacId}`)
      navigate(0)
    }
  }

  return user ? (
    <div className="flex">
      <div className="flex flex-col h-screen p-3 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 shadow w-60">
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
        <div className="w-full max-w-md space-y-8">
          <label
            htmlFor="zodiac"
            className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900"
          >
            Select Your Zodiac{' '}
          </label>
          <div>
            <Calendar
              value={date}
              onChange={(e) => setDate(e.value)}
              view="year"
              dateFormat="yy"
            />
          </div>
          <button
            onClick={() => handleZodiac(ZodiacId)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Select Zodiac
          </button>
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
          <div className="flex justify-center py-3">
            <button
              onClick={() => handleDeleteZodiac(zodiac.id)}
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Reset Zodiac
            </button>
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
