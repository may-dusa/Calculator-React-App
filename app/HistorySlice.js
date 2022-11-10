import { createSlice } from "@reduxjs/toolkit";

const historySlice = createSlice({
  name: "historySlice",
  initialState: {
    history: [],
  },
  reducers: {
    addToHistory(state, actions) {
      const currentHistory = state.history;
      const changeHistory = Array.from(currentHistory).push(actions.payload);
      state = changeHistory;

      return state;
    },
  },
});

export const { addToHistory } = historySlice.actions;
export default historySlice.reducer;
export const currentHistoryState = (state) => state.historyReducer.history;
