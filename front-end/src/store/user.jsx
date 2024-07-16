import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  // function du slice
  reducers: {
    setUser: (state, { payload }) => {
      console.log("payload", payload);
      state.user = payload;
    },
  },
})

export const { setUser } = userSlice.actions;
export default userSlice.reducer;