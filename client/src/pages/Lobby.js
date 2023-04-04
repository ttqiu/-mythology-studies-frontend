import Search from '../components/Search'
import { useState } from 'react'
import { useNavigate, NavLink } from 'react-router-dom'
import Client from '../services/api'

const Lobby = ({ user }) => {
  let navigate = useNavigate()

  const [searchResults, setSearchResults] = useState([])
  const [searched, toggleSearched] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const getSearchResults = async (e) => {
    e.preventDefault()
    const response = await Client.get(`/api/creatures/name/${searchQuery}`)
    setSearchResults(response.data)
    console.log(response.data)
    toggleSearched(true)
    setSearchQuery('')
  }

  const handleChange = (event) => {
    setSearchQuery(event.target.value)
  }

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
                    <img src={result.image} alt="creature"></img>
                    <h3>{result.name}</h3>
                    <label>Origins: </label>
                    {result.origins.map((r) => (
                      <p>{r.origin}</p>
                    ))}
                  </div>
                </NavLink>
              ))}
            </section>
          </div>
        )}
      </div>
      <div className="subject-list">
        <div className="subject"></div>
        {/* <section className="container-grid">
          {subjects.map((subject) => (
            <NavLink
              to={`/classPreview/${subject}`}
              key={subject}
              className="subjectLinks"
            >
              <div>
                <h3 className="subject-card">{subject}</h3>
              </div>
            </NavLink>
          ))}
        </section> */}
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
