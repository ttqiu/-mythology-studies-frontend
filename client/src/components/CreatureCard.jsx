const CreatureCard = (props) => {
  return (
    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="creature-card">
        <img class="rounded-t-lg" src={props.image} alt="creature" />
      </div>
      <div class="p-5">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {props.name}
        </h5>
      </div>
    </div>
  )
}

export default CreatureCard
