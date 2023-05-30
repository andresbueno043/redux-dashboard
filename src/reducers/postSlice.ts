import { PayloadAction, createSlice, nanoid } from '@reduxjs/toolkit';
import { sub } from 'date-fns';

import { RootState } from '@/app/store';

const initialState: PostsState = [
  {
    id: '1',
    title: 'Learning Redux Toolkit',
    content: "I've heard good things",
    userId: '1',
    date: sub(new Date(), { minutes: 10 }).toISOString(),
  },
  {
    id: '2',
    title: 'Slices...',
    content: 'The more I say slice, the more I want pizza',
    userId: '2',
    date: sub(new Date(), { minutes: 5 }).toISOString(),
  },
];

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdded: {
      reducer: (state, action: PayloadAction<Post>) => {
        state.push(action.payload);
      },
      prepare: (
        title: string,
        content: string,
        userId: string
      ): { payload: Post } => {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            userId,
            date: new Date().toISOString(),
          },
        };
      },
    },
  },
});

// I'll export this selector as a way to keep the code organized, if my state changes in the future I'll just change this selector
export const selectAllPosts = (state: RootState) => state.posts;

// It's important to remember that the createSlice function automatically creates an actions object.
export const { postAdded } = postsSlice.actions;

export default postsSlice.reducer;
