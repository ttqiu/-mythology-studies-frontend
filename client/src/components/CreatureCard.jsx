const CreatureCard = (props) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="creature-card">
        <img className="rounded-t-lg" src={props.image} alt="creature" />
      </div>
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {props.name}
        </h5>
      </div>
    </div>
  )
}

export default CreatureCard
