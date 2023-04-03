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
    // <div className="reviewContainer">
    //   <div className="formBox">
    //     <form onSubmit={handleSubmit}>
    //       <h2>Post a comment!</h2>
    //       <label htmlFor="content"></label>
    //       <textarea
    //         cols="40"
    //         rows="5"
    //         placeholder="Leave review here"
    //         id="content"
    //         onChange={handleChange}
    //         value={createComment.content}
    //       ></textarea>
    //       <div>
    //         <button className="formSubmit-btn" type="submit">
    //           Send
    //         </button>
    //       </div>
    //     </form>
    //   </div>
    // </div>
    <div>
      <h1 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
        Post a comment!
      </h1>
      <form onSubmit={handleSubmit} className="form">
        <div class="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
          <div class="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
            <label for="content" class="sr-only">
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
          <div class="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
            <button
              type="submit"
              class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
            >
              Post comment
            </button>
            <div class="flex pl-0 space-x-1 sm:pl-2">
              <button
                type="button"
                class="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
              >
                <svg
                  aria-hidden="true"
                  class="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span class="sr-only">Attach file</span>
              </button>
              <button
                type="button"
                class="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
              >
                <svg
                  aria-hidden="true"
                  class="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span class="sr-only">Upload image</span>
              </button>
            </div>
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
