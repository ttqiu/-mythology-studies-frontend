import { useState, useEffect } from 'react'
import { useNavigate, NavLink } from 'react-router-dom'
import Client from '../services/api'
import CreatureCard from '../components/CreatureCard'

const CreaturePreview = ({ user }) => {
  let navigate = useNavigate()
  const [creatures, setCreatures] = useState([])

  useEffect(() => {
    const handleCreatures = async () => {
      const response = await Client.get(`/api/creatures/`)
      response.data = response.data.sort((a, b) =>
        a.name.localeCompare(b.name, 'en', { sensitivity: 'base' })
      )
      setCreatures(response.data)
    }
    handleCreatures()
  }, [])

  return user ? (
    <div>
      <h1 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900 mb-5">
        Creatures
      </h1>
      <section className="container-grid">
        {creatures.map((creature) => (
          <NavLink to={`/creatureDetails/${creature.id}`} key={creature.id}>
            <div className="search-results">
              <CreatureCard name={creature.name} image={creature.image} />
            </div>
          </NavLink>
        ))}
      </section>
    </div>
  ) : (
    <div className="protected">
      <h3>Oops! You must be signed in to do that!</h3>
      <button onClick={() => navigate('/signin')}>Sign In</button>
    </div>
  )
}

export default CreaturePreview
