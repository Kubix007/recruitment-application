import { createSlice } from "@reduxjs/toolkit";
import { ISearchState } from "../../shared/types";

const initialState: ISearchState = {
  pagination: {
    page: 1,
    perPage: 4,
  },
  search: "",
  is_activated: "ACTIVE%2CINACTIVE",
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
    setIsActivated(state, action) {
      state.is_activated = action.payload;
    },
  },
});

export const { reset, changePage, changePerPage, setSearch, setIsActivated } =
  searchSlice.actions;
export default searchSlice.reducer;
