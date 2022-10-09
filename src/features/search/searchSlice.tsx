import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pagination: {
    page: 1,
    perPage: 4,
  },
  search: "",
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    reset: (state) => initialState,
    changePage(state, action) {
      state.pagination.page = action.payload;
    },
    changePerPage(state, action) {
      state.pagination.perPage = action.payload;
    },
    setSearch(state, action) {
      state.search = action.payload;
    },
  },
});

export const { reset, changePage, changePerPage, setSearch } =
  searchSlice.actions;
export default searchSlice.reducer;
