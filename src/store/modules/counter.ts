import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ICounter {
  count: number;
}

const initialState: ICounter = {
  count: 100
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    fetchBannerActions(state, { payload }: PayloadAction<number>) {
      state.count += payload;
    }
  }
});

export const { fetchBannerActions } = counterSlice.actions;

export default counterSlice.reducer;
