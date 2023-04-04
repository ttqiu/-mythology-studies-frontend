import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Client from '../services/api'

const PostComment = ({ user }) => {
  let navigate = useNavigate()
  const { userId } = useParams()
  const { creatureId } = useParams()

  const initialState = {
    content: ''
  }
  const [createComment, setCreateComment] = useState(initialState)

  const handleChange = (event) => {
    setCreateComment({
      ...createComment,
      [event.target.id]: event.target.value
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    await Client.post(`/api/comments/${userId}/${creatureId}`, createComment)
    setCreateComment(initialState)
    navigate(`/creatureDetails/${creatureId}/`)
  }

  return user ? (
    <div>
      <h1 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
        Post a comment!
      </h1>
      <form onSubmit={handleSubmit} className="form">
        <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
          <div className="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
            <label for="content" className="sr-only">
              Your comment
            </label>
            <textarea
              rows="5"
              id="content"
              onChange={handleChange}
              value={createComment.content}
              class="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
              placeholder="Write a comment..."
              required
            ></textarea>
          </div>
          <div className="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
            <button
              type="submit"
              className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
            >
              Post comment
            </button>
          </div>
        </div>
      </form>
    </div>
  ) : (
    <div className="protected">
      <h3>Oops! You must be signed in to do that!</h3>
      <button onClick={() => navigate('/signin')}>Sign In</button>
    </div>
  )
}

export default PostComment
