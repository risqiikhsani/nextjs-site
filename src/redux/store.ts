import { configureStore } from '@reduxjs/toolkit'



import userReducer from './slices/userSlice'
import userProfileReducer from './slices/userProfileSlice'
import themeReducer from './slices/themeSlice'
import chatroomReducer from './slices/chatroomSlice'
import forgotPasswordReducer from './slices/forgotPasswordSlice'

export default configureStore({
  reducer: {
    user:userReducer,
    userProfile:userProfileReducer,
    theme:themeReducer,
    chatroom:chatroomReducer,
    forgotPassword:forgotPasswordReducer,
  },

})


