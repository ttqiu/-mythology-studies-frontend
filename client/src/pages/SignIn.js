import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { SignInUser } from '../services/User'

const SignIn = ({ setUser }) => {
  let navigate = useNavigate()
  const initialState = { userName: '', password: '' }
  const [formValues, setFormValues] = useState(initialState)

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const payload = await SignInUser(formValues)
    setFormValues(initialState)
    setUser(payload)
    navigate('/lobby')
  }

  return (
    <div className="signIn col">
      <div className="card-overlay centered">
        <form className="col" onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <div>
              <label htmlFor="userName">userName</label>
              <input
                onChange={handleChange}
                name="userName"
                type="userName"
                placeholder="Smith123"
                value={formValues.userName}
                required
              />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                onChange={handleChange}
                type="password"
                name="password"
                value={formValues.password}
                required
              />
            </div>
          </div>
          <button disabled={!formValues.userName || !formValues.password}>
            Log In
          </button>
        </form>
      </div>
    </div>
  )
}

export default SignIn
