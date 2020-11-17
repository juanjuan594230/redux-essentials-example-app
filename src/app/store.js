import { configureStore } from '@reduxjs/toolkit'
import postsReducer from '../features/posts/postsSlice';

export default configureStore({
  reducer: {
    // This tells Redux that we want our top-level state object to have a field named posts inside, and all
    // the data for state.posts will be updated by the postsReducer function when actions are dispatched.
    // state.posts
    // actions are dispatched, postsReducer function will be called, then state.posts will be updated
    // so that the postsReducer is being passed as a reducer field named posts
    posts: postsReducer
  },
})
