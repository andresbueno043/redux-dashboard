import { createSlice } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/store';

const initialState: PostsState = [
  {
    id: '1',
    title: 'Learning Redux Toolkit',
    content: "I've heard good things",
  },
  {
    id: '2',
    title: 'Slices...',
    content: 'The more I say slice, the more I want pizza',
  },
];

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
});

// I'll export this selector as a way to keep the code organized, if my state changes in the future I'll just change this selector
export const selectAllPosts = (state: RootState) => state.posts;

export default postsSlice.reducer;
