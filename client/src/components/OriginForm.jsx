import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Client from '../services/api'

const OriginForm = ({ user }) => {
  let navigate = useNavigate()

  const initialState = {
    origin: '',
    description: ''
  }
  const [creatOrigin, setCreateOrigin] = useState(initialState)

  const handleChange = (event) => {
    setCreateOrigin({
      ...creatOrigin,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    await Client.post('/api/creatures/', creatOrigin)
    setCreateOrigin(initialState)
    navigate('/lobby')
  }

  return user ? (
    <div className="grid items-center justify-center">
      <div className="w-full max-w-md space-y-8">
        <h1 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
          Create a mythology origin!
        </h1>
      </div>
      <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="origin"
          >
            Origin
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={handleChange}
            name="origin"
            type="text"
            placeholder="Ancient Greek"
            value={creatOrigin.origin}
            required
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="description"
          >
            Description
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={handleChange}
            rows="5"
            name="description"
            type="text"
            value={creatOrigin.description}
            placeholder="description..."
            required
          ></textarea>
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            disabled={!creatOrigin.name || !creatOrigin.description}
          >
            Create
          </button>
        </div>
      </form>
    </div>
  ) : (
    <div className="protected">
      <h3>Oops! You must be signed in to do that!</h3>
      <button onClick={() => navigate('/signin')}>Sign In</button>
    </div>
  )
}

export default OriginForm
