import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = [
  { id: '1', title: 'First Post!', content: 'Hello!' },
  { id: '2', title: 'Second Post', content: 'More text' }
]

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
      // postAdded(state, action) {
      //   // state.posts.push(action.payload); error
      //   state.push(action.payload);
      // },
      // preparing action payload
      postAdded: {
        reducer(state, action) {
          state.push(action.payload);
        },
        // dispatch action之后，准备payload，react component不需要关注payload准备的逻辑
        prepare(content, title, userId) {
          return {
            payload: {
              id: nanoid(),
              title,
              content,
              user: userId
            }
          }
        }
      },
      // action = {type: 'posts/postUpdated', payload: {id, title, content}}
      postUpdated(state, action) {
        // mine
        // const index = state.findIndex(post => post.id === action.payload.id);
        // state[index] = action.payload;
        // example
        const { id, title, content } = action.payload;
        const post = state.find(post => post.id === id);
        if (post) {
          post.title = title;
          post.content = content;
        }
      }
  }
});

export const { postAdded, postUpdated } = postsSlice.actions; // postAdded为action creator

export default postsSlice.reducer;