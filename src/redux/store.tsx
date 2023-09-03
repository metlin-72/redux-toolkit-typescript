import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user"
import themeReducer from "./theme"
import postReducer from "./post"

const store = configureStore({
  reducer: {
    user: userReducer,
    theme: themeReducer,    
    post: postReducer,
  }
})

export {store};
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;