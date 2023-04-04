import Client from '../services/api'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const CreatureDetails = ({ user }) => {
  let navigate = useNavigate()
  const { id } = useParams()
  const [originDetails, setOriginDetails] = useState({})

  const getOriginDetails = async () => {
    const response = await Client.get(`/api/origins/${id}`)
    setOriginDetails(response.data)
  }

  useEffect(() => {
    getOriginDetails()
  }, [id])

  return user ? (
    <div>
      <div className="mt-6 text-center text-3xl font-bold tracking-tight mb-4">
        <h1>{originDetails.origin}</h1>
      </div>
      <section>
        <div className="flex-row">
          <div>
            <label className="block text-purple-700 font-bold mb-4">
              {originDetails.description}
            </label>
          </div>
        </div>
      </section>
    </div>
  ) : (
    <div className="protected">
      <h3>Oops! You must be signed in to do that!</h3>
      <button onClick={() => navigate('/signin')}>Sign In</button>
    </div>
  )
}

export default CreatureDetails
