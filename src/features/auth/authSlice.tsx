import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authService";
import {
  IAuthState,
  ILoginFormData,
  IRegisterUserData,
} from "../../shared/types";

//Get user from local storage
const user = JSON.parse(localStorage.getItem("user")!);

const initialState: IAuthState = {
  user: user ? user : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

//Registration - async function
export const register = createAsyncThunk(
  "auth/register",
  async (user: IRegisterUserData, thunkAPI) => {
    try {
      return await authService.register(user);
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

//Login - async function
export const login = createAsyncThunk(
  "auth/login",
  async (user: ILoginFormData, thunkAPI) => {
    try {
      return await authService.login(user);
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

export const refresh = async (refreshToken: any) => {
  try {
    return await authService.refreshToken(refreshToken);
  } catch (error: any) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    console.log("BLAD", error);
    return message;
  }
};

//Logout
export const logout = createAsyncThunk("auth/logout", () => {
  authService.logout();
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    //when we want to restore the default state
    reset: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.message = "";
    },
    refreshToken: (state, action) => {
      const { token, refresh_token } = action.payload;
      state.user.token = token;
      state.user.refresh_token = refresh_token;
    },
  },
  //Account state - pendning, fullfiled, rejected
  extraReducers(builder) {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload as string;
        state.user = null!;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null!;
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload as string;
        state.user = null!;
      });
  },
});

export const { reset, refreshToken } = authSlice.actions;
export default authSlice.reducer;
