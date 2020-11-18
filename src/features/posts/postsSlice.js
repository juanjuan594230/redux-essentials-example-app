import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: '1', title: 'First Post!', content: 'Hello!' },
  { id: '2', title: 'Second Post', content: 'More text' }
]

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
      postAdded(state, action) {
        // state.posts.push(action.payload); error
        state.push(action.payload);
      }
  }
});

export const { postAdded } = postsSlice.actions; // postAdded为action creator

export default postsSlice.reducer;