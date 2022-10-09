import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { ISearchState, IUserDetails, IUsersState } from "../../shared/types";
import userService from "./userService";

const initialState: IUsersState = {
  users: {
    total: 0,
    data: [],
  },
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

//Get users
export const getUsers = createAsyncThunk(
  "/users/getAll",
  async (searchSettings: ISearchState, thunkAPI) => {
    try {
      const token = (thunkAPI.getState() as RootState).auth.user.token;
      return await userService.getUsers(
        searchSettings.pagination.page,
        searchSettings.pagination.perPage,
        searchSettings.search,
        searchSettings.is_activated,
        token
      );
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

//Patch user
export const patchUser = createAsyncThunk(
  "/user/patch",
  async (userData: IUserDetails, thunkAPI) => {
    try {
      const token = (thunkAPI.getState() as RootState).auth.user?.token;
      return await userService.patchUser(userData, token);
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers(builder) {
    builder
      .addCase(getUsers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.users = action.payload;
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload as string;
      })
      .addCase(patchUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(patchUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = action.payload as string;
      })
      .addCase(patchUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload as string;
      });
  },
});

export const { reset } = userSlice.actions;
export default userSlice.reducer;
