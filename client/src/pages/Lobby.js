import Search from '../components/Search'
import { useEffect, useState } from 'react'
import { useNavigate, NavLink } from 'react-router-dom'
import Client from '../services/api'
import CreatureCard from '../components/CreatureCard'

const Lobby = ({ user }) => {
  let navigate = useNavigate()

  const [searchResults, setSearchResults] = useState([])
  const [searched, toggleSearched] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [creatures, setCreatures] = useState([])

  const getSearchResults = async (e) => {
    e.preventDefault()
    const response = await Client.get(`/api/creatures/name/${searchQuery}`)
    setSearchResults(response.data)
    toggleSearched(true)
    setSearchQuery('')
  }

  const handleChange = (event) => {
    setSearchQuery(event.target.value)
  }

  useEffect(() => {
    const getCreatures = async () => {
      const response = await Client.get(`/api/creatures/`)
      setCreatures(response.data.slice(-5).reverse())
    }
    getCreatures()
  }, [])

  return user ? (
    <div>
      <div>
        <Search
          onChange={handleChange}
          onSubmit={getSearchResults}
          value={searchQuery}
        />
        {searched && (
          <div>
            <h2>Search Results</h2>
            <section className="container-grid">
              {searchResults.map((result) => (
                <NavLink to={`/creatureDetails/${result.id}`} key={result.id}>
                  <div className="search-results">
                    <CreatureCard name={result.name} image={result.image} />
                  </div>
                </NavLink>
              ))}
            </section>
          </div>
        )}
      </div>
      <div className="recent-add">
        <h3>Recently Added</h3>
        <ul className="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
          {creatures.map((creature) => (
            <li
              className="pb-3 sm:pb-4"
              key={creature.id}
              onClick={() => navigate(`/creatureDetails/${creature.id}`)}
            >
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <img
                    className="w-8 h-8 rounded-full"
                    src={creature.image}
                    alt="creature-img"
                  ></img>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                    {creature.name}
                  </p>
                </div>
                <div className="inline-flex items-center text-base text-gray-900 dark:text-white">
                  {new Date(`${creature.createdAt}`).toDateString()}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  ) : (
    <div className="protected">
      <h3>Oops! You must be signed in to do that!</h3>
      <button onClick={() => navigate('/signIn')}>Sign In</button>
    </div>
  )
}

export default Lobby
