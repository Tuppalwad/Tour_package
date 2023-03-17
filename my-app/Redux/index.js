import { createSlice } from "@reduxjs/toolkit";

const initialState = [{ email: "test@gmail.com", password: "123" }];

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    addUser: (data) => {
      initialState.push(data);
    },
  },
});

export const { addUser } = userSlice.actions;

export default userSlice.reducer;
