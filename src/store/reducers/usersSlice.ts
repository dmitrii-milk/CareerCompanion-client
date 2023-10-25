import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '../../models';

interface IUserState {
  users: IUser[];
  isLoading: boolean;
  error: null | string | Record<string, any>;
  count: number;
}

const initialState: IUserState = {
  error: null,
  isLoading: false,
  users: [],
  count: 0,
};




export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    incCount(state, action: PayloadAction<number>) {
      state.count += action.payload;
    },
    decCount(state) {
      state.count -= 1;
    },
  },
});

export default userSlice.reducer;
