import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'

const Search = (props) => {
  return (
    <div className="search">
      <form onSubmit={props.onSubmit} className="flex space-x-1">
        <input
          type="text"
          name="search"
          value={props.value}
          onChange={props.onChange}
          className="block w-full px-4 py-2 text-purple-700 bg-white border rounded-full focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
          placeholder="Search Mythology Creatures"
        />
        <button
          className="px-4 text-white bg-purple-600 rounded-full"
          type="submit"
        >
          <MagnifyingGlassIcon className="h-5 w-5" aria-hidden="true" />
        </button>
      </form>
    </div>
  )
}

export default Search
