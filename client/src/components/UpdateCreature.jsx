import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Client from '../services/api'
import { PhotoIcon } from '@heroicons/react/24/solid'

const UpdateCreature = ({ user }) => {
  let navigate = useNavigate()
  const { id } = useParams()
  const [updateCreature, setUpdateCreature] = useState({})
  const [origins, setOrigins] = useState([])
  const [originList, setOriginList] = useState({
    originId: '',
    creatureId: id
  })

  const getCreatureDetails = async () => {
    const response = await Client.get(`/api/creatures/${id}`)
    setUpdateCreature(response.data)
  }

  useEffect(() => {
    getCreatureDetails()
  }, [id])

  const getOrigins = async () => {
    const response = await Client.get(`/api/origins/`)
    setOrigins(response.data)
  }

  useEffect(() => {
    getOrigins()
  }, [])

  const handleChange = (event) => {
    setUpdateCreature({
      ...updateCreature,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    await Client.put(`/api/creatures/${id}`, updateCreature)
    navigate(`/creatureDetails/${id}/`)
  }

  const handleOriginChange = (event) => {
    setOriginList({
      ...originList,
      [event.target.name]: event.target.value
    })
  }

  const handleOrigin = async (originId) => {
    if (user) {
      await Client.post(`/api/originlists/${originId}/${id}`, originList)
      navigate(`/creatureDetails/${id}/`)
    }
  }

  return user ? (
    <div className="grid items-center justify-center">
      <div className="w-full max-w-md space-y-8">
        <h1 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
          Update the mythology creature!
        </h1>
      </div>
      <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={handleChange}
            name="name"
            type="text"
            placeholder="panda"
            value={updateCreature.name}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="image"
          >
            Image
          </label>
          {/* <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
            <div className="text-center">
              <PhotoIcon
                className="mx-auto h-12 w-12 text-gray-300"
                aria-hidden="true"
              />
              <div className="mt-4 flex text-sm leading-6 text-gray-600">
                <label
                  htmlFor="image"
                  className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                >
                  <span>Upload a file</span>
                  <input
                    id="image"
                    name="image"
                    type="file"
                    className="sr-only"
                    onChange={handleChange}
                  />
                </label>
                <p className="pl-1">or drag and drop</p>
              </div>
              <p className="text-xs leading-5 text-gray-600">
                PNG, JPG, GIF up to 10MB
              </p>
            </div>
          </div> */}
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={handleChange}
            name="image"
            type="text"
            placeholder="image url"
            value={updateCreature.image}
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
            value={updateCreature.description}
            placeholder="description..."
          ></textarea>
        </div>
        <div className="flex items-center justify-center">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Update Creature
          </button>
        </div>
      </form>
      <div className="mt-8 space-y-6">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="originId"
          >
            origins
          </label>
          <select name="originId" onChange={handleOriginChange}>
            <option>Select Origins</option>
            {origins?.map((origin) => (
              <option value={`${origin.id}`} key={origin.id}>
                {origin.origin}
              </option>
            ))}
          </select>
          <button
            className="mb-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={() => handleOrigin(originList.originId)}
          >
            Update Origins
          </button>
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

export default UpdateCreature
