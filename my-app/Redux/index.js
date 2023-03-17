import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    data: [],
  },
  reducers: {
    addUser: (state, data) => {
      console.log(data.handler, ",,,,,,,,,,,,,");
      // insert data initialState at end of array
      state.data.push(data);
    },
  },
});

export const { addUser } = userSlice.actions;

export default userSlice.reducer;
