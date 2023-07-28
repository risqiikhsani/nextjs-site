import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface UserState {
  id: number | null;
  email: string | null;
  is_staff: boolean;
  date_joined: string | null;
  phone_number: string | null;
  email_verified: boolean;
}

const initialState: UserState = {
  id: null,
  email: null,
  is_staff: false,
  date_joined: null,
  phone_number: null,
  email_verified: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      state.id = action.payload.id;
      state.email = action.payload.email;
      state.is_staff = action.payload.is_staff;
      state.date_joined = action.payload.date_joined;
      state.phone_number = action.payload.phone_number;
      state.email_verified = action.payload.email_verified;
    },
    clearUser: (state) => {
      state.id= null;
      state.email= null;
      state.is_staff= false;
      state.date_joined= null;
      state.phone_number= null;
      state.email_verified= false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;
