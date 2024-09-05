import { configureStore, createSlice } from "@reduxjs/toolkit";

const testSlice = createSlice({
  name: "test",
  initilaState: { value: 0 },
  reducers: {
    test: (state) => {
      state.value += 1;
    },
  },
});

export const store = configureStore({
  reducer: {
    test: testSlice.reducer,
  },
});
