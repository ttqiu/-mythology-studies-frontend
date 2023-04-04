import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Client from '../services/api'
import { PhotoIcon } from '@heroicons/react/24/solid'

const PostComment = ({ user }) => {
  let navigate = useNavigate()

  const initialState = {
    name: '',
    image: '',
    description: ''
  }
  const [createCreature, setCreateCreature] = useState(initialState)

  const handleChange = (event) => {
    setCreateCreature({
      ...createCreature,
      [event.target.name]: event.target.value
    })
    console.log(createCreature)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    await Client.post('/api/creatures/', createCreature)
    setCreateCreature(initialState)
    navigate('/lobby')
  }

  return user ? (
    <div className="grid items-center justify-center">
      <div className="w-full max-w-md space-y-8">
        <h1 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
          Create a mythology creature!
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
            value={createCreature.name}
            required
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
            value={createCreature.image}
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
            value={createCreature.description}
            placeholder="description..."
            required
          ></textarea>
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            disabled={
              !createCreature.name ||
              !createCreature.image ||
              !createCreature.description
            }
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

export default PostComment
