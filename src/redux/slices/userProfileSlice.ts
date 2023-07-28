import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface UserProfileState {
  name: string | null;
  public_username: string | null;
  about: string | null;
  profile_picture: string | null;
  poster_picture: string | null;
}

const initialState: UserProfileState = {
  name: null,
  public_username: null,
  about: null,
  profile_picture: null,
  poster_picture: null,
};

const userProfileSlice = createSlice({
  name: 'userProfile',
  initialState,
  reducers: {
    setUserProfile: (state, action: PayloadAction<UserProfileState>) => {
      state.name = action.payload.name;
      state.public_username = action.payload.public_username;
      state.about = action.payload.about;
      state.profile_picture = action.payload.profile_picture;
      state.poster_picture = action.payload.poster_picture;
    },
    clearUserProfile: (state) => {
      state.name= null;
      state.public_username= null;
      state.about= null;
      state.profile_picture= null;
      state.poster_picture= null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUserProfile, clearUserProfile } = userProfileSlice.actions;

export default userProfileSlice.reducer;
