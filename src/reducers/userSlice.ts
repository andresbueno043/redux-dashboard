import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '@/app/store';

const initialState: UserState = [
  { id: '0', name: 'Dude Lebowski' },
  { id: '1', name: 'Jon Snow' },
  { id: '2', name: 'Home Simpson' },
];

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
});

export const selectAllUsers = (state: RootState) => state.users;

export default usersSlice.reducer;
