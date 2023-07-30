

import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import userProfileReducer from "./slices/userProfileSlice";
import themeReducer from "./slices/themeSlice";
import chatroomReducer from "./slices/chatroomSlice";
import forgotPasswordReducer from "./slices/forgotPasswordSlice";

// export default configureStore({
//   reducer: {
//     user: userReducer,
//     userProfile: userProfileReducer,
//     theme: themeReducer,
//     chatroom: chatroomReducer,
//     forgotPassword: forgotPasswordReducer,
//   },
// });

//https://codevoweb.com/setup-redux-toolkit-in-nextjs-13-app-directory/
export const store = configureStore({
  reducer: {
    user: userReducer,
    userProfile: userProfileReducer,
    theme: themeReducer,
    chatroom: chatroomReducer,
    forgotPassword: forgotPasswordReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
