import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pagination: {
    page: 1,
    perPage: 4,
  },
};

export const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    reset: (state) => initialState,
    changePage(state, action) {
      state.pagination.page = action.payload;
    },
    changePerPage(state, action) {
      state.pagination.perPage = action.payload;
    },
  },
});

export const { reset, changePage, changePerPage } = paginationSlice.actions;
export default paginationSlice.reducer;
