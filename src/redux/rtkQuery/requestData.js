import { createSlice } from "@reduxjs/toolkit";

export const DataSlice = createSlice({
  name: "UserData",
  initialState: {
    data: []
  },
  reducers: {
    requestData: (state, action) => {
      console.log("data reached at newRequestReducer", action.payload);
      state.data = action.payload;
    }
  }
});

export const { requestData } = DataSlice.actions;
export default DataSlice.reducer;
