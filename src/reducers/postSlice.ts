/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
import {
  PayloadAction,
  createSlice,
  nanoid,
  createAsyncThunk,
} from '@reduxjs/toolkit';
import { sub } from 'date-fns';
import axios from 'axios';

import { RootState } from '@/app/store';
import Status from '@/types';

const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts';

const initialState: PostsState = {
  posts: [],
  status: Status.idle,
  error: null,
};

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const response = await axios.get(POSTS_URL);
  return [...response.data] as Post[];
});

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdded: {
      reducer: (state, action: PayloadAction<Post>) => {
        state.posts.push(action.payload);
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
            reactions: {
              thumbsUp: 0,
              wow: 0,
              heart: 0,
              rocket: 0,
              coffee: 0,
            },
          },
        };
      },
    },
    reactionAdded(state, action) {
      const { postId, reaction } = action.payload;
      const existingPost = state.posts.find((post) => post.id === postId);
      if (existingPost) {
        // eslint-disable-next-line no-plusplus
        existingPost.reactions[reaction]++;
      }
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchPosts.pending, (state, action) => {
        state.status = Status.loading;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = Status.succeeded;
        let min = 1;
        const loadedPosts = action.payload.map((post) => {
          post.date = sub(new Date(), { minutes: min++ }).toISOString();
          post.reactions = {
            thumbsUp: 0,
            hooray: 0,
            heart: 0,
            rocket: 0,
            eyes: 0,
          };
          return post;
        });

        state.posts = state.posts.concat(loadedPosts);
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = Status.failed;
        state.error = action.error.message;
      });
  },
});

// I'll export this selector as a way to keep the code organized, if my state changes in the future I'll just change this selector
export const selectAllPosts = (state: RootState) => state.posts.posts;
export const getPostStatus = (state: RootState) => state.posts.status;
export const getPostError = (state: RootState) => state.posts.error;

// It's important to remember that the createSlice function automatically creates an actions object.
export const { postAdded, reactionAdded } = postsSlice.actions;

export default postsSlice.reducer;
