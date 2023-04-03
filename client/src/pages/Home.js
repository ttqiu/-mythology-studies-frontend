import { useNavigate } from 'react-router-dom'

const Home = () => {
  let navigate = useNavigate()

  return (
    <div className="home-container">
      <img
        className="logoimage"
        src="https://img0.baidu.com/it/u=823076944,3031334322&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=667"
      ></img>
      <h1>Welcome To Mythology Studies!</h1>
      <section className="welcome-signin">
        <button onClick={() => navigate('/signin')}>
          Click Here To Get Started
        </button>
      </section>
    </div>
  )
}

export default Home
