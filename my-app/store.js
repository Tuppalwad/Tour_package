import { configureStore } from "@reduxjs/toolkit";
import Adduser from "./Redux/index";
export const store = configureStore({
  reducer: {
    user: Adduser,
  },
});

export default store;
