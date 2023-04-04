import { useNavigate } from 'react-router-dom'

const Home = () => {
  let navigate = useNavigate()

  return (
    <div className="home-container">
      <img className="logoimage" src="https://i.imgur.com/mCWF3RZ.png"></img>
      <h1>Welcome To Mythology Studies!</h1>
      <section className="creatureButton">
        <button
          onClick={() => navigate('/signin')}
          className="mb-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Click Here To Sign In
        </button>
      </section>
    </div>
  )
}

export default Home
