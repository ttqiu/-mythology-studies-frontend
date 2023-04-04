import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { RegisterUser } from '../services/User'

const Register = () => {
  let navigate = useNavigate()
  const initialState = {
    userName: '',
    email: '',
    password: '',
    confirmPassword: ''
  }

  const [formValues, setFormValues] = useState(initialState)

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await RegisterUser({
      userName: formValues.userName,
      email: formValues.email,
      password: formValues.password
    })
    setFormValues(initialState)
    navigate('/signIn')
  }

  return (
    <div className="grid items-center justify-center">
      <div className="w-full max-w-md space-y-8">
        <h1 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
          Sign Up
        </h1>
        <label>Enter your details to register.</label>
      </div>
      <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            for="userName"
          >
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={handleChange}
            name="userName"
            type="text"
            placeholder="Smith123"
            value={formValues.userName}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            for="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={handleChange}
            name="email"
            type="text"
            placeholder="Email Address"
            value={formValues.email}
            required
          />
        </div>
        <div className="mb-6">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="password"
          >
            Password
          </label>
          <input
            class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            onChange={handleChange}
            name="password"
            type="text"
            value={formValues.password}
            placeholder="******************"
            required
          />
          <p class="text-red-500 text-xs italic">Please choose a password.</p>
        </div>
        <div class="mb-6">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="confirmPassword"
          >
            Confirm Password
          </label>
          <input
            className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            onChange={handleChange}
            name="confirmPassword"
            type="text"
            value={formValues.confirmPassword}
            placeholder="******************"
            required
          />
          <p className="text-red-500 text-xs italic">
            Please choose a password.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            disabled={
              !formValues.userName ||
              !formValues.email ||
              (!formValues.password &&
                formValues.confirmPassword === formValues.password)
            }
          >
            REGISTER
          </button>
        </div>
        <div color="gray" className="mt-4 text-center font-normal">
          Already have an account?{' '}
          <a
            href="/signIn"
            className="font-medium text-blue-500 transition-colors hover:text-blue-700"
          >
            Sign In
          </a>
        </div>
      </form>
    </div>
  )
}

export default Register
